import { Button, Input, Modal } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ChangeEvent, useEffect, useState } from "react";
import { ModalProps } from "../interfaces/Iprops";
import { useUserOperatings } from "../hooks/useUserOperatings";
import { defaultValuesAdd, defaultValuesEdit } from "./Functions";
export const ModalContent = ({
  userSet,
  addUser,
  isModalAddChecked,
  isModalOpen,
  valuesEdit,
  editUser,
  modalClose,
  handleCarChange,
}: ModalProps) => {
  const { addFields, user, removeFields } = useUserOperatings();
  const [validationSchema, setValidationSchema] = useState({});

  useEffect(() => {
    setValidationSchema(
      Yup.object({
        name: Yup.string()
          .required()
          .matches(/^[A-Za-z\s]+$/, "Required english letters"),
      })
    );
  });

  const onSubmit = () => {
    if (isModalAddChecked) {
      addUser();
    } else {
      editUser();
    }
    modalClose();
  };
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit,
    validationSchema,
  });

  useEffect(() => {
    if (isModalAddChecked) defaultValuesAdd(formik, user);
    else defaultValuesEdit(formik);
    formik.resetForm();
  }, [isModalOpen]);

  return (
    <>
      <Modal
        title={isModalAddChecked ? "Adding a new user" : "Editing the user"}
        open={isModalOpen}
        onCancel={modalClose}
        footer={[
          <Button className="but" onClick={modalClose} key="back">
            Cancel
          </Button>,
        ]}
      >
        <form onSubmit={formik.handleSubmit}>
          <div style={{ display: "flex" }}>
            <div>
              <Input
                className="main-input"
                placeholder="name"
                value={isModalAddChecked ? formik.values.name : valuesEdit.name}
                onBlur={formik.handleBlur}
                onChange={(e: any) => {
                  userSet("name", e);
                  formik.handleChange(e);
                }}
                id="Name"
                name="name"
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
            </div>

            <div style={{ display: "block" }}>
               {isModalAddChecked?  user.cars.map((input, index) => {
                return (
                  <div
                    style={{ margin: "10px 10px", display: "flex" }}
                    key={index}
                  >
                    <Input
                      value={ input.brand[index]}
                      name="brand"
                      onChange={(event) => {
                        handleCarChange(index, event);
                      }}
                      placeholder="brand"
                    />
                    <Button
                      onClick={() => {
                        removeFields(index);
                      }}
                      style={{ marginLeft: "20px" }}
                    >
                      Remove
                    </Button>
                  </div>
                );
              }): valuesEdit.cars.map((input, index) => {
                return (
                  <div
                    style={{ margin: "10px 10px", display: "flex" }}
                    key={index}
                  >
                    <Input
                      value={ input.brand[index]}
                      name="brand"
                      onChange={(event) => {
                        handleCarChange(index, event);
                      }}
                      placeholder="brand"
                    />
                    <Button
                      onClick={() => {
                        removeFields(index);
                      }}
                      style={{ marginLeft: "20px" }}
                    >
                      Remove
                    </Button>
                  </div>
                );
              })}
            
            </div>
          </div>
          <Button onClick={addFields}>Add more</Button>

          <Button className="but" type="primary" htmlType="submit">
            Submit
          </Button>
        </form>
      </Modal>
    </>
  );
};

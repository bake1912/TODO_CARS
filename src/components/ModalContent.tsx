import { Button, Input, Modal } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ChangeEvent, useEffect, useState } from "react";
import { ModalProps } from "../interfaces/Iprops";
import { useUserOperatings } from "../hooks/useUserOperatings";
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
  const { addFields, user, editingUser, removeFields } = useUserOperatings();
  const [validationSchema, setValidationSchema] = useState({});

  useEffect(() => {
    setValidationSchema(
      Yup.object({
        name: Yup.string().required(),
        age: Yup.number().required(),
        adress: Yup.string().required(),
      })
    );
  }, [isModalAddChecked]);

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
      age: "",
      adress: "",
    },
    onSubmit,
    validationSchema,
  });
  const defaultValuesEdit = () => {
    formik.values.name = "name";
    formik.values.age = "0";
    formik.values.adress = "adress";
  };

  const defaultValuesAdd = () => {
    formik.values.name = "";
    formik.values.age = "";
    formik.values.adress = "";
    user.cars = [];
  };
  useEffect(() => {
    if (isModalAddChecked) defaultValuesAdd();
    else defaultValuesEdit();
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
                onChange={
                  isModalAddChecked
                    ? (e: ChangeEvent) => {
                        userSet("name", e);
                        formik.handleChange(e);
                      }
                    : (e: ChangeEvent) => {
                        userSet("name", e);
                        formik.handleChange(e);
                      }
                }
                id="Name"
                name="name"
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="error">Required</div>
              ) : null}

              <Input
                className="main-input"
                placeholder="age"
                onBlur={formik.handleBlur}
                value={isModalAddChecked ? formik.values.age : valuesEdit.age}
                onChange={
                  isModalAddChecked
                    ? (e: ChangeEvent) => {
                        userSet("age", e);
                        formik.handleChange(e);
                      }
                    : (e: ChangeEvent) => {
                        userSet("age", e);
                        formik.handleChange(e);
                      }
                }
                name="age"
                id="age"
              />
              {formik.errors.age && formik.touched.age ? (
                <div className="error">Enter a number</div>
              ) : null}
              <Input
                className="main-input"
                placeholder="adress"
                onBlur={formik.handleBlur}
                value={
                  isModalAddChecked ? formik.values.adress : valuesEdit.adress
                }
                onChange={
                  isModalAddChecked
                    ? (e: ChangeEvent) => {
                        userSet("adress", e);
                        formik.handleChange(e);
                      }
                    : (e: ChangeEvent) => {
                        userSet("adress", e);
                        formik.handleChange(e);
                      }
                }
                name="adress"
                id="Adress"
              />
              {formik.errors.adress && formik.touched.adress ? (
                <div className="error">Required</div>
              ) : null}
            </div>
            <div style={{ display: "block" }}>
              {user.cars.map((input, index) => {
                return (
                  <div
                    style={{ margin: "10px 10px", display: "flex" }}
                    key={index}
                  >
                    <Input
                      value={input.brand[index]}
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

import { Button, Input, Modal } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ChangeEvent, useEffect, useState } from "react";
import { ModalProps } from "../interfaces/Iprops";
export const ModalContent = ({
  userSet,
  addUser,
  isModalAddChecked,
  isModalOpen,
  ourUser,
  editUser,
  modalClose,
}: ModalProps) => {
  const [fieldsAdd, setFieldsAdd] = useState(0);

  const [validationSchema, setValidationSchema] = useState({});
  const fieldsAddCounter = () => {
    setFieldsAdd((prev) => prev + 1);
    userSet('carsInput', '')
  };
  let fields = [];

  for (let i = 0; i < fieldsAdd; i++) {
    fields.push(
      <Input
        onChange={(e: any) => {

          userSet("cars", e);

        }}
        className="input-car"
      />
    );
  }
  useEffect(() => {
    if (isModalAddChecked || isModalAddChecked == false) {
      setValidationSchema(
        Yup.object({
          name: Yup.string().required(),
          age: Yup.number().required(),
          adress: Yup.string().required(),
        })
      );
    }
  }, []);

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
                value={isModalAddChecked ? formik.values.name : ourUser.name}
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
                value={isModalAddChecked ? formik.values.age : ourUser.age}
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
                  isModalAddChecked ? formik.values.adress : ourUser.adress
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
            <div style={{}}>
              {fields}
              <Button onClick={() => { fieldsAddCounter();  }}>Add car</Button>
            </div>
          </div>
          <Button className="but" type="primary" htmlType="submit">
            Submit
          </Button>
        </form>
      </Modal>
    </>
  );
};

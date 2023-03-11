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
        age: Yup.number().required().positive().integer().max(150),
        adress: Yup.string()
          .required()
        ,
        education: Yup.string()
          .required()
          .matches(/^[A-Za-z\s]+$/, "Required english letters"),
        telephone: Yup.string()
          .required()
          .matches(/^380\d{9}$/, "Enter correct ukrainian number with 380"),
        isDriver: Yup.string()
          .matches(/^(Yes|No)$/)
          .required(),
        childrenCount: Yup.number().required().positive().integer(),
        hobby: Yup.string()
          .required()
          .matches(/^[A-Za-z\s]+$/, "Required english letters"),
        email: Yup.string().required().required().email(),
        typeTransport: Yup.string()
          .required()
          .matches(/^[A-Za-z\s]+$/, "Required english letters"),
        ills: Yup.string()
          .required()
          .matches(/^[A-Za-z\s]+$/, "Required english letters"),
        internetProvider: Yup.string()
          .required()
          .matches(/^[A-Za-z\s]+$/, "Required english letters"),
        job: Yup.string()
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
      age: "",
      adress: "",
      education: "",
      telephone: undefined,
      isDriver: "",
      childrenCount: undefined,
      hobby: "",
      email: "",
      typeTransport: "",
      ills: "",
      internetProvider: "",
      job: "",
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

              <Input
                className="main-input"
                placeholder="age"
                onBlur={formik.handleBlur}
                value={isModalAddChecked ? formik.values.age : valuesEdit.age}
                onChange={(e: any) => {
                  userSet("age", e);
                  formik.handleChange(e);
                }}
                name="age"
                id="age"
              />
              {formik.errors.age && formik.touched.age ? (
                <div className="error">{formik.errors.age}</div>
              ) : null}
              <Input
                className="main-input"
                placeholder="adress"
                onBlur={formik.handleBlur}
                value={
                  isModalAddChecked ? formik.values.adress : valuesEdit.adress
                }
                onChange={(e: any) => {
                  userSet("adress", e);
                  formik.handleChange(e);
                }}
                name="adress"
                id="Adress"
              />
              {formik.errors.adress && formik.touched.adress ? (
                <div className="error">{formik.errors.adress}</div>
              ) : null}
              <Input
                className="main-input"
                placeholder="education"
                value={
                  isModalAddChecked
                    ? formik.values.education
                    : valuesEdit.education
                }
                onBlur={formik.handleBlur}
                onChange={(e: any) => {
                  userSet("education", e);
                  formik.handleChange(e);
                }}
                id="education"
                name="education"
              />
              {formik.errors.education && formik.touched.education ? (
                <div className="error">{formik.errors.education}</div>
              ) : null}
              <Input
                className="main-input"
                placeholder="telephone"
                value={
                  isModalAddChecked
                    ? formik.values.telephone
                    : valuesEdit.telephone
                }
                onBlur={formik.handleBlur}
                onChange={(e: any) => {
                  userSet("telephone", e);
                  formik.handleChange(e);
                }}
                id="telephone"
                name="telephone"
              />
              {formik.errors.telephone && formik.touched.telephone ? (
                <div className="error">{formik.errors.telephone}</div>
              ) : null}
              <Input
                className="main-input"
                placeholder="isDriver (Yes or no)"
                value={
                  isModalAddChecked
                    ? formik.values.isDriver
                    : valuesEdit.isDriver
                }
                onBlur={formik.handleBlur}
                onChange={(e: any) => {
                  userSet("isDriver", e);
                  formik.handleChange(e);
                }}
                id="isDriver"
                name="isDriver"
              />
              {formik.errors.isDriver && formik.touched.isDriver ? (
                <div className="error">{formik.errors.isDriver} </div>
              ) : null}
              <Input
                className="main-input"
                placeholder="childrenCount"
                value={
                  isModalAddChecked
                    ? formik.values.childrenCount
                    : valuesEdit.childrenCount
                }
                onBlur={formik.handleBlur}
                onChange={(e: any) => {
                  userSet("childrenCount", e);
                  formik.handleChange(e);
                }}
                id="childrenCount"
                name="childrenCount"
              />
              {formik.errors.childrenCount && formik.touched.childrenCount ? (
                <div className="error">{formik.errors.childrenCount}</div>
              ) : null}
              <Input
                className="main-input"
                placeholder="hobby"
                value={
                  isModalAddChecked ? formik.values.hobby : valuesEdit.hobby
                }
                onBlur={formik.handleBlur}
                onChange={(e: any) => {
                  userSet("hobby", e);
                  formik.handleChange(e);
                }}
                id="hobby"
                name="hobby"
              />
              {formik.errors.hobby && formik.touched.hobby ? (
                <div className="error">{formik.errors.hobby}</div>
              ) : null}
              <Input
                className="main-input"
                placeholder="email"
                value={
                  isModalAddChecked ? formik.values.email : valuesEdit.email
                }
                onBlur={formik.handleBlur}
                onChange={(e: any) => {
                  userSet("email", e);
                  formik.handleChange(e);
                }}
                id="email"
                name="email"
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
              <Input
                className="main-input"
                placeholder="typeTransport"
                value={
                  isModalAddChecked
                    ? formik.values.typeTransport
                    : valuesEdit.typeTransport
                }
                onBlur={formik.handleBlur}
                onChange={(e: any) => {
                  userSet("typeTransport", e);
                  formik.handleChange(e);
                }}
                id="typeTransport"
                name="typeTransport"
              />
              {formik.errors.typeTransport && formik.touched.typeTransport ? (
                <div className="error">{formik.errors.typeTransport}</div>
              ) : null}
              <Input
                className="main-input"
                placeholder="ills"
                value={isModalAddChecked ? formik.values.ills : valuesEdit.ills}
                onBlur={formik.handleBlur}
                onChange={(e: any) => {
                  userSet("ills", e);
                  formik.handleChange(e);
                }}
                id="ills"
                name="ills"
              />
              {formik.errors.ills && formik.touched.ills ? (
                <div className="error">{formik.errors.ills}</div>
              ) : null}
              <Input
                className="main-input"
                placeholder="internetProvider"
                value={
                  isModalAddChecked
                    ? formik.values.internetProvider
                    : valuesEdit.internetProvider
                }
                onBlur={formik.handleBlur}
                onChange={(e: any) => {
                  userSet("internetProvider", e);
                  formik.handleChange(e);
                }}
                id="internetProvider"
                name="internetProvider"
              />
              {formik.errors.internetProvider &&
              formik.touched.internetProvider ? (
                <div className="error">{formik.errors.internetProvider}</div>
              ) : null}
              <Input
                className="main-input"
                placeholder="job"
                value={isModalAddChecked ? formik.values.job : valuesEdit.job}
                onBlur={formik.handleBlur}
                onChange={(e: any) => {
                  userSet("job", e);
                  formik.handleChange(e);
                }}
                id="job"
                name="job"
              />
              {formik.errors.job && formik.touched.job ? (
                <div className="error">{formik.errors.job}</div>
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

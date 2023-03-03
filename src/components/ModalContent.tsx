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

        education: Yup.string().required(),
        telephone: Yup.number().required(),
        isDriver: Yup.string().matches(/^(Yes|No)$/).required(),
        childrenCount: Yup.number().required(),
        hobby: Yup.string().required(),
        email: Yup.string().required().email("Enter email"),
        typeTransport: Yup.string().required(),
        ills: Yup.string().required(),
        internetProvider: Yup.string().required(),
        job: Yup.string().required(),


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
      education: "",
      telephone: 0,
      isDriver: "",
      childrenCount: 0,
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
  const defaultValuesEdit = () => {

    formik.values.name = " ";
    formik.values.age = "0";
    formik.values.adress = " ";
    formik.values.education = " ";
    formik.values.isDriver = "Yes";
    formik.values.childrenCount = 0;
    formik.values.hobby = " ";
    formik.values.email = " ";
    formik.values.ills = " ";
    formik.values.job = " ";
    formik.values.telephone = 0;
    formik.values.typeTransport = " ";
    formik.values.internetProvider = " ";

    formik.values.name = "name";
    formik.values.age = "0";
    formik.values.adress = "adress";

  };

  const defaultValuesAdd = () => {
    formik.values.name = "";
    formik.values.age = "";
    formik.values.adress = "";

    formik.values.name = "";
    formik.values.age = "0";
    formik.values.adress = "";
    formik.values.education = "";
    formik.values.isDriver = "";
    formik.values.childrenCount = 0;
    formik.values.hobby = "";
    formik.values.email = "";
    formik.values.ills = "";
    formik.values.job = "";
    formik.values.telephone = 0;
    formik.values.internetProvider = "";
    formik.values.typeTransport = "";

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
                onChange={(e: any) => {
                  userSet("name", e);
                  formik.handleChange(e);
                }}
                id="Name"
                name="name"
              />
              {isModalOpen&&formik.errors.name && formik.touched.name ? (
                <div className="error">Required</div>
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
              {isModalOpen&&formik.errors.age && formik.touched.age ? (
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
                onChange={(e: any) => {
                  userSet("adress", e);
                  formik.handleChange(e);
                }}
                name="adress"
                id="Adress"
              />
              {isModalOpen&&formik.errors.adress && formik.touched.adress ? (
                <div className="error">Required</div>
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
              {isModalOpen&&formik.errors.education && formik.touched.education ? (
                <div className="error">Required</div>
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
              {isModalOpen&&formik.errors.telephone && formik.touched.telephone ? (
                <div className="error">Enter a number</div>
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
              {isModalOpen&& formik.errors.isDriver && formik.touched.isDriver ? (
                <div className="error">Yer or No </div>
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
              {isModalOpen&&formik.errors.childrenCount && formik.touched.childrenCount ? (
                <div className="error">Enter a number</div>
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
              {isModalOpen&&formik.errors.hobby && formik.touched.hobby ? (
                <div className="error">Required</div>
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
              {isModalOpen&&formik.errors.email && formik.touched.email ? (
                <div className="error">Enter an email</div>
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
              {isModalOpen&&formik.errors.typeTransport && formik.touched.typeTransport ? (
                <div className="error">Required</div>
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
              {isModalOpen&&formik.errors.ills && formik.touched.ills ? (
                <div className="error">Required</div>
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
              {isModalOpen&&formik.errors.internetProvider &&
              formik.touched.internetProvider ? (
                <div className="error">Required</div>
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
              {isModalOpen&&formik.errors.job && formik.touched.job ? (
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

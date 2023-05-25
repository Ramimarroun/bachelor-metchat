import { Field, Form, Formik } from "formik";
import { React, useState } from "react";
import * as yup from "yup";
import { Flex } from "./Flex";
import { Modal } from "react-bootstrap";
import { accountApi } from "../api/account-api";
import { useNavigate } from "react-router-dom";
import { useAccount } from "../app/account-context";

export const Register = ({ registerFormRef, setModel, model }) => {
  const history = useNavigate();
  const account = useAccount();

  const onSubmitRegister = () => {
    const values = registerFormRef.current.values;
    accountApi
      .register(values)
      .then(() => {
        setModel({ ...model, showRegisterModal: false });

        account
          .login(values.email, values.password)
          .then(() => history("/interests"))
          .catch(() => alert("Error in Login"));
      })
      .catch(() => alert("error!"));
  };
  return (
    <div id="reg" className="pb-5">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={yup.object({
          firstName: yup
            .string()
            .min(4, "Fornavn må være minst 4 tenger")
            .required("Required"),
          lastName: yup
            .string()
            .min(4, "Etternavn må være minst 4 tenger")
            .required("Required "),
          email: yup.string().email("Email is invalid").required(" Required"),
          password: yup
            .string()
            .required("Required")
            .min(6, "password-minimum-length-is-6-characters"),
          confirmPassword: yup
            .string()
            .required("Required")
            .oneOf([yup.ref("password"), null], "passwords-must-match"),
        })}
        onSubmit={() =>
          setModel({
            ...model,
            showRegisterModal: true,
          })
        }
        innerRef={registerFormRef}
      >
        {({ errors, touched }) => (
          <Form id="form_reg">
            <div className="form-row">
              <label>Fornavn</label>
              <Field name="firstName">
                {({ field }) => (
                  <input
                    type="text"
                    id="first_name"
                    placeholder="fornavn"
                    {...field}
                  />
                )}
              </Field>
              {errors.firstName && touched.firstName ? (
                <div className="text-warning">{errors.firstName}</div>
              ) : null}
            </div>
            <div className="form-row">
              <label>Etternavn</label>
              <Field name="lastName">
                {({ field }) => (
                  <input
                    type="text"
                    id="last_name"
                    placeholder="etternavn"
                    {...field}
                  />
                )}
              </Field>
              {errors.lastName && touched.lastName ? (
                <div className="text-warning">{errors.lastName}</div>
              ) : null}
            </div>
            <div className="form-row">
              <label>E-post</label>
              <Field name="email">
                {({ field }) => (
                  <input
                    type="email"
                    id="email_reg"
                    placeholder="e-post"
                    {...field}
                  />
                )}
              </Field>
              {errors.email && touched.email ? (
                <div className="text-warning">{errors.email}</div>
              ) : null}
            </div>
            <div className="form-row">
              <label>Passord</label>
              <Field name="password">
                {({ field }) => (
                  <input
                    type="password"
                    id="password_reg"
                    placeholder="passord"
                    {...field}
                  />
                )}
              </Field>
              {errors.password && touched.password ? (
                <div className="text-warning">{errors.password}</div>
              ) : null}
            </div>
            <div className="form-row">
              <label>Gjenta Passord</label>
              <Field name="confirmPassword">
                {({ field }) => (
                  <input
                    type="password"
                    id="password_reg"
                    placeholder="gjenta passord"
                    {...field}
                  />
                )}
              </Field>
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="text-warning">{errors.confirmPassword}</div>
              ) : null}
            </div>

            <Flex content="center" className="mt-5">
              <button type="submit" className="btn">
                Registrer
              </button>
            </Flex>
          </Form>
        )}
      </Formik>
      <Toc
        show={model.showRegisterModal}
        onHide={() => setModel({ ...model, showRegisterModal: false })}
        onSubmitHandler={onSubmitRegister}
      />
    </div>
  );
};

const Toc = ({ show, onHide, onSubmitHandler }) => {
  const [acceptToc, setAcceptToc] = useState(false);
  return (
    <Modal show={show} onHide={onHide} size="xl">
      <Modal.Body className="p-0">
        <div className="heading">
          <Flex content="center" align="center" className="text-muted">
            Vilkår for tjenesten
          </Flex>
        </div>
        <div className="scroll-div-object text-muted">
          <p></p>
          <p>
            Denne chat-tjenetsen har som formål å samle inn samtaledata til bruk
            i forskning. Ved å akseptere velger du å la OsloMet lagre og bruke
            dataene du registerer til forskning. Dataene dine vil forbli hos
            OsloMet og ikke deles med andre eller brukes til
            markedsføringsformål.
          </p>
        </div>
        <div className="btns">
          <Flex vertical content="center" align="center">
            <Flex align="center">
              <input
                type="checkbox"
                className="me-2"
                onChange={(e) => setAcceptToc(e.target.checked)}
              />
              <label> Jeg har lest alt og samtrykker.</label>
            </Flex>
            <Flex gap={2}>
              <button className="btn ms-0 mb-3 text-dark" onClick={onHide}>
                Tilbake
              </button>
              <button
                className="btn mb-3 text-dark"
                disabled={!acceptToc}
                onClick={onSubmitHandler}
              >
                Gå videre
              </button>
            </Flex>
          </Flex>
        </div>
      </Modal.Body>
    </Modal>
  );
};

import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useAccount } from "../app/account-context";
import { Flex } from "./Flex";

export const Login = () => {
  const navigate = useNavigate();
  const account = useAccount();
  return (
    <div className="content active inactive" id="log_in">
      <Formik
        initialValues={{
          email: "",
          password: "",
          savePassword: "",
        }}
        validationSchema={yup.object({
          email: yup.string().required("Må fylles ut"),
          password: yup.string().required("Må fylles ut"),
        })}
        onSubmit={(values) =>
          account
            .login(values.email, values.password)
            //må slette dette senere
            .then((result) => {
              console.log("result", result);
              if (result.data?.isAdmin) navigate("/admin/samtaler");
              else navigate("/kontakter");
            })
            .catch(() => alert("Feil i innlogging"))
        }
      >
        {({ errors, touched }) => (
          <Form id="form_log">
            <div className="form-row">
              <label>E-post</label>

              <Field name="email">
                {({ field }) => (
                  <input
                    type="text"
                    id="email_log"
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
                    id="password_log"
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
              <Field name="savePassword">
                {({ field }) => (
                  <Flex align="center" content="center" gap={1}>
                    <input
                      type="checkbox"
                      name="savePassword"
                      aria-label="lagre passord"
                      {...field}
                    />
                    <label className="chang-color m-0">Husk meg</label>
                  </Flex>
                )}
              </Field>
            </div>
            <Flex content="center" className="mt-5">
              <button type="submit" className="btn">
                Logg Inn
              </button>
            </Flex>
          </Form>
        )}
      </Formik>
    </div>
  );
};

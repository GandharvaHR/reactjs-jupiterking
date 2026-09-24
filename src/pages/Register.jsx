import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
    const navigate = useNavigate();
  const [apiMessage, setApiMessage] = useState("");
  const [apiError, setApiError] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      role: "",
      terms: false,
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First name is required"),

      lastName: Yup.string()
        .required("Last name is required"),

      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),

      gender: Yup.string()
        .required("Please select gender"),

      role: Yup.string()
        .required("Please select a role"),

      terms: Yup.boolean()
        .oneOf([true], "You must accept the terms"),
    }),

    onSubmit: (values) => {
      setApiMessage("");
      setApiError("");

      console.log("Form values:", values);

      // Dummy registration API

const payload = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          gender: values.gender,
          role: values.role,
        }

      axios
        .post("https://dummyjson.com/users/add", payload)
        .then((response) => {
          console.log("API Response:", response.data);

          setApiMessage("Registration successful!");
navigate("/");
          console.log("Created User ID:", response.data.id);
        })
        .catch((error) => {
          console.error("API Error:", error);

          setApiError(
            error.response?.data?.message ||
            "Registration failed"
          );
        });
    },
  });

  return (
    <div className="register-container">

      <form
        className="register-form"
        onSubmit={formik.handleSubmit}
      >

        <h2>Register</h2>

        {/* First Name */}
        <div className="form-group">
          <label>First Name</label>

          <input
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter first name"
          />

          {formik.touched.firstName &&
            formik.errors.firstName && (
              <span className="error">
                {formik.errors.firstName}
              </span>
            )}
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label>Last Name</label>

          <input
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter last name"
          />

          {formik.touched.lastName &&
            formik.errors.lastName && (
              <span className="error">
                {formik.errors.lastName}
              </span>
            )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter email"
          />

          {formik.touched.email &&
            formik.errors.email && (
              <span className="error">
                {formik.errors.email}
              </span>
            )}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>

          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter password"
          />

          {formik.touched.password &&
            formik.errors.password && (
              <span className="error">
                {formik.errors.password}
              </span>
            )}
        </div>

        {/* Radio Buttons */}
        <div className="form-group">

          <label>Gender</label>

          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formik.values.gender === "male"}
                onChange={formik.handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formik.values.gender === "female"}
                onChange={formik.handleChange}
              />
              Female
            </label>
          </div>

          {formik.touched.gender &&
            formik.errors.gender && (
              <span className="error">
                {formik.errors.gender}
              </span>
            )}
        </div>

        {/* Role Radio */}
        <div className="form-group">

          <label>Role</label>

          <div>
            <label>
              <input
                type="radio"
                name="role"
                value="developer"
                checked={formik.values.role === "developer"}
                onChange={formik.handleChange}
              />
              Developer
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="tester"
                checked={formik.values.role === "tester"}
                onChange={formik.handleChange}
              />
              Tester
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="manager"
                checked={formik.values.role === "manager"}
                onChange={formik.handleChange}
              />
              Manager
            </label>
          </div>

          {formik.touched.role &&
            formik.errors.role && (
              <span className="error">
                {formik.errors.role}
              </span>
            )}
        </div>

        {/* Checkbox */}
        <div className="checkbox-group">

          <label>
            <input
              type="checkbox"
              name="terms"
              checked={formik.values.terms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            I agree to the Terms and Conditions
          </label>

          {formik.touched.terms &&
            formik.errors.terms && (
              <span className="error">
                {formik.errors.terms}
              </span>
            )}
        </div>

        {/* API Success */}
        {apiMessage && (
          <p className="success">
            {apiMessage}
          </p>
        )}

        {/* API Error */}
        {apiError && (
          <p className="error">
            {apiError}
          </p>
        )}

        <button type="submit">
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;

import { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";



function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error while typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    debugger

try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username: formData.email,
          password: formData.password,
          expiresInMins: 30,
        }
      );
      console.log("Login response:", response.data);

      // Store token
      localStorage.setItem("accessToken", response.data.accessToken);

      alert("Login successful!");

      // Navigate to dashboard
       navigate("/dashboard");

    } catch (err) {
      console.error(err);
    }


  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label>Email</label>

          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />

          {errors.email && (
            <span className="error">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label>Password</label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />

          {errors.password && (
            <span className="error">{errors.password}</span>
          )}
        </div>

        <button type="submit">Login</button>
              <p style={{ marginLeft: "10px" }}>
        <Link to="/register">Click here to Register</Link>
      </p>
      </form>


    </div>
  );
}

export default Login;

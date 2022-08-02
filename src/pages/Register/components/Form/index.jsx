import { useState } from "react";
import { EyeSlash } from "phosphor-react";
import api from "../../../../services/api";

export function Form() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmitForm(event) {
    setLoading(true);
    event.preventDefault();

    const response = await api.post("/user/create", formData);
    console.log(response.data);
    alert("Formulário enviado com sucesso !");
  }

  return (
    <div className="container-form">
      <h2 className="form-container-title">Register</h2>
      <form>
        <div className="form-login-inputgroup">
          <label className="form-login-label">Username</label>
          <input
            type="name"
            name="username"
            placeholder="Lucas Gabriel"
            className="form-login-input"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-login-inputgroup mt-8">
          <label className="form-login-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@placeholder.com"
            className="form-login-input"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-login-inputgroup mt-8 ">
          <label className="form-login-label">Password</label>
          <div className="flex items-center">
            <input
              type="password"
              name="password"
              placeholder="***********"
              className="form-login-input flex-1"
              onChange={handleInputChange}
            />
            <EyeSlash size={24} color="#aaa" />
          </div>
        </div>
        <div className="form-login-inputgroup mt-8 ">
          <label className="form-login-label">Repeat Password</label>
          <div className="flex items-center">
            <input
              type="password"
              placeholder="***********"
              className="form-login-input flex-1"
            />
            <EyeSlash size={24} color="#aaa" />
          </div>
        </div>
        <div className="form-login-links-container">
          <a href="/login" className="form-login-link">
            I already have an account
          </a>
        </div>
        <button className="form-login-button" onClick={handleSubmitForm}>
          {loading ? "Sending..." : "Register"}
        </button>
      </form>
    </div>
  );
}

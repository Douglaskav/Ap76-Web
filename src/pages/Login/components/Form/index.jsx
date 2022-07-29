import { useState } from "react";
import { EyeSlash } from "phosphor-react";
import { ErrorAlert } from "../../../../components/ErrorAlert/";
import "./styles.css";

export function Form() {
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  return (
    <div className="container-form">
      {showErrorAlert ? (
        <ErrorAlert setShowErrorAlert={setShowErrorAlert} />
      ) : (
        ""
      )}
      <h2 className="form-container-title mt-20">Login</h2>
      <form>
        <div className="form-login-inputgroup">
          <label className="form-login-label">Email</label>
          <input
            type="email"
            placeholder="example@placeholder.com"
            className="form-login-input"
          />
        </div>

        <div className="form-login-inputgroup mt-12">
          <label className="form-login-label">Password</label>
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
          <a href="/forgot" className="form-login-link">
            I forgot my password
          </a>
          <a href="/register" className="form-login-link">
            I don't have an account yet
          </a>
        </div>

        <button className="form-login-button">Login</button>
      </form>
    </div>
  );
}

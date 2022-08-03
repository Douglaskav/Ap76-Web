import { useState } from "react";
import { ErrorAlert } from "../../../../components/ErrorAlert/";
import api from "../../../../services/api";

export function Form() {
  const [loading, setLoading] = useState(false);
  const [errorAlert, setErrorAlert] = useState({ show: false, message: "" });
  const [otpCode, setOTPCode] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;

    setOTPCode(value);
  };

  const handleSubmitForm = async (event) => {
    setLoading(true);
    event.preventDefault();

    try {
      const response = await api.post("/user/verify", {
        otp: otpCode,
        email: "any_email_mail@mail.com",
      });
    } catch (error) {
      setErrorAlert({ show: true, message: error.response.data.error });
    }
  };

  return (
    <div className="container-form">
      {errorAlert.show ? (
        <ErrorAlert
          setShowErrorAlert={setErrorAlert}
          message={errorAlert.message}
        />
      ) : (
        ""
      )}
      <h2 className="form-container-title mt-20">Confirm Code</h2>
      <form>
        <div className="form-login-inputgroup">
          <label className="form-login-label">Code</label>
          <input
            type="name"
            placeholder="999999"
            maxLength="6"
            className="form-login-input"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-login-links-container">
          <a href="#" className="form-login-link">
            I don't receive any code in my email
          </a>
        </div>

        <button className="form-login-button" onClick={handleSubmitForm}>
          {loading ? "Sending..." : "Login"}
        </button>
      </form>
    </div>
  );
}

import { EyeSlash } from "phosphor-react";

export function Form() {
  return (
    <div className="container-form">
      <div>
        <h2 className="form-container-title">Register</h2>
        <form>
          <div className="form-login-inputgroup">
            <label className="form-login-label">Username</label>
            <input
              type="name"
              placeholder="Lucas Gabriel"
              className="form-login-input"
            />
          </div>
          <div className="form-login-inputgroup mt-12">
            <label className="form-login-label">Email</label>
            <input
              type="email"
              placeholder="example@placeholder.com"
              className="form-login-input"
            />
          </div>
          <div className="form-login-inputgroup mt-12 ">
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
          <div className="form-login-inputgroup mt-12 ">
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
          <button className="form-login-button">Register</button>
        </form>
      </div>
    </div>
  );
}

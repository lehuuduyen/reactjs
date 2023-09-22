import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  });
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  async function signIn() {
    let item = { email, password };
    let result = await fetch("http://hyokkoriwan.dev.com/api/signin", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    if (result.status === "error") {
      console.log(result.message);
      toast.error(result.message);
    } else {
      toast.success(result.message);
      navigate("/");
    }
    localStorage.setItem("user-info", JSON.stringify(result));
  }
  return (
    <div className="container form-login">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Login</div>

            <div className="card-body">
              <form method="POST" action="http://hyokkoriwan.dev.com/login">
                <input
                  type="hidden"
                  name="_token"
                  value="2ID8AXTaChsQ4XffRcQ3hBhBZkjH8nfmD3SVyGos"
                />
                <div className="row mb-3">
                  <label className="col-md-4 col-form-label text-md-right">
                    E-Mail Address
                  </label>

                  <div className="col-md-6">
                    <input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control "
                      name="email"
                      required=""
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-4 col-form-label text-md-right">
                    Password
                  </label>

                  <div className="col-md-6">
                    <input
                      id="password"
                      type="password"
                      className="form-control "
                      name="password"
                      required=""
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      fdprocessedid="nwpfv"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6 offset-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                        id="remember"
                      />

                      <label className="form-check-label" for="remember">
                        Remember Me
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row mb-0">
                  <div className="col-md-8 offset-md-4">
                    <button
                      className="btn btn-primary"
                      fdprocessedid="i4ect"
                      onClick={signIn}
                      type="button"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Kho() {

  const [form, setForm] = useState({
    name: String,
    password: String,
    passwordConfirm: String,
    role: 1,
    email: String,
  });
  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const navigate = useNavigate();

  async function signUp() {
    let messsage = "";
    if (!form.name) {
      messsage = "Name không được để trống";
    } else if (!form.password) {
      messsage = "Password không được để trống";
    } else if (!form.passwordConfirm) {
      messsage = "Confirm Password không được để trống";
    } else if (!form.email) {
      messsage = "Email không được để trống";
    } else if (form.password != form.passwordConfirm) {
      messsage = "Password nhập không giống nhau";
    }
    if (messsage) {
      toast.error(messsage);
    } else {
      let result = await fetch("http://hyokkoriwan.dev.com/api/product", {
        method: "POST",
        body: JSON.stringify(form),
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
      }

      // localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/");
    }
  }
  return (
    <div className="container form-login">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Kho</div>

            <div className="card-body">
              <form method="POST" action="http://hyokkoriwan.dev.com/product">
                <input
                  type="hidden"
                  name="_token"
                  value="2ID8AXTaChsQ4XffRcQ3hBhBZkjH8nfmD3SVyGos"
                />
                <div className="row mb-3">
                  <label className="col-md-4 col-form-label text-md-right">
                    Name
                  </label>

                  <div className="col-md-6">
                    <input
                      id="name"
                      type="text"
                      className="form-control "
                      name="name"
                      value={form.name}
                      onChange={onUpdateField}
                      required=""
                      autoComplete="name"
                      fdprocessedid="hd6xg7"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-4 col-form-label text-md-right">
                    E-Mail Address
                  </label>

                  <div className="col-md-6">
                    <input
                      id="email"
                      type="email"
                      className="form-control "
                      name="email"
                      value={form.email}
                      onChange={onUpdateField}
                      required=""
                      autoComplete="email"
                      fdprocessedid="fxd06k"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-md-4 col-form-label text-md-right">
                    Role
                  </label>

                  <div className="col-md-6">
                    <select
                      name="role"
                      className="form-control"
                      value={form.role}
                      onChange={onUpdateField}
                    >
                      <option value="1">Admin</option>
                      <option value="2">Quản lý kho</option>
                    </select>
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
                      value={form.password}
                      onChange={onUpdateField}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-4 col-form-label text-md-right">
                    Confirm Password
                  </label>

                  <div className="col-md-6">
                    <input
                      id="password-confirm"
                      type="password"
                      className="form-control"
                      name="passwordConfirm"
                      value={form.passwordConfirm}
                      onChange={onUpdateField}
                      required=""
                      autoComplete="new-password"
                    />
                  </div>
                </div>

                <div className="row mb-0">
                  <div className="col-md-6 offset-md-4">
                    <button
                      onClick={signUp}
                      type="button"
                      className="btn btn-primary"
                    >
                      Kho
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

export default Kho;

import React from "react";
import LayoutPages from "../components/layoutPages"

const LoginPage = () => {

  return (
    <LayoutPages className="">
      <section className="container-fluid p-2">
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div id="card" className="bg-white">
              <div className="card-header">
                <h3>Acceder</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span><i className="fab fa-facebook-square" /></span>
                  <span><i className="fab fa-google-plus-square" /></span>
                  <span><i className="fab fa-twitter-square" /></span>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user" /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="usuario" />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-key" /></span>
                    </div>
                    <input type="password" className="form-control" placeholder="contraseña" />
                  </div>
                  <div className="row align-items-center justify-content-center remember">
                    <input type="checkbox" />Recordar Ingreso
                  </div>
                  <div className="form-group">
                    <input type="submit" defaultValue="Login" className="btn btn-outline-warning p-2 m-1 login_btn justify-content-center" />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  ¿No tienes una cuenta todavía?<a>Registro</a>
                </div>
                <div className="d-flex justify-content-center">
                  <a>¿Olvidaste tu contraseña?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutPages>
  );
};

export default LoginPage;

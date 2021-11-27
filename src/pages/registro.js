import React from "react";
import LayoutPages from "../components/layoutPages"

const RegistroPage = () => {

  return (
    <LayoutPages className="">
    <section className="m-3" >
      <div id="form1" className="container-fluid">
        <div className="card bg-light">
          <article className="card-body mx-auto" style={{maxWidth: '400px'}}>
            <h4 className="card-title mt-3 text-center">Crear Cuenta</h4>
            <p className="text-center">Puedes crear tu cuenta gratis</p>
            <p>
              <a href="#" className="btn btn-block btn-twitter"> <i className="fab fa-twitter" /> &nbsp; Login via Twitter</a>
              <a href="#" className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f" /> &nbsp; Login via facebook</a>
            </p>
            <p className="divider-text">
              <span className="bg-light">O</span>
            </p>
            <form>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-user" /> </span>
                </div>
                <input className="form-control" placeholder="Nombre Completo" type="text" />
              </div> {/* form-group// */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                </div>
                <input className="form-control" placeholder="Correo Electronico" type="email" />
              </div> {/* form-group// */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-phone" /> </span>
                </div>
                <select className="custom-select" style={{maxWidth: '120px'}}>
                  <option defaultValue>+34</option>
                  <option value={1}>+972</option>
                  <option value={2}>+198</option>
                  <option value={3}>+701</option>
                </select>
                <input className="form-control" placeholder="Telefono" type="text" />
              </div> {/* form-group// */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                </div>
                <input className="form-control" placeholder="Ingrese contraseña" type="password" />
              </div> {/* form-group// */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                </div>
                <input className="form-control" placeholder="Confirme contraseña" type="password" />
              </div> {/* form-group// */}
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block"> Crear Cuenta</button>
              </div> {/* form-group// */}
              <p className="text-center">¿Ya tienes una cuenta? <a>Acceder</a> </p>
            </form>
          </article>
        </div>
      </div>
    </section>
    </LayoutPages>
  );
};

export default RegistroPage;

import React from "react";
import LayoutPages from "../components/layoutPages"

const ProfilePage = () => {
  return (
    <LayoutPages className="">
      <section className="container  card mt-2 mb-2 p-3 rounded bg-white">
        <div className="row">
          <div className="col-md-6 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="user" />
              <span className="font-weight-bold">Lernado Sanchez</span>
              <span className="text-black-50">leo@mail.com</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-6 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Perfil de Usuario</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label  className="labels form-control">Nombre
                  </label>
                  <input type="text" className="form-control" placeholder="Ej, Leonardo" defaultValue />
                </div>
                <div className="col-md-6">
                  <label className="labels">Apellido</label>
                  <input type="text" className="form-control" defaultValue placeholder="Ej, Sanchez" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Telefono</label><input type="text" className="form-control" placeholder="+593987192388" defaultValue /></div>
                <div className="col-md-12"><label className="labels">Codigo Postal</label><input type="text" className="form-control" placeholder="17493" defaultValue /></div>
                <div className="col-md-12"><label className="labels">Estado</label><input type="text" className="form-control" placeholder="Soltero" defaultValue /></div>
                <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control" placeholder="Desarrollo" defaultValue /></div>
                <div className="col-md-12"><label className="labels">Correo Electronico</label><input type="text" className="form-control" placeholder="admin@admin.com" defaultValue /></div>
                <div className="col-md-12"><label className="labels">Educación</label><input type="text" className="form-control" placeholder="Superior" defaultValue /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Pais</label>
                  <input type="text" className="form-control" placeholder="pais" defaultValue />
                </div>
                <div className="col-md-6"><label className="labels">Estado/Region</label><input type="text" className="form-control" defaultValue placeholder="estado-region" /></div>
              </div>
              <div className="mt-5 text-center">
                <button className="btn btn-primary profile-button" type="button">Guardar Perfil
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutPages>
  );
};

export default ProfilePage;

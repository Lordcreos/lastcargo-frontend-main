import React from "react";

const Footer = () => {
  return(
    <footer className="bg-light py-5" style={{
      position: 'absolute,fixed',
      width: '100%',
      left: '0',
      bottom: '0'
    }}>
      <div className="container">
        <div className="small text-center text-muted">Copyright &copy; 2021 development</div>
      </div>
    </footer>
  )
}
export default Footer

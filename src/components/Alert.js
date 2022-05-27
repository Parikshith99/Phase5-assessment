import React from "react";

function Alert({ error }) {
  return (
    error && (
      <div className="container custom-centered">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    )
  );
}

export default Alert;

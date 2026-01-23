import React, { Fragment } from "react";
import Footer from "../components/footer/Footer";

function ErrorMessage() {
  return (
    <Fragment>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        There Is Something Wrong !
      </h1>
      <Footer />
    </Fragment>
  );
}

export default ErrorMessage;

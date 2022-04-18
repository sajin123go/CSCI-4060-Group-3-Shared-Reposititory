import React from "react";
import "./404Page.css";

function PageNotFound() {
  return (
    <div className="container">
      <img src="https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png" alt="Page Not found"/>
      <a href="/" type="button"  class="btn btn-warning">Go Home</a>
    </div>
  );
}

export default PageNotFound;

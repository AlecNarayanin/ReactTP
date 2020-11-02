import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function ButtonFetchUsers({children, onClick}){
    return(<button className="btn btn-primary" onClick={onClick}>{children}</button>);
  }
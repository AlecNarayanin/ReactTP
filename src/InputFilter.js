import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function InputFilter({ label, value, onChange }) {
  return (
    <label className="ml-5">
      {label}
      <input
        type="text"
        value={value}
        className="form-control mt-3"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </label>
  );
}

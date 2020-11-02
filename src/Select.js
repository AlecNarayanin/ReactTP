import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function Select({ label, onChange, value, options }) {
    return (
      <div className="form-group">
        <select
          value={value}
          label={label}
          onChange={e => onChange(e.target.value)}
          className="browser-default custom-select"
        >
          {options.map(option => (<option key={option.value} value={option.value}>{option.label}</option> ))}
        </select>
      </div>
    );
  }
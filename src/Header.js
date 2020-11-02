import React from "react";
import { ButtonFetchUsers } from './ButtonFetchUsers';
import { InputFilter } from './InputFilter';
import { Select } from './Select'

export function Header({
  searchFilter,
  onSearchChange,
  genderFilter,
  onGenderChange,
  onFetchClick
}) {
  return (
    <div>
      <h1>React TP</h1>
      <hr />
      <ButtonFetchUsers onClick={onFetchClick}>Fetch Users</ButtonFetchUsers>
      <InputFilter
        label="Recherche"
        onChange={onSearchChange}
        value={searchFilter}
      />
      <Select
        label="Genre"
        onChange={onGenderChange}
        value={genderFilter}
        options={[
          { value: "", label: "Tous" },
          { value: "male", label: "Hommes" },
          { value: "female", label: "Femmes" },
        ]}
      />
    </div>
  );
}

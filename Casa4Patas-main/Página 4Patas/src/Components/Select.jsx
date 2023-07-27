import React from 'react';

const Select = ({ label, options, name, value, setValue }) => {
  const handleChange = (event) => {
    setValue(event);
  };

  return (
    <>
      <label>
        <p>{label}</p>
        <select
          name={name}
          id={name}
          value={value}
          onChange={({ target }) => handleChange(target.value)}
        >
          <option defaultValue="" hidden>
            Selecione...
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default Select;

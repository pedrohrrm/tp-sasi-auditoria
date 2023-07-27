import React from 'react';

const Input = ({ label, name, type, value, setValue, ...props }) => {
  if (type == 'date') {
    return (
      <>
        <label>
          <p>{label}</p>
          <input
            id={name}
            name={name}
            type={type}
            // value={value}
            onChange={({ target }) => setValue(target.value)}
            defaultValue={value}
            {...props}
          />
        </label>
      </>
    );
  }

  return (
    <>
      <label>
        <p>{label}</p>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={({ target }) => setValue(target.value)}
          {...props}
        />
      </label>
    </>
  );
};

export default Input;

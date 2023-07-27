import React from 'react';

const Textarea = ({ label, nome, value, setValue, ...props }) => {
  return (
    <label>
      <p>{label}</p>
      <textarea
        name={nome}
        id={nome}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        cols="30"
        rows="10"
      ></textarea>
    </label>
  );
};

export default Textarea;

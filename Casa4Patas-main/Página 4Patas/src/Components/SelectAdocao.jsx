import React from 'react';
import styles from '../Styled Components/SelectAdocao.module.css';

const SelectAdocao = ({ allDados, label, value, setValue, ...props }) => {
  const [filteredIds, setFilteredId] = React.useState(allDados);
  const [filtrados, setFiltrados] = React.useState([]);
  const [mostrarLi, setMostrarLi] = React.useState(false);

  React.useEffect(() => {
    setFilteredId(allDados.sort());
    setFiltrados(allDados.sort());
  }, [allDados]);

  const handleChange = ({ target }) => {
    setValue(target.value);
    setFiltrados(
      filteredIds.filter((cpf) => {
        if (String(cpf).startsWith(target.value) && target.value) {
          setMostrarLi(true);
          return cpf;
        }
      }),
    );
  };

  const handleClick = (item) => {
    setValue(item);
    setMostrarLi(false);
  };

  return (
    <label>
      <p>{label}</p>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        required
        {...props}
      />
      {mostrarLi && (
        <ul className={styles.ul} onBlur={() => setMostrarLi(false)}>
          {filtrados.map((item) => (
            <li key={item} onClick={() => handleClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </label>
  );
};

export default SelectAdocao;

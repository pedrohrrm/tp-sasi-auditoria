import React from 'react';
import styles from '../Styled Components/PetsPainel.module.css';

// Imagem
import lupa from '../midia/icons/search.svg';

const Filtro = ({ value, setValue }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setValue([...value, event.target['filter'].value.toLowerCase()]);
    event.target['filter'].value = '';
  };

  const handleRemove = (item) => {
    if (value.includes(item)) {
      setValue(value.filter((element) => element != item));
    }
  };

  return (
    <div className={styles.filter}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="filter">
          <img src={lupa} alt="Lupa de Pesquisa" />
          <input
            type="text"
            name="filter"
            id="filter"
            placeholder="Buscar por espécies, porte..."
            required
          />
        </label>
      </form>
      <div id="filtragem" className={styles.filtros}>
        {value.map((item, index) => (
          <div key={index} className={`${styles.filtro} animeLeft`}>
            <p>{item}</p>
            <span
              onClick={() => handleRemove(item)}
              className={styles.close}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filtro;

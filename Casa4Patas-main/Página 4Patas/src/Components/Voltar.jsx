import React from 'react';
import styles from '../Styled Components/AdicionarPet.module.css';

// Imagem
import imgVoltar from '../midia/icons/Back.svg';
import { Link } from 'react-router-dom';

const Voltar = ({ value, setValue }) => {
  const handlePrev = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };
  return (
    <div className={styles.back} onClick={handlePrev}>
      <Link className={styles.voltar} id="voltar">
        Voltar
      </Link>
      <img src={imgVoltar} alt="Voltar" />
    </div>
  );
};

export default Voltar;

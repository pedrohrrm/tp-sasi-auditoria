import React from 'react';
import styles from '../Styled Components/PainelAdmin.module.css';

const CardsPainle = ({ img, title }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default CardsPainle;

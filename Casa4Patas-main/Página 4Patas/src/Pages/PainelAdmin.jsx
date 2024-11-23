import React, { useContext } from 'react';
import Head from '../Head';
import styles from '../Styled Components/PainelAdmin.module.css';
import pata from '../Midia/pata.png';
import person from '../Midia/pessoa.png';
import processo from '../Midia/processo.png';
import CardsPainle from '../Components/CardsPainel';
import { Link, Outlet } from 'react-router-dom';

const PainelAdmin = () => {
  return (
    <div>
      <Head title="Painel Admin" />
      <div className={styles.container}>
        <div className={`${styles.cards} animeLeft`}>
          <Link to="pets">
            <CardsPainle title="Pets" img={pata} />
          </Link>
          <Link to="adotantes">
            <CardsPainle title="Adotantes" img={person} />
          </Link>
          <Link to="adocoes">
            <CardsPainle title="Adoções" img={processo} />
          </Link>
        </div>
        
      </div>
      
      <Outlet />
      <br /><br /><br />
      <center>
      <a href="http://localhost:5000/Psi" target="_self" rel="noopener noreferrer">
        Conheça nossa política de privacidade
      </a>
      </center>
    </div>  
  );
};


export default PainelAdmin;

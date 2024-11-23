import React from 'react';
import Head from '../../Head';
import styles from '../../Styled Components/PetsPainel.module.css';

// Imagens
import iconeMore from '../../midia/icons/more.svg';
import Tabela from '../../Components/Tabela';
import Filtro from '../../Components/Filtro';
import { Link, Outlet } from 'react-router-dom';

const Pets = () => {
  const [data, setData] = React.useState();
  const url = 'https://localhost:3000/animais';
  const [filtros, setFitros] = React.useState([]);
  // Como vai aparecer no header
  const [thead, setThead] = React.useState([
    'Id',
    'Nome',
    'Idade',
    'Espécie',
    'Sexo',
    'Porte',
    '',
  ]);
  // Os campos que vao receber na API
  const campos = ['id', 'nome', 'idade', 'sexo', 'especie', 'porte'];

  return (
    <>
      <Head title="Painel de Pets" />

      <main className={`${styles.mainAdmin} animeLeft`}>
        <div className={styles.actions}>
          <Filtro value={filtros} setValue={setFitros} />
          <div className={styles.addPets}>
            <Link to="adicionar">
              <img src={iconeMore} alt="Icone de adição" />
            </Link>
          </div>
        </div>

        <div className={styles.tableContent}>
          <Tabela
            thead={thead}
            data={data}
            url={url}
            filtrar={filtros}
            setFiltrar={setFitros}
            campos={campos}
          />
        </div>
      </main>
    </>
  );
};

export default Pets;

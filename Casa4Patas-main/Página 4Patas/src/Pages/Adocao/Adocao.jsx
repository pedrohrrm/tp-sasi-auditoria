import React from 'react';
import Head from '../../Head';
import styles from '../../Styled Components/PetsPainel.module.css';

// Imagens
import iconeMore from '../../midia/icons/more.svg';
import Tabela from '../../Components/Tabela';
import { Link, Outlet } from 'react-router-dom';

const Adocao = () => {
  const [data, setData] = React.useState();
  const url = 'http://localhost:3000/adocoes';
  const [filtros, setFitros] = React.useState([]);
  // Como vai aparecer no header
  const [thead, setThead] = React.useState([
    'Id',
    'Id Animal',
    'Nome do Animal',
    'CPF do Adotante',
    'Nome do Adotante',
    'Data de Adoção',
    '',
  ]);
  // Os campos que vao receber na API
  const [campos, setCampos] = React.useState([
    'idAdocao',
    'idAnimal',
    'nome',
    'cpfAdotante',
    'Nome Completo',
    'dataAdocao',
  ]);

  return (
    <>
      <Head title="Painel de Adoção" />
      <main className={`${styles.mainAdmin} animeLeft`}>
        <div className={styles.actions}>
          {/* <Filtro value={filtros} setValue={setFitros} /> */}
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
            campos={campos}
          />
        </div>
      </main>
    </>
  );
};

export default Adocao;

import React from 'react';
import Header from '../../Components/Header';
import Head from '../../Head';
import styles from '../../Styled Components/PetsPainel.module.css';

// Imagens
import iconeMore from '../../midia/icons/more.svg';
import Tabela from '../../Components/Tabela';
import { Link } from 'react-router-dom';

const Adotante = () => {
  const [data, setData] = React.useState();
  const url = 'http://localhost:3000/adotantes';
  const [filtros, setFitros] = React.useState([]);
  // Como vai aparecer no header
  const [thead, setThead] = React.useState([
    'CPF',
    'Nome',
    'Sobrenome',
    'Telefone',
    'Estado',
    'Cidade',
    'Rua',
    'Número',
    '',
  ]);
  // Os campos que vao receber na API
  const [campos, setCampos] = React.useState([
    'cpf',
    'nome',
    'sobrenome',
    'telefone',
    'estado',
    'cidade',
    'rua',
    'nCasa',
  ]);

  return (
    <>
      <Head title="Painel de Adotantes" />
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

export default Adotante;

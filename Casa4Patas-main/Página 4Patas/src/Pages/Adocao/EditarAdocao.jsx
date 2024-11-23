import React from 'react';
import styles from '../../Styled Components/AdicionarPet.module.css';
import Input from '../../Components/Input';
import Select from '../../Components/Select';

// Image
import cachorro from '../../midia/icons/cachorroLogo.svg';
import { Link, useParams } from 'react-router-dom';
import Head from '../../Head';
import GetValue from '../../Components/GetValue';
import SelectAdocao from '../../Components/SelectAdocao';

const EditarAdocao = () => {
  const [dataAdocao, setDataAdocao] = React.useState('');
  const [idAnimal, setIdAnimal] = React.useState('');
  const [cpfAdotante, setCpfAdotante] = React.useState('');
  const [enviado, setEnviado] = React.useState(false);
  const [idAnimais, setIdAnimais] = React.useState([]);
  const [cpfAdotantes, setCpfAdotantes] = React.useState([]);
  const [load, setLoad] = React.useState(true);
  const params = useParams();

  const url = 'https://localhost:3000/adocoes/';

  React.useEffect(() => {
    if (cpfAdotantes) {
      setLoad(false);
    }
  }, [cpfAdotantes]);

  React.useEffect(() => {
    fetch('https://localhost:3000/animais')
      .then((response) => response.json())
      .then((json) => {
        const ids = json.map((item) => item.id);
        setIdAnimais(ids);
      })
      .then(() => {
        fetch('https://localhost:3000/adotantes')
          .then((response) => response.json())
          .then((json) => {
            const ids = json.map((item) => item.cpf);
            setCpfAdotantes(ids);
          });
      });
  }, []);

  const handleNext = (event) => {
    event.preventDefault();
    const data = {
      cpfAdotante,
      idAnimal,
      dataAdocao,
    };

    fetch(`${url}${params.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    setEnviado(!enviado);
  };

  const campos = [
    [setDataAdocao, 'dataAdocao'],
    [setIdAnimal, 'idAnimal'],
    [setCpfAdotante, 'cpfAdotante'],
  ];

  return (
    <>
      <Head title={'Editar Adoção'} />

      <GetValue url={url} campos={campos} />

      <main className={`${styles.atualizacaoAdmin} animeLeft`}>
        <form onSubmit={(event) => handleNext(event)}>
          {!enviado ? (
            <>
              <h2 id="title">Dados gerais</h2>
              <div
                style={{ display: 'flex', justifyContent: 'center' }}
                className={`${styles.conteudo} ${styles.aux}`}
              >
                <div className={styles.formsBloco}>
                  <div className={styles.formsSubBloco}>
                    <SelectAdocao
                      label="CPF"
                      allDados={cpfAdotantes}
                      value={cpfAdotante}
                      setValue={setCpfAdotante}
                      placeholder="Ex.: 99999999999"
                    />
                    <Input
                      label="Data Adoção"
                      type="date"
                      value={dataAdocao}
                      setValue={setDataAdocao}
                      placeholder="00/00/0000"
                    />
                    <SelectAdocao
                      label="Id do Animal"
                      allDados={idAnimais}
                      value={idAnimal}
                      setValue={setIdAnimal}
                      placeholder="Ex.: 1"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.buttonsArea}>
                <button className={styles.voltar}>
                  <Link to="/painelAdmin/adocoes">Cancelar</Link>
                </button>
                <button>
                  <a>Atualizar</a>
                </button>
              </div>
            </>
          ) : (
            <>
              <div id="c3" className={`${styles.concluido} ${styles.aux}`}>
                <img src={cachorro} alt="Cachorro Logo" />
                <h2>Atualização realizada com sucesso!</h2>
                <Link to="/painelAdmin/adocoes" className={styles.button}>
                  Voltar à tela inicial
                </Link>
              </div>
            </>
          )}{' '}
        </form>
      </main>
    </>
  );
};

export default EditarAdocao;

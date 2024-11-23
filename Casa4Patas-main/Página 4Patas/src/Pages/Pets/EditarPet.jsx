import React from 'react';
import styles from '../../Styled Components/AdicionarPet.module.css';
import Voltar from '../../Components/Voltar';
import Input from '../../Components/Input';

// Image
import cachorro from '../../midia/icons/cachorroLogo.svg';
import Select from '../../Components/Select';
import { Link, useParams } from 'react-router-dom';
import Head from '../../Head';
import Textarea from '../../Components/Textarea';
import GetValue from '../../Components/GetValue';

const EditarPet = () => {
  const [nome, setNome] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [especie, setEspecie] = React.useState('');
  const [porte, setPorte] = React.useState('');
  const [sexo, setSexo] = React.useState('');
  const [situacao, setSituacao] = React.useState('');
  const [nomeResgatante, setNomeResgatante] = React.useState('');
  const [dataResgate, setDataResgate] = React.useState(''); // yyy-mm-dd
  const [pag, setPag] = React.useState(1);
  const [steps, setSteps] = React.useState(['1', '2', '']);
  const params = useParams();

  const campos = [
    [setNome, 'nomeAnimal'],
    [setIdade, 'idadeAnimal'],
    [setEspecie, 'especieAnimal'],
    [setPorte, 'porteAnimal'],
    [setSexo, 'sexoAnimal'],
    [setNomeResgatante, 'nResgatante'],
    [setDataResgate, 'dResgate'],
    [setSituacao, 'statusAnimal'],
  ];

  // Pegar os dados com base no id

  const url = `https://localhost:3000/animais/${params.id}`;

  const handleNext = (event) => {
    event.preventDefault();
    if (pag < 3) {
      setPag(pag + 1);
    }
    if (pag == 2) {
      const dataAnimal = {
        nome,
        idade,
        especie,
        porte,
        sexo,
      };
      const dataResgatante = {
        dataResgate,
        nomeResgatante,
      };
      fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataAnimal),
      }).then(() => {
        fetch(`https://localhost:3000/resgates/${params.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataResgatante),
        });
      });
    }
  };

  return (
    <>
      <Head title={'Editar Pet'} />

      <GetValue url={url} campos={campos} />

      <main className={`${styles.atualizacaoAdmin} animeLeft`}>
        {pag < 3 && (
          <>
            <Voltar value={pag} setValue={setPag} />

            <div id="step" className={styles.step}>
              {steps.map((step) => (
                <span
                  className={pag == step ? styles.view : undefined}
                  key={step}
                >
                  {step}
                </span>
              ))}
            </div>
            <form onSubmit={(event) => handleNext(event)}>
              {pag == 1 && (
                <>
                  <h2 id="title">Dados gerais</h2>
                  {/* PRIMEIRA TELA */}
                  <div id="c1" className={`${styles.conteudo} ${styles.aux}`}>
                    <div className={styles.formsBloco}>
                      <Input
                        label="Nome"
                        type="text"
                        value={nome}
                        setValue={setNome}
                        placeholder="Nome do Pet"
                      />
                      <div className={styles.formsSubBloco}>
                        <Select
                          label="Sexo"
                          name="sexo"
                          options={['Macho', 'Fêmea']}
                          value={sexo}
                          setValue={setSexo}
                        />
                        <Input
                          label="Idade"
                          type="text"
                          value={idade}
                          setValue={setIdade}
                          placeholder="1"
                        />
                      </div>
                    </div>

                    <div className={`${styles.formsBloco} ${styles.right}`}>
                      <Select
                        label="Situação"
                        name="situacao"
                        options={['Adotado', 'Não adotado']}
                        value={situacao}
                        setValue={setSituacao}
                        disabled
                      />
                      <div className={styles.formsSubBloco}>
                        <Select
                          label="Espécie"
                          name="especie"
                          options={['Gato', 'Cachorro']}
                          value={especie}
                          setValue={setEspecie}
                        />
                        <Select
                          label="Porte"
                          name="porte"
                          options={['Pequeno', 'Médio', 'Grande']}
                          value={porte}
                          setValue={setPorte}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}{' '}
              {pag == 2 && (
                <>
                  <h2>Dados do resgate</h2>
                  <div
                    id="c2"
                    className={`${styles.conteudo}`}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '80px',
                    }}
                  >
                    <Input
                      label="Responsável pelo resgate"
                      name="responsavel"
                      type="text"
                      value={nomeResgatante}
                      setValue={setNomeResgatante}
                    />
                    <Input
                      label="data"
                      name="data"
                      type="date"
                      value={dataResgate}
                      setValue={setDataResgate}
                    />
                  </div>
                </>
              )}
              <div className={styles.buttonsArea}>
                <button className={styles.voltar}>
                  <Link to="/painelAdmin/pets">Cancelar</Link>
                </button>
                <button>{pag == 1 ? <a>Próximo</a> : <a>Atualizar</a>}</button>
              </div>
            </form>
          </>
        )}

        {pag == 3 && (
          <>
            <div id="c3" className={`${styles.concluido} ${styles.aux}`}>
              <img src={cachorro} alt="Cachorro Logo" />
              <h2>Atualização realizada com sucesso!</h2>
              <Link to="/painelAdmin/pets" className={styles.button}>
                Voltar à tela inicial
              </Link>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default EditarPet;

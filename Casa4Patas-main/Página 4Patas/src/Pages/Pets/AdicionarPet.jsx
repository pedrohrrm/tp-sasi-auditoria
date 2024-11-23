import React from 'react';
import styles from '../../Styled Components/AdicionarPet.module.css';
import Voltar from '../../Components/Voltar';
import Input from '../../Components/Input';

// Image
import cachorro from '../../midia/icons/cachorroLogo.svg';
import Select from '../../Components/Select';
import { Link } from 'react-router-dom';
import Head from '../../Head';

const AdicionarPet = () => {
  const [nome, setNome] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [especie, setEspecie] = React.useState('');
  const [porte, setPorte] = React.useState('');
  const [sexo, setSexo] = React.useState('');
  const [dResgate, setDResgate] = React.useState('');
  const [nResgate, setNResgate] = React.useState('');
  const [pag, setPag] = React.useState(1);
  const [steps, setSteps] = React.useState(['1', '2', '']);

  const handleNext = (event) => {
    event.preventDefault();
    if (pag < 3) {
      setPag(pag + 1);
    }
    if (pag == 2) {
      const data = {
        nome,
        idade,
        especie,
        porte,
        sexo,
        dResgate,
        nResgate,
      };

      fetch('https://localhost:3000/animais/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    }
  };

  return (
    <>
      <Head title={'Adicionar Pet'} />

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
                        required
                      />
                      <div className={styles.formsSubBloco}>
                        <Select
                          label="Sexo"
                          name="sexo"
                          options={['Macho', 'Fêmea']}
                          value={sexo}
                          setValue={setSexo}
                          required
                        />
                        <Input
                          label="Idade"
                          type="text"
                          value={idade}
                          setValue={setIdade}
                          placeholder="1"
                          required
                        />
                      </div>
                    </div>

                    <div className={`${styles.formsBloco} ${styles.right}`}>
                      <div className={styles.formsSubBloco}>
                        <Select
                          label="Espécie"
                          name="especie"
                          options={['Gato', 'Cachorro']}
                          value={especie}
                          setValue={setEspecie}
                          required
                        />
                        <Select
                          label="Porte"
                          name="porte"
                          options={['Pequeno', 'Médio', 'Grande']}
                          value={porte}
                          setValue={setPorte}
                          required
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
                      value={nResgate}
                      setValue={setNResgate}
                    />
                    <Input
                      label="data"
                      name="data"
                      type="date"
                      value={dResgate}
                      setValue={setDResgate}
                    />
                  </div>
                </>
              )}
              <div className={styles.buttonsArea}>
                <button className={styles.voltar}>
                  <Link to="/painelAdmin/pets">Cancelar</Link>
                </button>
                <button>{pag == 1 ? <a>Próximo</a> : <a>Cadastrar</a>}</button>
              </div>
            </form>
          </>
        )}

        {pag == 3 && (
          <>
            <div id="c3" className={`${styles.concluido} ${styles.aux}`}>
              <img src={cachorro} alt="Cachorro Logo" />
              <h2>Cadastro concluído com sucesso!</h2>
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

export default AdicionarPet;

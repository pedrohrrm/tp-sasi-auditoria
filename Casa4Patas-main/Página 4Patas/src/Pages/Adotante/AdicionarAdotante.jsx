import React from 'react';
import styles from '../../Styled Components/AdicionarPet.module.css';
import Input from '../../Components/Input';

// Image
import cachorro from '../../midia/icons/cachorroLogo.svg';
import { Link } from 'react-router-dom';
import Head from '../../Head';

const AdicionarAdotante = () => {
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [estado, setEstado] = React.useState('');
  const [rua, setRua] = React.useState('');
  const [nCasa, setNCasa] = React.useState('');
  const [cpf, setCPF] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [enviado, setEnviado] = React.useState(false);

  const handleNext = (event) => {
    event.preventDefault();

    const data = {
      cpf,
      nome,
      sobrenome,
      rua,
      cidade,
      estado,
      nCasa,
      telefone,
    };

    fetch('http://localhost:3000/adotantes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    setEnviado(!enviado);
  };

  return (
    <>
      <Head title={'Adicionar Adotante'} />

      <main className={`${styles.atualizacaoAdmin} animeLeft`}>
        <form onSubmit={(event) => handleNext(event)}>
          {!enviado ? (
            <>
              <h2 id="title">Dados gerais</h2>
              <div id="c1" className={`${styles.conteudo} ${styles.aux}`}>
                <div className={styles.formsBloco}>
                  <div className={styles.formsSubBloco}>
                    <Input
                      label="Nome"
                      type="text"
                      value={nome}
                      setValue={setNome}
                      placeholder="Nome do Adotante"
                      required
                    />
                    <Input
                      label="Sobrenome"
                      type="text"
                      value={sobrenome}
                      setValue={setSobrenome}
                      placeholder="Sobrenome do Adotante"
                      required
                    />
                  </div>
                  <div className={styles.formsSubBloco}>
                    <Input
                      label="CPF"
                      name="cpf"
                      value={cpf}
                      setValue={setCPF}
                      placeholder="000.000.000-00"
                      required
                    />
                    <Input
                      label="Telefone"
                      type="text"
                      value={telefone}
                      setValue={setTelefone}
                      placeholder="1"
                      required
                    />
                  </div>
                </div>

                <div className={`${styles.formsBloco} ${styles.right}`}>
                  <div className={styles.formsSubBloco}>
                    <Input
                      label="Cidade"
                      name="cidade"
                      value={cidade}
                      setValue={setCidade}
                      required
                    />
                    <Input
                      label="Estado"
                      name="estado"
                      value={estado}
                      setValue={setEstado}
                      required
                    />
                  </div>
                  <div className={styles.formsSubBloco}>
                    <Input
                      label="Rua"
                      name="rua"
                      value={rua}
                      setValue={setRua}
                      required
                    />
                    <Input
                      label="Número"
                      name="nCasa"
                      value={nCasa}
                      setValue={setNCasa}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className={styles.buttonsArea}>
                <button className={styles.voltar}>
                  <Link to="/painelAdmin/adotantes">Cancelar</Link>
                </button>
                <button>
                  <a>Cadastrar</a>
                </button>
              </div>
            </>
          ) : (
            <>
              <div id="c3" className={`${styles.concluido} ${styles.aux}`}>
                <img src={cachorro} alt="Cachorro Logo" />
                <h2>Cadastro concluído com sucesso!</h2>
                <Link to="/painelAdmin/adotantes" className={styles.button}>
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

export default AdicionarAdotante;

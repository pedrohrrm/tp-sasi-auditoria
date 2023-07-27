import React from 'react';
import styles from '../../Styled Components/AdicionarPet.module.css';
import Input from '../../Components/Input';

// Image
import cachorro from '../../midia/icons/cachorroLogo.svg';
import { Link, useParams } from 'react-router-dom';
import Head from '../../Head';
import GetValue from '../../Components/GetValue';

const EditarAdotante = () => {
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [estado, setEstado] = React.useState('');
  const [rua, setRua] = React.useState('');
  const [nCasa, setNCasa] = React.useState('');
  const [cpf, setCPF] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [enviado, setEnviado] = React.useState(false);
  const params = useParams();

  const url = 'http://localhost:3000/adotantes/' + params.id;

  const campos = [
    [setNome, 'nome'],
    [setSobrenome, 'sobrenome'],
    [setTelefone, 'telefone'],
    [setEstado, 'estado'],
    [setRua, 'rua'],
    [setCPF, 'cpf'],
    [setCidade, 'cidade'],
    [setNCasa, 'nCasa'],
  ];

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

    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    setEnviado(!enviado);
  };

  return (
    <>
      <Head title={'Editar Adotante'} />

      <GetValue url={url} campos={campos} />

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
                      label="Sobrnome"
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
                      disabled
                    />
                    <Input
                      label="Telefone"
                      type="text"
                      value={telefone}
                      setValue={setTelefone}
                      placeholder="1"
                    />
                  </div>
                </div>

                <div
                  className={`${styles.formsBloco} ${styles.right}`}
                  style={{ display: 'flex' }}
                >
                  <div className={styles.formsSubBloco}>
                    <Input
                      label="Cidade"
                      name="cidade"
                      value={cidade}
                      setValue={setCidade}
                    />
                    <Input
                      label="Estado"
                      name="estado"
                      value={estado}
                      setValue={setEstado}
                    />
                  </div>
                  <div className={styles.formsSubBloco}>
                    <Input
                      label="Rua"
                      name="rua"
                      value={rua}
                      setValue={setRua}
                    />
                    <Input
                      label="Número"
                      name="nCasa"
                      value={nCasa}
                      setValue={setNCasa}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.buttonsArea}>
                <button className={styles.voltar}>
                  <Link to="/painelAdmin/adotantes">Cancelar</Link>
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

export default EditarAdotante;

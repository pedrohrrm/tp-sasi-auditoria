import React from 'react';
import Head from '../Head';
import styles from '../Styled Components/Login.module.css';
import Input from '../Components/Input';
import dogHome from '../Midia/dogHome.jpeg';
import logo from '../Midia/logo.png';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [error, setError] = React.useState(false);

  const url = 'https://localhost:3000/admin';
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    if (window.localStorage.getItem('admin')) {
      return navigate('PainelAdmin');
    }
  }, [location]);

  React.useEffect(() => {
    fetch(url, { method: 'GET' })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => {
        console.error('Error:', error);
        console.log('server is down!!');
      });
  }, []);

  function handleClick() {
    data.map((element) => {
      if (element.email === email && element.senha === senha) {
        setEmail('');
        setSenha('');
        window.localStorage.setItem('admin', element.email);
        return navigate('PainelAdmin');
      }
      return setError(true);
    });
  }

  React.useEffect(() => {
    setError(false);
  }, [email, senha]);

  function redirectToPsi() {
    window.location.href = 'http://localhost:5000/Psi';
  }

  return (
    <>
      <Head title="Login" />
      <div className={styles.login}>
        <main>
          <div className={styles.title}>
            <img src={logo} alt="Cãopanheiro" />
            <h1>Olá! Bem-vindo de volta.</h1>
            <p>
              Faça login com as informações que você usou durante o cadastro.
            </p>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            {error && (
              <span className={`${styles.error} animeLeft`}>
                *Login ou senha invalidos
              </span>
            )}
            <Input
              label="E-mail"
              type="email"
              value={email}
              setValue={setEmail}
              
            />
            <Input
              label="Senha"
              type="password"
              value={senha}
              setValue={setSenha}
              
            />
            <button style={{ marginTop: '2rem' }} onClick={handleClick}>
              Entrar
            </button>
          </form>

          <button
            style={{ marginTop: '1rem', backgroundColor: '#ddd', padding: '0.5rem 1rem' }}
            onClick={redirectToPsi}
          >
            Conheça nossa Política de Segurança
          </button>
        </main>
        <img src={dogHome} alt="Um cachorro com um fundo de bolinhas azuis" />
      </div>
    </>
  );
};

export default Login;

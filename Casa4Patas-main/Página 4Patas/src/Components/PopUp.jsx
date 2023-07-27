import React from 'react';
import iconeMore from '../midia/icons/more.svg';
import styles from '../Styled Components/PopUp.module.css';

const PopUp = ({ url, id, setValue, campoName, campoValor }) => {
  const [data, setData] = React.useState([]);
  const [load, setLoad] = React.useState(true);

  const campos = [
    ['Nome', 'nomeAnimal'],
    ['Idade', 'idadeAnimal'],
    ['Espécie', 'especieAnimal'],
    ['Sexo', 'sexoAnimal'],
    ['Porte', 'porteAnimal'],
    ['Data do Resgate', 'dResgate'],
    ['Nome do Resgatante', 'nResgatante'],
    ['Status de Adoção', 'statusAnimal'],
  ];

  const newCampo = campoName.map((element, index) => {
    return [element, campoValor[index]];
  });

  newCampo.pop();

  React.useEffect(() => {
    fetch(`${url}/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [id]);

  React.useEffect(() => {
    if (data.length > 0) {
      setLoad(false);
    }
  }, [data]);

  const handleClose = () => {
    setValue(false);
  };

  return (
    <div className={`${styles.popUp} animeLeft`}>
      <h2 style={{ marginBottom: '1.12rem' }}>Dados detalhados</h2>
      <button onClick={handleClose} className={styles.button}>
        <img src={iconeMore} alt="Icone de mais" />
      </button>

      {load ? (
        <h3>Carregando...</h3>
      ) : (
        <>
          {data.map((unico) => (
            <div key={unico.id}>
              {campos.map((campo, index) => (
                <p style={{ fontWeight: 'bold' }} key={index}>
                  {campo[0]}:{' '}
                  <span style={{ fontWeight: 'normal' }}>
                    {campo[1] == 'dResgate'
                      ? unico[campo[1]].split('-').reverse().join('/')
                      : unico[campo[1]]}
                  </span>
                </p>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PopUp;

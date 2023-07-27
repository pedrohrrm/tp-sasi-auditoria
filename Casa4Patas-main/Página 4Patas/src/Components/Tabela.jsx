import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styled Components/PetsPainel.module.css';

// Imagens
import editar from '../midia/icons/edit.svg';
import deletar from '../midia/icons/trash.svg';
import info from '../midia/icons/info.svg';
import arrow from '../midia/arrow.svg';
import PopUp from './PopUp';

const Tabela = ({ thead, url, filtrar, setFiltrar, campos }) => {
  const limiteDados = 7;
  const [data, setData] = React.useState([]);
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(limiteDados);
  const [pagAtual, setPagAtual] = React.useState(1);
  const [rowData, setRowData] = React.useState([]);
  const [popUp, setPopUp] = React.useState({ visible: false, id: '' });

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setRowData(json);
      });
  }, []);

  // Filtrar
  React.useEffect(() => {
    if (rowData && rowData.length !== data.lenght) {
      // console.log('Row data: ' + rowData.length + 'Data: ' + data.length);
      setData([...rowData]);
      // console.log('novo data: ' + data.length);
    }

    filtrar.map((filtro) => {
      setData(
        data.filter((pet) => {
          return (
            pet.especie.toLowerCase().includes(filtro) ||
            pet.nome.toLowerCase().includes(filtro) ||
            pet.sexo.toLowerCase().includes(filtro)
          );
        }),
      );
    });
    // console.log('filtro');
  }, [filtrar]);

  const handleNextClick = () => {
    if (end + limiteDados < data.length + limiteDados) {
      setStart(end);
      setEnd(end + limiteDados);
      setPagAtual(pagAtual + 1);
    }
  };

  const handlePrevClick = () => {
    if (start - limiteDados > 0) {
      setEnd(start);
      setStart(start - limiteDados);
    } else {
      setEnd(limiteDados);
      setStart(0);
    }
    if (pagAtual > 1) {
      setPagAtual(pagAtual - 1);
    }
  };

  const handleInfo = (id) => {
    setPopUp({ visible: true, id: id });
  };

  React.useEffect(() => {
    // console.log(popUp);
  }, [popUp]);

  function handleDelet(id) {
    const confirmacao = window.confirm('Tem certeza que deseja excluir?');

    if (confirmacao) {
      fetch(`${url}/${id}`, {
        method: 'DELETE',
      }).then(() => {
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            setData(json);
            setRowData(json);
          });
      });
    }
  }

  let maxPag =
    Math.ceil(data.length / limiteDados) == 0
      ? 1
      : Math.ceil(data.length / limiteDados);

  React.useEffect(() => {
    // data.map((item) => setId(Object.values(item)[0]));
  }, [data.length]);

  return (
    <>
      {popUp['visible'] && (
        <PopUp
          url={url}
          id={popUp['id']}
          setValue={setPopUp}
          campoName={thead}
          campoValor={campos}
        />
      )}
      <table>
        <thead>
          <tr>
            {thead.map((nome) => (
              <th key={nome}>{nome}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(start, end).map((item, index) => (
            <tr key={index}>
              {campos.map((campo, index) => (
                <td key={campo}>
                  {campo == 'dataAdocao'
                    ? item[campo].split('-').reverse().join('/')
                    : item[campo]}
                </td>
              ))}
              <td className={styles.last}>
                {url.split('/')[3] == 'animais' && (
                  <Link onClick={() => handleInfo(Object.values(item)[0])}>
                    <img src={info} alt="Ícone de informação" />
                  </Link>
                )}
                <Link to={`editar/${Object.values(item)[0]}`}>
                  <img src={editar} alt="Ícone de edição" />
                </Link>
                <Link onClick={() => handleDelet(Object.values(item)[0])}>
                  <img src={deletar} alt="Ícone de deletar" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr></tr>
          <tr>
            <td colSpan={thead.length}>
              <div className={styles.paginationButtons}>
                <button onClick={handlePrevClick}>
                  <img src={arrow} alt="Arrow" />
                </button>
                <p id="pageNumber">
                  {pagAtual}/{maxPag}
                </p>
                <button onClick={handleNextClick}>
                  <img src={arrow} alt="Arrow" />
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Tabela;

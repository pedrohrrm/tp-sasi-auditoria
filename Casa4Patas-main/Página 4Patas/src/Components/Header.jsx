import React, { useContext } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import logo from '../Midia/logo3.svg';
import sair from '../Midia/icons/exit.svg';
import style from '../Styled Components/Header.module.css';
import { GlobalContext } from './GlobalStorage';

const Header = ({ title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const global = useContext(GlobalContext);

  React.useEffect(() => {
    if (window.localStorage.getItem('admin') == null) {
      return navigate('/');
    }
  }, [location]);

  const handleExit = () => {
    window.localStorage.removeItem('admin');
    return navigate('/');
  };

  return (
    <>
      <header className={style.headerAdmin}>
        <div>
          <Link to="">
            <img src={logo} alt="Logo Casa 4 Patas" />
          </Link>
          <p>{global.title}</p>
          <Link onClick={handleExit}>
            <img src={sair} alt="Icone para sair" />
          </Link>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;

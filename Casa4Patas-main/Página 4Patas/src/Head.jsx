import React from 'react';
import { GlobalContext } from './Components/GlobalStorage';
import { useLocation } from 'react-router-dom';

const Head = ({ title }) => {
  const global = React.useContext(GlobalContext);
  const location = useLocation();

  React.useEffect(() => {
    document.title = 'Cãopanheiro | ' + title;
    global.setTitle(title);
  }, [title]);

  return true;
};

export default Head;

import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const GetValue = ({ url, campos }) => {
  const params = useParams();
  const location = useLocation();

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        data.filter((campoUnic) => {
          if (Object.values(campoUnic)[0] == params.id) {
            console.log(campoUnic);
            campos.map((campo) => {
              console.log(campo);
              campo[0](campoUnic[campo[1]]);
            });
          }
        }),
      );
  }, [location]);

  return true;
};

export default GetValue;

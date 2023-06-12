//import { Fragment } from 'react';
//const newMessage = 'MaryoGA';
/* 
const newMessage = {
  message: "Hola mundo",
  title: "MaryoGA",
};
 */
/* const getResult = (a, b) => {
    return a + b;
} */

import PropTypes from 'prop-types'

export const FirstApp = ( { title, subTitle, name } ) => {

  return (
    <>
      <h1 data-testid ="test-title"> { title } </h1>
      {/* <code> { JSON.stringify( newMessage )  } </code> */}
      <p> { subTitle } </p>
      <p> { subTitle } </p>
      <p> { name } </p>
    </>
  );
};

FirstApp.propTypes = {
  name: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  name: 'Fernando Herrera',
  subTitle: 'No hay Sub Título',
  // title: 'No hay Título'
}

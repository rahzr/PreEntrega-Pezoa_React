import React from 'react';
import "./cartwidget.css"
import Button from 'react-bootstrap/Button';

const CartWidget = ({contadorCart}) => {
   return (
      <>
         <Button variant="primary">Carrito {contadorCart}</Button>
      </>
   );
};

export default CartWidget;
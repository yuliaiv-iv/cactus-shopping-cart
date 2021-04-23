import './Modal.css';
import { Fragment } from 'react';
import ReactDom from 'react-dom';

const Overlay = ({ hideCartHandler }) => {
  return <div className='overlay' onClick={hideCartHandler} />;
};
const ModalOverlay = ({children}) => {
  return (
    <div className='modal'>
      <div className='content'>{children}</div>
    </div>
  );
};

const portalEl = document.getElementById('overlays');

const Modal = ({ hideCartHandler, children }) => {
  return <Fragment>
    {ReactDom.createPortal(<Overlay hideCartHandler={hideCartHandler} />, portalEl)}
    {ReactDom.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalEl)}
  </Fragment>
}

export default Modal;
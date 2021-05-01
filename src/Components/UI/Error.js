import {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';

import styledClasses from './Error.module.css';

const BackDrop = (props) => {
  return <div className={styledClasses.backdrop} onClick={props.onConfirm}/>;
};

const ModalOverlay = (props) => {
  return  <Card className={styledClasses.modal}>
    <header className={styledClasses.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={styledClasses.content}>
      <p>{props.message}</p>
    </div>
    <footer className={styledClasses.actions}>
      <Button type='button' onClick={props.onConfirm}>Okey</Button>
    </footer>
  </Card>
};

const Error = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm}/>, document.getElementById('modal-root'))};
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          title={props.title}
          message={props.message}
        />, document.getElementById('overlay-root'))};
    </Fragment>
  );
}

export default Error;

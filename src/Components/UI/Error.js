import Card from './Card';
import Button from './Button';

import styledClasses from './Error.module.css';

const Error = (props) => {
  return (
    <div>
      <div className={styledClasses.backdrop} onClick={props.onConfirm}>
        <Card className={styledClasses.modal}>
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
      </div>
    </div>
  );
}

export default Error;

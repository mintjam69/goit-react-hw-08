import css from '../ErrorMessage/ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div>
      <p className={css.error}>
        Ooops...😭 Something is wrong, please, reload the page.
      </p>
    </div>
  );
};

export default ErrorMessage;

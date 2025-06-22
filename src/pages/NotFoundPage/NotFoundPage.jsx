import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <p className={css.textNotFoundPage}>
        Sorry, page is not found! Please go to &nbsp;
        <Link to="/" className={css.link}>
          Home page
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;

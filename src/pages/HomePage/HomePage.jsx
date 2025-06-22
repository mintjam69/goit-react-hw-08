import { MdOutlineContactPhone } from 'react-icons/md';
import PageTitle from '../../components/PageTitle/PageTitle';
import css from '../HomePage/HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homeContainer}>
      <MdOutlineContactPhone className={css.homeIcon} size="100px" />
      <PageTitle className={css.title}>Phonebook App</PageTitle>
    </div>
  );
};

export default HomePage;

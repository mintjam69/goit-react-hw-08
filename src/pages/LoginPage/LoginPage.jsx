import { Toaster } from 'react-hot-toast';

import LoginForm from '../../components/LoginForm/LoginForm';
import PageTitle from '../../components/PageTitle/PageTitle';

const LoginPage = () => {
  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      <Toaster position="top-center" reverseOrder={false} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;

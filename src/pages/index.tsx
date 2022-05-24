import type { NextPage } from 'next';

import { Media } from '../features/login/components/media';
import { LoginForm } from '../features/login/components/login-form';
import { Content } from '../features/login/components/content';

const Home: NextPage = () => {
  return (
    <Content>
      <LoginForm />
      <Media>
        <div />
      </Media>
    </Content>
  );
};

export default Home;

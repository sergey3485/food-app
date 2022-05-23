import type { NextPage } from 'next';

import { Media } from '../features/login/components/media';
import { LoginForma } from '../features/login/components/login-form';
import { Content } from '../features/login/components/content';

const Home: NextPage = () => {
  return (
    <Content>
      <LoginForma />
      <Media>
        <div />
      </Media>
    </Content>
  );
};

export default Home;

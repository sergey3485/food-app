import type { NextPage } from 'next';

import { Media } from '../features/food/components/login/media';
import { LoginForma } from '../features/food/components/login/login-form';
import { Content } from '../features/food/components/login/content';

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

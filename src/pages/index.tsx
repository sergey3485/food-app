import { ExtendedNextPage } from '@/shared/types/extended-next-page';

import { Media } from '@/features/login/components/media';
import { LoginForm } from '@/features/login/components/login-form';
import { Content } from '@/features/login/components/content';
import { MainLayout } from '@/layout/login/main-layout';

const Home: ExtendedNextPage = () => {
  return (
  // <Content>
    <LoginForm />
  // {/* <Media /> */}
  // {/* </Content> */}
  );
};

Home.Layout = MainLayout;

export default Home;

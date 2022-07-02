import { ExtendedNextPage } from '@/shared/types/extended-next-page';

import { Media } from '@/features/authorization/components/media';
import { LoginForm } from '@/features/authorization/components/login-form';
import { Content } from '@/features/authorization/components/content';
import { MainLayout } from '@/layout/authorization/main-layout';

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

import { ExtendedNextPage } from '@/shared/types/extended-next-page';
import { AnnouncmentCard } from '@/features/main/components/announcment-card';
import { announcmentsStorybook } from '@/features/main/constants/announcment';

const Home: ExtendedNextPage = () => {
  return <AnnouncmentCard announcment={announcmentsStorybook[0]} />;
};

// Home.Layout = MainLayout;

export default Home;

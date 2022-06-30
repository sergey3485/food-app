import { ExtendedNextPage } from '@/shared/types/extended-next-page';
import { AnnouncmentCard } from '@/features/main/components/announcment-card';
import { announcments } from '@/features/main/constants/announcment';

const Home: ExtendedNextPage = () => {
  return (
    <AnnouncmentCard announcment={announcments[0]} />
  );
};

// Home.Layout = MainLayout;

export default Home;

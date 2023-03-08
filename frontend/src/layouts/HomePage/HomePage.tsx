import { Carousel } from './components/Carosel';
import { ExploreTopBooks } from './components/ExploreTopBooks';
import { Heros } from './components/Heros';
import { LibraryServices } from './components/LibraryServices';

export const HomePage = () => {
  return (
    <>
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </>
  );
};

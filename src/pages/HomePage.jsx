import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fullProgress} from 'store/loaderSlice';
import Bannercarousel from 'components/homeComponents/bannerCarousel/bannerCarousel';
import CardsCarousel from 'components/homeComponents/cardsCarousel/cardsCarousel';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fullProgress());
  }, [dispatch]);

  return (
    <>
      <Bannercarousel />
      <CardsCarousel />
    </>
  );
};

export default Home;

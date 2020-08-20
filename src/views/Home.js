import React, { useEffect } from 'react';

import Cats from '../components/Cats';
import Loading from '../components/Loading';
import Error from '../components/Error';

import useCats from '../hooks/useCats';

const Home = () => {
  const {
    getCats, cats, loading, error,
  } = useCats();
  useEffect(() => {
    getCats();
    // eslint-disable-next-line
  }, []);
  if (loading) {
    return (
      <Loading />
    );
  } if (error) {
    return (
      <Error />
    );
  }
  return (
    <Cats data={cats} />
  );
};
export default Home;

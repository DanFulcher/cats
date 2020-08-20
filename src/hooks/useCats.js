import { useState } from 'react';
import axios from 'axios';

export default () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const getCats = () => {
    setLoading(true);
    axios.get('https://5e5932cd7777050014463360.mockapi.io/cats')
      .then((res) => {
        const resCats = res.data;
        setCats(resCats);
      })
      .then(() => {
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  };

  const takeHome = () => {
    setShowModal(!showModal);
  };

  return {
    cats,
    loading,
    error,
    showModal,
    getCats,
    takeHome,
  };
};

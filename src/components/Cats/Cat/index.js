import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../../Button';
import Modal from '../../Modal';
import useCats from '../../../hooks/useCats';

const Cat = ({ cat }) => {
  const { takeHome, showModal } = useCats();
  return (
    <>
      <Card>
        <div>
          <CatPic src={cat.image} alt={cat.name} />
          <Title>{cat.name}</Title>
          <p>{cat.description}</p>
        </div>
        <Button text="Take Home" onClick={() => takeHome(cat.name)} />
      </Card>
      {showModal && (
        <Modal toggle={() => takeHome()} cat={cat} />
      )}
    </>
  );
};

Cat.propTypes = {
  cat: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.array,
  }).isRequired,
};

const Card = styled.article`
  padding: 15px;
  margin-bottom: 15px;
  background: #fff;
  flex-basis: 24%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CatPic = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;
const Title = styled.p`
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 10px;
`;
export default Cat;

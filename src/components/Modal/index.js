import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button';

const Modal = ({ toggle, cat }) => (
  <ModalContainer>
    <div className="modalBody">
      <div className="modalBody__header">
        <button className="close" onClick={toggle} type="button">
          X
        </button>
      </div>
      <div className="modalBody__content">
        <h1>Congratualtions!!!</h1>
        <h3>
          You have just adopted
          {' '}
          {cat.name}
        </h3>
        <p>Your cat is on the way and will be with you shortly</p>
        <div className="cta">
          <Button text="Adopt another Cat" onClick={toggle} />
        </div>
      </div>
    </div>
  </ModalContainer>
);

const ModalContainer = styled.div`
  background: rgba(0,0,0,0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .modalBody {
    background: #fff;
    border-radius: 20px;
    &__header {
      display: flex;
      justify-content: flex-end;
      padding: 40px 40px 0 40px;
      .close {
        background: none;
        border: none;
        &:focus {
          outline: none;
        }
      }
    }
    &__content {
      padding: 40px 80px;
      text-align: center;
      .cta {
        margin: 0 auto;
        width: 400px;
      }
    }
  }
`;
Modal.propTypes = {
  toggle: PropTypes.func.isRequired,
  cat: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.array,
  }).isRequired,
};
export default Modal;

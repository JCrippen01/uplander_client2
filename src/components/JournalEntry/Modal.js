import { Select } from '@material-ui/core';
import React, { useRef, useEffect, useCallback,useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';


const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #222;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 0;
  overlay: {zIndex: 1000}
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;



export const Modal = ({ showModal, setShowModal }) => {
  const [dogs, setDogs] = useState([])
 
  
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

   


  
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <div className="inputBox"><h3>Add The dogs you took with you!</h3></div>
                <div><select name="dogs" value={dogs.id} >
                  <option value="0">Select Park</option>
                  {
                    dogs.map(dog => <option value={dog.id}>{dog.name}</option>)
                  }

                </select></div>
               
                <button>Save</button>
              </ModalContent>
              
              
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

//somegitchanges
import React from 'react';

function DogCard(props) {
  return (
    <>
      <img src={props.image} alt="Random Dog" />
    </>
  )
}

export default DogCard;
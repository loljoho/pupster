import React from 'react';
import DogCard from './DogCard';

function DogResults(props) {
  return (
    <>
      {props.results.map((item, key) => (
        <DogCard image={item} key={key} />
      ))}
    </>
  );
}

export default DogResults;
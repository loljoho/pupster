import React, { Component } from 'react';
import API from '../utils/API';

class Discover extends Component {
  
  state = {
    image: ''
  };

  componentDidMount() {
    this.loadDog();
  }

  loadDog = () => {
    API.getRandomDog()
      .then(res => {
          console.log(res);
          this.setState({
            image: res.data.message
          });
        }
      )
      .catch(err => console.warn(err));
  }


  render() {
    return (
      <>
        <h1>Discover Pupster!</h1>
        <img src={this.state.image} />
      </>
    );
  }

}

export default Discover;
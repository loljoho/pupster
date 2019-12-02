import axios from 'axios';

// here's where we do AJAX calls with Axios

export default {

  getRandomDog: function() {
    return axios.get('https://dog.ceo/api/breeds/image/random');
  }

};
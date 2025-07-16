import axios from 'axios';
import env from '../../services/environment';

const cartService = {
  getCartById: (id) => {
    return new Promise((resolve, reject) => {
      axios.get(`${env.baseURL}/home/${id}`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }
};

export default cartService;
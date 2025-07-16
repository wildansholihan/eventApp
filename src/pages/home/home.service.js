import axios from 'axios';
import env from '../../services/environment';

const homeService = {
  getProductsData: () => {
    return new Promise((resolve, reject) => {
      axios.get(`${env.baseURL}/products`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }
};

export default homeService;
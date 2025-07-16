import axios from 'axios';
import env from '../../services/environment';

const productDetailService = {
  getProductDetailById: (id) => {
    return new Promise((resolve, reject) => {
      axios.get(`${env.baseURL}/products/${id}`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  },
  getProductDetail: () => {
    return new Promise((resolve, reject) => {
      axios.get(`${env.baseURL}/products`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  },
};

export default productDetailService;
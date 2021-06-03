/* eslint-disable no-return-assign */
import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    sendOrderToBackend(orders) {
        return axios.post('/sendorder', orders)
            .catch(error => {
                if (error) {
                    console.error(error);
                }
            });
    }
};

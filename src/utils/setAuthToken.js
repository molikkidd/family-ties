import axios from 'axios';

const setAuthToken = (token) => {
    if (token) {
        // Apply the token to every request header
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}
export default setAuthToken;
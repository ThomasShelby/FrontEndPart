import axios from "axios";

module.exports = {

    getProducts: function () {
        return axios.get('http://localhost:8081/products', {withCredentials: true})
            .then(function (response) {
            console.log(response.data);
            return response;
        })
    }
};
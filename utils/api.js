import axios from "axios";

var getDevelopersURL = "https://api.myjson.com/bins/9xu4z";

module.exports = {
    getDevelopers: function () {
        var encodedURI = window.encodeURI(getDevelopersURL);
        return axios.get(encodedURI)
            .then(function (response) {
                console.log('API: ' + response.data.developers);
                return response.data;
            });
    }
};
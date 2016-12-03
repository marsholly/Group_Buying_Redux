const axios = require('axios');

exports.getZipcodeDeals = (zipcode, cb) => {
  axios.get(`http://lesserthan.com/api.getDealsZip/${zipcode}/json`)
    .then(res => cb(null, res.data))
    .catch(process.stderr.write);
};

exports.getCityDeals = (params, cb) => {
  const { states, city } = params;
  axios.get(`http://lesserthan.com/api.getDealsCity/${states}/${city}/json`)
    .then(res => cb(null, res.data))
    .catch(process.stderr.write);
};

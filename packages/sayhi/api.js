const wxio = require('./libraries/wxio.es6.min.js')

exports.fetchUser = function () {
  return wxio.request({
    url: 'https://uinames.com/api/',
  }).then(({ data }) => data)
}

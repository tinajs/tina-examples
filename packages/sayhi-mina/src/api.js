const wxio = require('wxio')

exports.fetchUser = function () {
  return wxio.request({
    url: 'https://uinames.com/api/',
  }).then(({ data }) => data)
}

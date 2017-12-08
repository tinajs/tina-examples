exports.fetchUser = function () {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://uinames.com/api/',
      success: ({ data }) => resolve(data),
      fail: reject,
    })
  })
}

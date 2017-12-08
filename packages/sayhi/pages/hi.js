const { Page } = require('../libraries/tina.min.js')
const { fetchUser } = require('../api')

Page.define({
  data: {
    name: 'Tina',
    surname: 'S',
  },
  compute ({ name, surname }) {
    return {
      fullname: `${name} ${surname}`
    }
  },
  onLoad () {
    fetchUser()
      .then(({ name, surname }) => this.setData({ name, surname }))
  },
  methods: {
    sayHi () {
      wx.showModal({
        title: 'Hi!',
        content: this.data.fullname,
        showCancel: false,
      })
    },
  }
})

import wxio from 'wxio'

export function fetchUser () {
  return wxio.request({
    url: 'https://uinames.com/api/',
  }).then(({ data }) => data)
}

import Api from './Api'

export default {
  index() {
    return Api().get('/songs')
  },
  show(songId) {
    return Api().get(`songs/${songId}`)
  },
  post(song) {
    return Api().post('/songs', song)
  },
  // FIXED: Accept songId as first parameter, song data as second
  patch(songId, song) {
    return Api().patch(`songs/${songId}`, song)
  },
}

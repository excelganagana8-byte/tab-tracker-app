import Api from './Api'

export default {
  index(params = {}) {
    return Api().get('/songs', {
      params: {
        search: params.search || '', // Ensure search parameter is properly passed
      },
    })
  },
  show(songId) {
    return Api().get(`/songs/${songId}`) // Added leading slash for consistency
  },
  post(song) {
    return Api().post('/songs', song)
  },
  patch(songId, song) {
    return Api().patch(`/songs/${songId}`, song)
  },
}

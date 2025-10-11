// SongHistoryService.js
import Api from './Api'

export default {
  index(userId) {
    return Api().get('/history', { params: { user: userId } })
  },
  create(payload) {
    return Api().post('/history', payload)
  },
  delete(songId, userId) {
    return Api().delete(`/history/${songId}`, { data: { user: userId } })
  },
  deleteAll(userId) {
    return Api().delete('/history', { data: { user: userId } })
  },
}

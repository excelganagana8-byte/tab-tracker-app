import Api from './Api'

export default {
  index(userId) {
    return Api().get('/bookmarks', { params: { user: userId } })
  },
  create(bookmark) {
    return Api().post('/bookmarks', bookmark)
  },
  delete(bookmarkId, userId) {
    return Api().delete(`/bookmarks/${bookmarkId}`, {
      data: { user: userId },
    })
  },
}

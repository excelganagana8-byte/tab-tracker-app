// src/services/BookmarksService.js
import Api from './Api'

export default {
  // 🟩 Get all bookmarks for a user
  index(params) {
    return Api().get('/bookmarks', { params })
  },

  // 🟩 Add a new bookmark
  create(bookmark) {
    return Api().post('/bookmarks', bookmark)
  },

  // 🟩 Delete a bookmark
  delete(bookmarkId, userId) {
    return Api().delete(`/bookmarks/${bookmarkId}`, {
      data: { user: userId },
    })
  },
}

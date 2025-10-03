// src/services/AuthenticationService.js
import Api from './Api';

export default {
  register(credentials) {
    return Api().post('/register', credentials);
  }
};

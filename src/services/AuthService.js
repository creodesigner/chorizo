import BaseService from './BaseService'

class AuthService extends BaseService {
  constructor() {
    super()
  }


  login({family_name, password}) {
    return this
      .fetch('post', '/login', {family_name, password})
      .then((response) => response.data)
      .then(({token}) => localStorage.setItem('choreToken', token))
  }


  signup({family_name, password}) {
    return this.fetch('post', '/signup', {family_name, password})
  }


  logout() {
    // Clear the store....?
    localStorage.removeItem('choreToken')
    return new Promise((resolve) => resolve())
  }
}

export const auth = new AuthService()
export { auth as AuthService }

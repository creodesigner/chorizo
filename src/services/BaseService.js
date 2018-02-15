import axios from 'axios'

export default class BaseService {
  constructor() {
    this.apiRoot = process.env.REACT_APP_API_ROOT
  }

  fetch(method, path = '', data = {}, options = {}) {
    return axios(
      {
        data,
        method,
        url: `${this.apiRoot}` + path,
        headers: {
          'x-chore-token': localStorage.getItem('choreToken')
        }
      }
    )
  }
}

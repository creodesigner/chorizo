import BaseService from './BaseService'

class ChoreService extends BaseService {
  constructor() {
    super()
    this.apiRoot += '/chores'
  }

  createChore(data) {
    return this.fetch('post', '', data)
  }


  deleteChore(id) {
    return this.fetch('delete', `/${id}`)
  }


  getChores() {
    return this.fetch('get')
  }


  getChore(id) {
    return this.fetch('get', `/${id}`)
  }


  updateChore(id, body) {
    return this.fetch('put', `/${id}`, body)
  }
}

export const chores = new ChoreService()
export { chores as ChoreService }

import BaseService from './BaseService'

class ChildService extends BaseService {
  constructor() {
    super()
    this.apiRoot += '/children'
  }


  addChild(data) {
    return this.fetch('post', '', data)
  }


  deleteChild(id) {
    return this.fetch('delete', `/${id}`)
  }


  getChildren() {
    return this.fetch('get')
  }


  getChild(id) {
    return this.fetch('get', `/${id}`)
  }


  updateChild(id, body) {
    return this.fetch('put', `/${id}`, body)
  }
}


export const children = new ChildService()
export { children as ChildService }

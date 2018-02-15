import BaseService from './BaseService'

class RewardService extends BaseService {
  constructor() {
    super()
    this.apiRoot += '/rewards'
  }

  createReward(data) {
    return this.fetch('post', '', data)
  }


  deleteReward(id) {
    return this.fetch('delete', `/${id}`)
  }


  getRewards() {
    return this.fetch('get')
  }


  getReward(id) {
    return this.fetch('get', `/${id}`)
  }


  updateReward(id, body) {
    return this.fetch('put', `/${id}`, body)
  }
}

export const rewards = new RewardService()
export { rewards as RewardService }

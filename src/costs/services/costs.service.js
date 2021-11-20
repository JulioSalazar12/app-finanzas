import http from '@/core/http-common'
class CostsService {
    endpoint = 'costes';

    //TODO: recibir letra

    createNewCosts(createCostDto){
        return http.post(`${this.endpoint}/register`, createCostDto)
    }
}

export default new CostsService();
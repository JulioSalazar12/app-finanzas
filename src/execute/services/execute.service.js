import http from '@/core/http-common'

class ExecuteService {
    endpoint = 'letra';

    getAll(){
        return http.get(`${this.endpoint}/all`);
    }

    getById(id){
        return http.get(`${this.endpoint}/${id}`)
    }
}

export default new ExecuteService();
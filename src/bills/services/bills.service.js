import http from '@/core/http-common'
class BillsService {
    endpoint = 'letra';

    //TODO: implementar que reciba acreedores, deudores, tasas y entidadesFinancieras

    createNewBills(createLetterDto){
        return http.post(`${this.endpoint}/register`, createLetterDto)
    }
}

export default new BillsService();
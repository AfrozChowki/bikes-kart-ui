import http from "../http-common";

class BikesKartDataService {
    getAll() {
        return http.get('/api/Products');
    }
}

export default new BikesKartDataService();
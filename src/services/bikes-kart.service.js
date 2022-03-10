import http from "../http-common";
import authHeader from "../services/auth-header"

class BikesKartDataService {
    getAll() {
        return http.get('/api/Products', { headers: authHeader() });
    }
}

export default new BikesKartDataService();
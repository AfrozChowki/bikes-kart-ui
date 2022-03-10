import http from "../http-common";

class LoginService {

    login(email, password) {
        return http
          .post('/api/Users', { Email: email, Password: password })
          .then((response) => {
            if (response.data.token) {
              localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
          });
      }
      
      logout() {
        localStorage.removeItem("user");
      }

    //   register(username, email, password) {
    //     return axios.post(API_URL + "signup", {
    //       username,
    //       email,
    //       password,
    //     });
    //   }
}

export default new LoginService();
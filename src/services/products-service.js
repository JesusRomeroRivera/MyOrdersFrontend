import http from "./http.js";

class ProductService {
  getAll() {
    return http.get("/Product");
  }
}

export default new ProductService();
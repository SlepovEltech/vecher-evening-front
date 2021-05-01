import http from "../http-common";

class GuestDataService {
    getAll() {
        return http.get("/guests");
    }

    create(data) {
        return http.post("/guests", data);
    }

    update(id, data) {
        return http.put(`/guests/${id}`, data);
    }

    delete(id) {
        return http.delete(`/guests/${id}`);
    }

    deleteAll() {
        return http.delete(`/guests`);
    }

    changeLimit(limit){
        return http.post(`/guests/${limit}`);
    }

}

export default new GuestDataService();
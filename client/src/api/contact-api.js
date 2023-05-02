import { api } from "./api";
import { apiConfig } from "./config";

export const contactApi = {
    myContacts: () => api.call("get", apiConfig.contactUrl + "/mycontacts"),
    addContact: (data) => api.call("post", apiConfig.contactUrl + "/add", data),
    allContacts: () => api.call("get", apiConfig.contactUrl + "/all-contacts"),
};
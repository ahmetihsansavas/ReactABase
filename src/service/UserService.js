import { APIService } from "../../src/service/Base/api.service";
import { GET_ALL_USER, GET_IGSAY_REGION, POST_CREATE_USER } from './const/SystemUrl';
export class UserService {

    static async getUserName(id) {
        const url = GET_IGSAY_REGION;
        var params = new Map();
        params.set("id", id);
        return await APIService.getInstance().httpGet(url).setQueryParameters(params).setUseToken(true).execute();
    }

    static async getUsers() {
        const url = GET_ALL_USER;
        return await APIService.getInstance().httpGet(url).setUseToken(true).execute();
    }
  
    static async createUser(data) {
        const url = POST_CREATE_USER;
        return await APIService.getInstance().httpPost(url).setBody(data).setUseToken(true).execute();
    }
  
}
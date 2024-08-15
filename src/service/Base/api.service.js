import { useRef } from "react";
import { APIRequest } from "./api.request";
//import { LoadingComponentSwitcher } from "../utils/loading.switcher.js";
import { GET, POST, DELETE, UPDATE } from "./api.request.types";
//import { StorageService } from "./storage.service";
//import { ErrorModalSwitcher } from "../utils/errorModal.switcher";
//import { toast } from "react-toastify";
import { Toast } from 'primereact/toast';
//import * as axios from 'axios';
//const axios = require("axios").default;
import axios from 'axios'
export class APIService {
  static instance = APIService;

  constructor() { }
 
  /**
   * @param {string} url
   */
  static httpGet(url) {
    return new APIRequest(GET, url, this.instance);
  }

  /**
   * @param {string} url
   */
  static httpPost(url) {
    return new APIRequest(POST, url, this);
  }

  /**
   * @param {string} url
   */
  static httpUpdate(url) {
    return new APIRequest(UPDATE, url, this);
  }

  /**
   * @param {string} url
   */
  static httpDelete(url) {
    return new APIRequest(DELETE, url, this);
  }

  static getInstance() {
    return this.instance;
  }

  /**
   * @param {APIRequest} apiRequest
   */
  static async getHeaders(apiRequest) {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    apiRequest.getHeaders().forEach((value, key) => {
      headers[key] = value;
    });
    if (apiRequest.getUseToken()) {
      //const token = await StorageService.getToken();
      var token =null;
      if (token) {
        // headers['Authorization'] = `Bearer ${token.access_token}`;
        headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return headers;
  }

  /**
   * @param {APIRequest} apiRequest
   */
  static getURL(apiRequest) {
    let url = apiRequest.getUrl();
    const params = apiRequest.getQueryParams();
    if (params) {
      url = url + "?" + params;
    }
    return url;
  }
  /**
   * @param {APIRequest} apiRequest
   */
  static async doApiCall(apiRequest) {
    const disableLoading = apiRequest.getDisableLoading()
    //!disableLoading && LoadingComponentSwitcher.ShowLoadingComponent();
    const url = this.getURL(apiRequest);
    const method = apiRequest.getMethod();
    const data = apiRequest.getBody();
    const headers = await this.getHeaders(apiRequest);
    console.log("Please Waiting...");
    console.log("URL => ", url);
    console.log("Method => ", method);
    console.log("Body => ", data);
    console.log("Headers => ", headers);
    console.log("Parameters => ", apiRequest.getQueryParams());
    return await axios({
      method,
      url,
      headers,
      data,
    })
      .then((response) => {
        console.log("RESPONSE DATA => ", response);
        if (response.status === 400) {
          //ErrorModalSwitcher.ShowErrorModal("400 : Bad Request.", []);
        } else if (response.status == 404) {
          //ErrorModalSwitcher.ShowErrorModal("404 : Not Found", []);
        } else if (response.status == 500) {
          //ErrorModalSwitcher.ShowErrorModal("500 : System Error", []);
        } else if (response.status == 202) {
          // Toast Notification missing material
          //ErrorModalSwitcher.ShowErrorModal("202 : Geçersiz İstek.", response.data.data);
    
          // toast.error(response.data.errors, {
          //   position: "bottom-right",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });

        } else if (response.status == 201 && !disableLoading) {
          // toast.success("Başarılı", {
          //   position: "bottom-right",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });
        }
        return response;
      })
      .catch((e) => {
        //ErrorModalSwitcher.ShowErrorModal("500 : " + e, []);
        console.log("ERROR => ", e);
        //console.log("test")
        return e;
      })
      .finally(() => {
        //LoadingComponentSwitcher.HideLoadingComponent();
      });
  }
}

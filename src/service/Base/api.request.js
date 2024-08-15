import { APIService } from "./api.service";

export  class APIRequest{

     /**
     * @param {APIService} apiService 
     * @param {String} url 
     * @param {String} method 
     * @param {Boolean} useToken 
     * @param {Boolean} disableLoading 
     * @param {String} body 
     * @param {Map} queryParameters
     * @param {Map} headers
    */
    constructor(method, url, apiService,useToken,body,queryParameters=new Map(),headers=new Map()) {
        this.method=method;
        this.url=url;
        this.apiService=apiService;
        this.useToken=useToken;
        this.body=body;
        this.queryParameters=queryParameters;
        this.headers=headers;
    }
    
    //SET

    setBody(body){
        this.body = body;
        return this;
    }

    /**
     * @param {string} key 
     * @param {string} value 
    */
    addHeader(key, value) {
        this.headers.set(key,value);
        return this;
    }

    /**
     * @param {Boolean} useToken 
    */
    setUseToken(useToken){
        this.useToken = useToken;
        return this;
    }

    setDisableLoading(disableLoading){
        this.disableLoading = disableLoading;
        return this;
    }

    /**
     * @param {Map<string,string>} queryParameters 
    */
    setQueryParameters(queryParameters) {
        this.queryParameters = queryParameters;
        return this;
    }

    //EXECUTE
    async execute() {
        return await APIService.doApiCall(this);
    }
    //GET

    getHeaders(){
        return this.headers;
    }

    getUseToken(){
        return this.useToken;
    }

    getDisableLoading(){
        return this.disableLoading;
    }
    
    getMethod(){
        return this.method; 
    }

    getBody() {
        return this.body;
    }

    getUrl() {
        return this.url;
    }

    getQueryParams(){
        const queries= [];
        this.queryParameters.forEach((value, key) => {
            queries.push(key + '=' + value);
        });
        return queries.join('&');
    }
}
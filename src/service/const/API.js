
export class API {
    static apiType = "local"; //local,test,live --> Api type kullandığımız sistem türüne göre değişmelidir
    // static localAPI = "";
    // static testAPI = "https://igsaybackendtest.igdas.com.tr";
    // static liveAPI = "";

    static service = {
        system: {
            local: ":44362/api/System",
            test: ":44391/system",
            live: ":8091/system"
        },
        login: {
            local: "/login/User",
            test: ":44390/User",
            live: ":8090/User"
        },
        socket: {
            local: "",
            test: ":44398/chat",
            live: ":8098/chat"
        }
    }

    static base = {
        local:"https://localhost",
        test:"https://igsaybackendtest.igdas.com.tr",
        live:"https://igsaybackend.igdas.com.tr"
    }
    static baseCdn = {
        local:"testwebtesisatcdn.igdas.com.tr",
        test:"testwebtesisatcdn.igdas.com.tr",
        live:"igsaybackend.igdas.com.tr:8095"
    }
    static baseDas = {
        local:"https://dastest.igdas.istanbul/",
        test:"https://dastest.igdas.istanbul/",
        live:"https://das.igdas.com.tr/"
    }

    static baseRoute(apiType) {
        return API.base[apiType]
    }

    static serviceRoute(service, apitype) {
        return API.service[service][apitype]
    }

    static cdnRoute(apiType) {
        return API.baseCdn[apiType]
    }

    static dasRoute(apiType) {
        return API.baseDas[apiType]
    }
}
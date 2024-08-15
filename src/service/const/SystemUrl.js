import {API} from "./API";

const BASE_URL = API.baseRoute(API.apiType)+API.serviceRoute("system",API.apiType);

export const GET_IGSAY_REGION = `${BASE_URL}/GetUserNameById`;
export const GET_ALL_USER = `${BASE_URL}/GetUsers`;
export const POST_CREATE_USER = `${BASE_URL}/CreateUser`;
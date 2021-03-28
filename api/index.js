import { get } from "../plugins/axios/index";

export const getApp = params => get("/demo/api/app", params);

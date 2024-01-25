import returnFetchJson from "return-fetch-json";


export const fetchExtended = returnFetchJson({
    jsonParser: JSON.parse,
    baseUrl: "http://localhost:9090/api/",
    headers: { Accept: "application/json" },
});
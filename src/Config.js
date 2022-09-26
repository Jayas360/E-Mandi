export const API = process.env.REACT_APP_API_URL;

const key = "579b464db66ec23bdd000001812a24fcc78245bf611b117db6559d91";
export const getMandiApi = (offset, limit, district = "") => {
    var api;
    if(district !== "")
        api =  "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=" + key + "&format=json&offset="+ offset +"&limit="+ limit +"&filters[state]=Uttar%20Pradesh&filters[district]=" + district;
    else 
        api = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=" + key + "&format=json&offset="+ offset +"&limit="+ limit +"&filters[state]=Uttar%20Pradesh";
    return api;
}
//export const mandiApi = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001812a24fcc78245bf611b117db6559d91&format=json&offset=0&limit=50&filters[state]=Uttar%20Pradesh&filters[district]=Agra"
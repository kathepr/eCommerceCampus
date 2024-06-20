import { getProductId } from "./detail.js";

export const openRequest = indexDB.open("storage", 1);
openRequest.onupgradeneeded = async function() {
    let params = new URLSearchParams(location.search);
    let {data} = await getProductId({ id : params.get("id") });
    let db = openRequest.result;
    if (!db.objectStoreNames.contains("about_product")) {
        db.createObjectStore("about_product", {keypath : "id"});
    }
}
const url = "http://localhost:3001/api"
export const getProducts = async (pageN=1, orderField="", order=1, productName="", manufacterName="") => {
    const urlPath = `${url}/products?`;
    const urlQueryParams = urlPath + new URLSearchParams({
        pageN, orderField, order, productName, manufacterName
    });
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await fetch(urlQueryParams,options);
    const responseJSON = await response.json();
    return responseJSON;
}

const axios = require('axios').default;

const API_URL =  "http://localhost:5000/api/products/";

const getProducts = async () =>{

    var products = await  axios.get(API_URL)

    return products;
}

const addProduct = async (product) =>{

    await  axios.post(API_URL,product); 
}

const editProduct = async (id) =>{
   
    
    await  axios.get(API_URL+id); 

}



//var products = getProducts();

//Show in page

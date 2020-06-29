const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".cart-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");


let cart = []

class Products{
async getProducts(){
let result= await fetch("product.json")
return result;
}catch (error){

}
}

class UI{

}

class Storage{

}

document.addEventListener("DOMContentLoaded", ()=>{
    const ui = newUI();
    const products = new Product
})

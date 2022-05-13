/*
- product-form can be described as an object, this is 
because the form itself has name, price, description
atributes. This form has methods as save product, list
product, etc.
*/

export default class Product {
    constructor({name, price, description}){
        this.name = name;
        this.price = price;
        this. description = description;
    }
}
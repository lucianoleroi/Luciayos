import { defineStore } from 'pinia'
import axios from "axios" 

export const useCounterStore = defineStore('Products',  {
  state : () => {
    return {
      Products: [],
      status: "default"
    }
  },

  getters : { //methode permettant de récupérer des éléments
    getProducts: state => state.Products,
    getStatus: state => state.status,
   },

   
  actions : {
  async fetchProducts() {
   
    this.product = await axios({url:"http://localhost/api/products", method : "get"}), 
      
   
      console.error("Erreur lors de la récupération des produits :", error)
    }
  }

})




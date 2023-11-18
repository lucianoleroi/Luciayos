import { defineStore } from 'pinia'
import axios from "axios" 

export const useCounterStore = defineStore('Products',  {
  state : () => {
    return {
      Products: [],
      status: 'default'
    }
  },

  getters : { 
    getProducts: state => state.Products,
    getStatus: state => state.status,
   },

   
  actions : {
  async fetchProducts() {
   this.status = 'fetching'
    this.state.Products = await axios({url:"http://localhost/api/products", method : "get"}), 
    this.status = 'done'

    },
  }

})




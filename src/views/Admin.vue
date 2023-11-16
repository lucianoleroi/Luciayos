<template>
  <!-- <section>
    <h1>Je suis sur la page admin</h1>
    <h2>{{ message }}</h2>
  </section> -->

  <div>
       <button @click="addRow">Add Row</button>
       <table>
         <thead>
           <tr>
             <th>Name</th>
             <th>Description</th>
             <th>Price</th>
           </tr>
         </thead>
         <tbody>
           <tr v-for="item in getProducts.data['hydra:member']" :key="item">
             <td>{{ item.name }}</td>
             <td>{{ item.description }}</td>
             <td>{{ item.price }}</td>
             <td><button @click="deleteRow(index)">Delete</button></td>
           </tr>
         </tbody>
       </table>
     </div>
</template>

<script >

import { mapActions, mapState } from "pinia";
import {useCounterStore} from '../stores/products'
    
    
    export default{
        data() { 
            return {
                message: "Hello World",
                product : [],
                
            };
        },
       
    
        async mounted() {
        await this.fetchProducts;
            },
        computed: {
            ...mapActions(useCounterStore,["fetchProducts"]), 
            ...mapState(useCounterStore,["getProducts","getStatus"]) 
        },
    }

</script>

<style>

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

</style>




<template>
  <section>
    <div class="hautdepage">
        <img class="premimg" src="src/Images/MyShop.png">
        <input class="searchbar" @keyup="searchItem" type="text" name="search" placeholder="Search" />
        <img class="loupe" src="src/Images/search1.png">
        <a href="/login" class="premierboutton" v-on:click="LogIn">Log In</a >
    </div>  
  </section>
  
    <div class="button-container">
      <button @click="afficherProduits">Products</button>
      <button>Categories</button>
      <button>Users</button>
    </div>

  <div>
       <button @click="addRow">Add </button>
       <table>
         <thead>
           <tr>
             <th>Name</th>
             <th>Description</th>
             <th>Price</th>
             <th>Categories</th>
             <th>Id</th>
           </tr>
         </thead>
          <tbody>
              <tr v-for="products in products" :key="products.id">
                <td>{{ products.name }}</td>
                <td>{{ products.description }}</td>
                <td>{{ products.price + "€" }}</td>
                <td>{{ products.categories.join(', ') }}</td>
                <td>{{ products.id }}</td>
                <td>
                  <button @click="editerProduit(products)" id="Action">Edit</button>
                  <button @click="deleteItemById(products.id)" id="Action">Delete</button>
                </td>
              </tr>
            </tbody>

       </table>
     </div>
     

     <div class="pagination">
          <ul>
            <li><a href="#" class="active">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">6</a></li>
            <li><a href="#">7</a></li>
            <li><a href="#">8</a></li>
            <li><a href="#">9</a></li>
            <li><a href="#">10</a></li>
            <li><a href="#">></a></li>
          </ul>
    </div>
</template>

<script >


import axios from "axios" 


export default {
  data() { 
    return {
      products:[] ,
      name : '',
      description : '',   
      price : '',   
      tableData: ''
    }
  }, 



  methods:{
      async afficherProduits() {
        this.pageActuelle = 'products';
        try {
          const response = await axios.get('http://localhost/api/products'); 
          console.log(response.data['hydra:member'])
          this.products = response.data['hydra:member'];
        } catch (error) {
          console.error('Erreur lors de la récupération des produits:', error.message);
        }
  },
  

   async fetchProducts () {

  
      try {
         const response = await fetch('http://localhost/api/products', {
          method: 'GET',
           headers: {
              'Content-Type':'application/json',
           },
        });
         if(!response.ok){
          throw new Error(`Erreur:${response.status}`)
        }
        const data = await response.json();
         this.products = response.data['hydra:member']
        console.log(this.products)
       } catch (error) {
       console.error(error.message)
       }
     },
   
      async deleteItemById (item_ID) {
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAzMTkxNDAsImV4cCI6MTcwMDMyMjc0MCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImF5b2RlbGViYW5zb3VAZ21haWwuY29tIn0.EoievTtrgY3haZb0NFZDBc5myBA7nnxBF3KrQiRO4VNWmxib4FERFW9Z57i9WrPwtlNsmBsru9VW9nFT5VZ0YdCwZ0uqXybLojPtDfgBC-zwsIRhp8vHpMUJ9x6QgkMR1ibL0tXklV1t5ULziAKX6rNxCBSPhGqROiVCH4MqIktAD-HwhOY6ur3XXg3vGoOhbntpwVAZQcmYKq9XKOosbV1YdYIz_s1s9ZtUpFOBDESDhX6LotEKYoaDPIskg20s4H93LGg5d2qaMpNpywP5lo_aVHk8hETO6xur6T2avSSBK-pcYGv9jk8zi7e7MiTm8YDUqSyaNHY6SCFHTTkQvQ"

        try {
          await fetch(`http://localhost/api/products/${item_ID}`, {
            method: 'DELETE',
           headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
        });
      

   const index = this.products.findIndex(item => item.id === item_ID);
       if (index !== -1) {
        this.products.splice(index, 1);
         this.fetchProducts();
        }
        }
        catch (error){
          console.error ("Erreur survenu" , error.message)
        }
      },
     async fetchProducts () {
      try {
         const response = await fetch('http://localhost/api/products', {
           method: 'GET',
            headers: {
               'Content-Type': 'application/json',
            },
        });
         if(!response.ok){
          throw new Error(`Erreur:${response.status}`)
        }
         const data = await response.json();
        this.products = data['hydra:member']
        console.log(this.products)
      } catch (error) {
       console.error("erreur survenu",error.message)
       }
     },
    },
   
    async fetchProducts () {
      try {
         const response = await fetch('http://localhost/api/products', {
           method: 'PATCH',
            headers: {
               'Content-Type': 'application/json',
      },
         })
  ;
         if(!response.ok){
          throw new Error(`Error:${response.status}`) ;
        }
         const data = await response.json();
         this.products = data['hydra:member']
        console.log(this.products)
       } catch (error) {
       console.error(error.message)
       }
     },
    
  
    //Categories/
    async deleteItemBycategorie() {
       const token = "eeyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAzMTkxNDAsImV4cCI6MTcwMDMyMjc0MCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImF5b2RlbGViYW5zb3VAZ21haWwuY29tIn0.EoievTtrgY3haZb0NFZDBc5myBA7nnxBF3KrQiRO4VNWmxib4FERFW9Z57i9WrPwtlNsmBsru9VW9nFT5VZ0YdCwZ0uqXybLojPtDfgBC-zwsIRhp8vHpMUJ9x6QgkMR1ibL0tXklV1t5ULziAKX6rNxCBSPhGqROiVCH4MqIktAD-HwhOY6ur3XXg3vGoOhbntpwVAZQcmYKq9XKOosbV1YdYIz_s1s9ZtUpFOBDESDhX6LotEKYoaDPIskg20s4H93LGg5d2qaMpNpywP5lo_aVHk8hETO6xur6T2avSSBK-pcYGv9jk8zi7e7MiTm8YDUqSyaNHY6SCFHTTkQvQ";
       try {
        const response = await fetch (`http://localhost/api/categories/${item_categorie}`,{
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          });             
if (!response.ok) {
  throw new Error (`Error :${response.status}`);
}   }
 catch (error) {
  console.error(`Erreur survenu :` , error.message)
}
       },
       async PostItemBycategorie(item_categorie) {
  const token = "your_jwt_token_here";

  try {
    const response = await fetch(`http://localhost/api/categories/${item_categorie}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error posting item:`, error.message);
  }
}}
//      async deleteItemBycategorie() {
//        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNDM1MDEsImV4cCI6MTcwMDI0NzEwMSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImF5b2RlbGViYW5zb3VAZ21haWwuY29tIn0.W-4sSO7vaHRnGcyKt0SaPll3n3kkbNPadflnOdbt9qg36BooNDHOFn5lr5OvWFCCut7aekAVBzJSVDqv2QKGLMzkV8y2BUlU4I7h0gOGBPjGAC2m4eLTwkOACVFYBxGrW77H40HgfDjGwVnhOpeWQaxrqLDJJd5aJL27_fgDJbCY-HoX4ZQX5VzVjLqSqnN3kxkDDX30u_MYWzEuKjb7tOW_x8eDvQrXwGOwvIIjzzBtudtjXicWapZjrCHsuEPPbAe3bFMDYMJ57w08xqujsUOZp9SgeHqi_TkqTZeK5jitdJJgRGcL3hW_obbdCGAdyOvyBOFpr1stNSRNaxP4OA"

//        try {
//          const response = await fetch(`http://localhost/api/categories/${item_categorie}`, {
//            method: 'GET',
//           headers: {
//              'Authorization': `Bearer ${token}`,
//              'Content-Type': 'application/json',
//            },
//        });
//      }
//     },

//      async deleteItemBycategorie() {
//        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNDM1MDEsImV4cCI6MTcwMDI0NzEwMSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImF5b2RlbGViYW5zb3VAZ21haWwuY29tIn0.W-4sSO7vaHRnGcyKt0SaPll3n3kkbNPadflnOdbt9qg36BooNDHOFn5lr5OvWFCCut7aekAVBzJSVDqv2QKGLMzkV8y2BUlU4I7h0gOGBPjGAC2m4eLTwkOACVFYBxGrW77H40HgfDjGwVnhOpeWQaxrqLDJJd5aJL27_fgDJbCY-HoX4ZQX5VzVjLqSqnN3kxkDDX30u_MYWzEuKjb7tOW_x8eDvQrXwGOwvIIjzzBtudtjXicWapZjrCHsuEPPbAe3bFMDYMJ57w08xqujsUOZp9SgeHqi_TkqTZeK5jitdJJgRGcL3hW_obbdCGAdyOvyBOFpr1stNSRNaxP4OA"

//        try {
//          const response = await fetch(`http://localhost/api/categories/${item_categorie}`, {
//            method: 'PATCH',
//           headers: {
//              'Authorization': `Bearer ${token}`,
//              'Content-Type': 'application/json',
//            },
//        });
//      }
//     },
//   ////users
//   async afficherusers() {
//         this.pageActuelle = 'users';
 
        
//         try {
//           const response = await axios.get('http://localhost/api/users'); 
//           console.log(response.data['hydra:member'])
//           this.users = response.data['hydra:member'];
//         } catch (error) {
//           console.error('Erreur lors de la récupération des produits:', error.message);
//         }
//       },
  
 
//   async fetchUsers () {
//      try {
//         const response = await fetch('http://localhost/api/users', {
//           method: 'GET',
//            headers: {
//               'Content-Type':'application/json',
//             },
//        });
//         if(!response.ok){
//          throw new Error(`Erreur:${response.status}`)
//        }
//         const data = await response.json();
//         this.users = response.data['hydra:member']
//        console.log(this.users)
//       } catch (error) {
//       console.error(error.message)
//       }
//     },
   
//     async deleteItemByUsers() {
//        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNDM1MDEsImV4cCI6MTcwMDI0NzEwMSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImF5b2RlbGViYW5zb3VAZ21haWwuY29tIn0.W-4sSO7vaHRnGcyKt0SaPll3n3kkbNPadflnOdbt9qg36BooNDHOFn5lr5OvWFCCut7aekAVBzJSVDqv2QKGLMzkV8y2BUlU4I7h0gOGBPjGAC2m4eLTwkOACVFYBxGrW77H40HgfDjGwVnhOpeWQaxrqLDJJd5aJL27_fgDJbCY-HoX4ZQX5VzVjLqSqnN3kxkDDX30u_MYWzEuKjb7tOW_x8eDvQrXwGOwvIIjzzBtudtjXicWapZjrCHsuEPPbAe3bFMDYMJ57w08xqujsUOZp9SgeHqi_TkqTZeK5jitdJJgRGcL3hW_obbdCGAdyOvyBOFpr1stNSRNaxP4OA"

//        try {
//          const response = await fetch(`http://localhost/api/users/${item_ID}`, {
//            method: 'DELETE',
//           headers: {
//              'Authorization': `Bearer ${token}`,
//              'Content-Type': 'application/json',
//            },
//        });
//      }
  
//     },

//   const index = this.postusers.data['hydra:member'].findIndex(item => item.id === item_ID);
//       if (index !== -1) {
//        this.getusers.data['hydra:member'].splice(index, 1);
//         this.fetchusers();
//        },

//     async fetchusers () {
//      try {
//         const response = await fetch('http://localhost/api/users', {
//           method: 'POST',
//            headers: {
//               'Content-Type': 'application/json',
//             },
//        });
//         if(!response.ok){
//          throw new Error(`Erreur:${response.status}`)
//        }
//         const data = await response.json();
//         this.users = response.data['hydra:member']
//        console.log(this.users)
//       } catch (error) {
//       console.error(error.message)
//       }
//     },
   
//    async fetchProducts () {
//      try {
//         const response = await fetch('http://localhost/api/users', {
//           method: 'PA',
//            headers: {
//               'Content-Type': 'application/json',
//             },
//        });
//         if(!response.ok){
//          throw new Error(`Erreur:${response.status}`)
//        }
//         const data = await response.json();
//         this.users = response.data['hydra:member']
//        console.log(this.users)
//       } catch (error) {
//       console.error(error.message)
//       }
//     },
// }
// }

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

.button-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  padding-bottom: 50px;
  padding-top: 70px;
}

.pagination {
  float: left;
  padding-top: 30px;
  text-align: center;
  font-family: "Roboto", sans-serif;
}

.pagination ul {
  padding-top: 10000px;
  list-style: none;
  padding: 0;
}

.pagination li {
  display: inline;
  margin-right: 5px;
}

.pagination a {
  text-decoration: none;
  padding: 5px 10px;
  color: #333;
}

.pagination a:hover {
  background-color: black;
  color: #fff;
}

.pagination a.active {
  background-color: #22232b;
  color: white;
}

input.searchbar{
  width: 1000px;
}

img.loupe{
  width: 100px;
  height: 50px;
  padding-right: 30px;
}

a.premierboutton{
  padding-left: 15px;
}

img.premimg{
  height: 50px;
}

button#Action {
  align-items: center;
  margin-left: 40 px;
  margin-right: 10px;
}

td {
  text-align: center;
}

th {
  text-align: center;
}
</style>




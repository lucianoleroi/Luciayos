<template>
    <!-- <section>
       <h1>Je suis sur la page products</h1>
       <h2>{{ message }}</h2>
     </section> -->
   
     <head>
    <link rel="stylesheet" href="fonts/Avenir Book.ttf">
    <link rel="stylesheet" href="fonts/Roboto-Black.ttf">
  </head>
  <body>
    <main>
      <header>
        <nav class="top">
          <ul class="menu">
            <div class="menu-toggle">
              <img src="src/Images/logo.png" class="logo" alt="Logo" />
            </div>

            <figure>
              <a href="https://youtu.be/dQw4w9WgXcQ">
                <li class="accueil">HOME</li></a
              >
            </figure>
            <figure>
              <a href="https://youtu.be/dQw4w9WgXcQ">
                <li class="accueil">SHOP</li></a
              >
            </figure>
            <figure>
              <a href="https://youtu.be/dQw4w9WgXcQ">
                <li class="accueil">MAGAZINE</li></a
              >
            </figure>
          </ul>
          <ul class="login">
            <img src="src/Images/cart.png" class="cart" alt="Cart" />
             <a href="/register" >LOGIN</a>
          </ul>
        </nav>
        <section class="rechercher">
          <div class="research">
            <img src="src/Images/search.png" class="loupe" alt="Loupe" />
            <div class="input-field">
              <input id="name" type="text" required />
            </div>
          </div>
          <div class="match">
            <select class="best_match" name="" id="">
              <option value="">Best match</option>
            </select>
          </div>
        </section>
      </header>
      <nav>
        <section class="vente">
          <div class="row">
            <article>
              <section class="deroule">
                <p class="filter">FILTER BY</p>
                <select class="col" name="" id="">
                  <option value="">Collection</option>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                  <option value="Automn">Automn</option>
                  <option value="Winter">Winter</option>
                </select>
                <select class="col" name="" id="">
                  <option value="">Color</option>
                  <option value="Black">Black</option>
                  <option value="White">White</option>
                </select>
                <select class="col" name="" id="">
                  <option value="">Category</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="D.I.Y">D.I.Y</option>
                </select>
                <p>Price Range</p>
                <div class="range-slider">
                  <input
                    type="range"
                    class="min-price"
                    value="100"
                    min="10"
                    max="500"
                    step="10"
                  />
                  <input
                    type="range"
                    class="min-price"
                    value="100"
                    min="10"
                    max="500"
                    step="10"
                  />
                </div>
                <div class="price-content">
                  <div>
                    <p id="min-value">$0</p>
                  </div>
                  <div>
                    <p id="max-value">$10,000+</p>
                  </div>
                </div>
              </section>
            </article>

        
            <div>
              <div class="furniture">
                <article>
                  <img src="src/Images/image2.JPG" alt="Image 2" />
                </article>
              </div>
              <div class="acart">
                <article>
                  <ul>
                    <li class="price">$590</li>
                    <li><strong>Keeve Set</strong></li>
                    <li class="GRIS">TABLE & CHAIRS</li>
                    <li>
                      <img
                        src="src/Images/add shopping cart.png"
                        class="price"
                        alt="Shopping cart"
                      />
                    </li>
                    <li>
                      <img src="src/Images/4 stars.png" alt="4 stars" /><img
                        src="src/Images/empty star.png"
                        alt="1 empty star"
                      />
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            <div>
              <div class="furniture">
                <img src="src/Images/image3.JPG" alt="Image 3" />
              </div>
              <div class="acart">
                <article>
                  <ul>
                    <li class="price">$950</li>
                    <li><strong>Nillè</strong></li>
                    <li class="GRIS">ARMCHAIR</li>
                    <li>
                      <img
                        src="src/Images/add shopping cart.png"
                        class="price"
                        alt="Shopping cart"
                      />
                    </li>
                    <li><img src="src/Images/5 stars.png" alt="5 stars" /></li>
                  </ul>
                </article>
              </div>
            </div>
            <div>
              <div class="furniture">
                <img src="src/Images/image4.JPG" alt="Image 4" />
              </div>
              <div class="acart">
                <article>
                  <ul>
                    <li class="price">$90</li>
                    <li><strong>Blanko</strong></li>
                    <li class="GRIS">SIDE TABLE</li>
                    <li>
                      <img
                        src="src/Images/add shopping cart.png"
                        class="price"
                        alt="Shopping cart"
                      />
                    </li>
                    <li>
                      <img src="src/Images/4 stars.png" alt="4 stars" /><img
                        src="src/Images/empty star.png"
                        alt="1 empty star"
                      />
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            <div>
              <div class="furniture">
                <img src="src/Images/image5.JPG" alt="Image 5" />
              </div>
              <div class="acart">
                <article>
                  <ul>
                    <li class="price">$890</li>
                    <li><strong>Momo</strong></li>
                    <li class="GRIS">SHELVES</li>
                    <li>
                      <img
                        src="src/Images/add shopping cart.png"
                        class="price"
                        alt="Shopping cart"
                      />
                    </li>
                    <li>
                      <img src="src/Images/4 stars.png" alt="4 stars" /><img
                        src="src/Images/empty star.png"
                        alt="1 empty star"
                      />
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            <div>
              <div class="furniture">
                <img src="src/Images/image6.JPG" alt="Image 6" />
              </div>
              <div class="acart">
                <article>
                  <ul>
                    <li class="price">$120</li>

                    <li><strong>Penemillè</strong></li>
                    <li class="GRIS">CHAIR</li>
                    <li>
                      <img
                        src="src/Images/add shopping cart.png"
                        class="price"
                        alt="Shopping cart"
                      />
                    </li>
                    <li>
                      <img src="src/Images/4 stars.png" alt="4 stars" /><img
                        src="src/Images/empty star.png"
                        alt="1 empty star"
                      />
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            <div>
              <div class="furniture">
                <img src="src/Images/image7.JPG" alt="Image 7" />
              </div>
              <div class="acart">
                <article>
                  <ul>
                    <li class="price">$420</li>
                    <li><strong>Kappu</strong></li>
                    <li class="GRIS">SHELVES</li>
                    <li>
                      <img
                        src="src/Images/add shopping cart.png"
                        class="price"
                        alt="Shopping cart"
                      />
                    </li>
                    <li>
                      <img src="src/Images/4 stars.png" alt="4 stars" /><img
                        src="src/Images/empty star.png"
                        alt="1 empty star"
                      />
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>
      </nav>
      <footer>
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
      </footer>
    </main>
  </body>
     
   </template>


<script>
function Login() {
    window.location.href = "/login";
}


    //     methods: {
    //     deleteRow(index) {
    //   // Vous pouvez utiliser l'index pour supprimer l'élément correspondant
    //   const itemId = this.getProducts.data['hydra:member'][index].id;
    //   // Appelez ici votre méthode ou action pour supprimer l'élément en utilisant itemId
    // },
    //     addRow() {
    //   // Ajoutez ici la logique pour ajouter une nouvelle ligne si nécessaire
    // }
    // }}


// const tableData = ref([
//   { id: 1, name: 'Item 1' },
//   { id: 2, name: 'Item 2' },
// ]);

// let nextID = 3;

// const addRow = () => {
//   tableData.value.push({
//     id: nextID,
//     name: `Item ${nextID}`,
//   });
//   nextID++;
// };

// const deleteRow = (index) => {
//   tableData.value.splice(index, 1);
// };

</script>



<style>
ul {
  list-style-type: none;
}

.main {
  font-family: "Roboto";
}

.menu {
  display: flex;
  color: #3b3c44;
}

a {
  text-decoration: none;
  color: black;
}

.accueil {
  display: block;
  transition: 0.5s;
}

.menu:hover .accueil {
  filter: blur(1px);
}

.menu .accueil:hover {
  filter: blur(0px);
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-field {
  width: 250%;
  padding: 0.5rem 0;
  position: relative;
  width: 250px;
  height: 44px;
  line-height: 15px;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 5px;
}

#name {
  width: auto;
  height: auto;
  border: 0;
  outline: 0;
  padding: 0.5rem 0;
  border-bottom: 2px solid black;
  box-shadow: none;
  color: #111;
  margin-right: 5px;
}

.logo {
  width: auto;
  height: 50px;
  float: left;

}

.li {
  font-family: 'Avenir', sans-serif;
}

.cart {
  width: auto;
  height: 15px;
  padding-right: 40%;
}

.login {
  display: flex;
  padding-right: 20%;
  justify-content: space-between;
  background-color: #fff;
}

.research {
  display: flex;
  align-items: center;
}

.rechercher {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 5%;
}

section.rechercher{
    padding-top: 50px;
}

img.loupe {
  width: 20px;
  height: 10px;
  margin-right: 5px;
}
.match {
  display: flex;
  padding-right: 18%;
  margin: 2%;
}

.best_match {
  display: flex;
  padding-right: 30%;
  margin: 2%;
}

.vente {
  margin: 50px 40px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 500px;
}

.filter {
  color: #aeaeb1;
}

.col {
  display: flex;
  padding-right: 30%;
  margin: 10%;
  font-family: "Roboto";
}

.best_match{
  font-family: "Roboto" , sans-serif;
}

.accueil{
  font-family: 'Avenir', sans-serif;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.furniture {
  display: flex;
  flex: 1;
  padding: 10px;
  flex-direction: column;
  align-items: left;
  text-align: center;
}

.furniture img {
  width: 250px;
  height: 250px;
}

.more {
  padding-left: 40%;
}

#price_cursor {
  width: 200px;
  height: 1px;
}

.menu-toggle {
  cursor: pointer;
  flex-direction: column;
  display: flex;
}

@media screen and (max-width: 768px) {
  .furniture {
    flex: 100%;
    margin-bottom: 100px;
    margin-left: 30px;
    margin-right: 30px;
  }
}

.price {
  display: flex;
  float: right;
  color: #515256;
}

.price-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px;
}

.GRIS {
  color: #98999b;
  font-size: x-small;
}

label {
  font-size: 25px;
  font-weight: 500;
}

p {
  font-size: 12px;
  font-weight: 600;
}

.range-slider {
  width: 190px;
  position: relative;
  margin: 15px 0 30px 0;
}

input[type="range"] {
  /* -webkit-appearance: none; */
  width: 100%;
  background: transparent;
  position: absolute;
  left: 0;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: white;
  outline: solid 1px black;
  cursor: pointer;
  margin-top: -4px;
  position: relative;
  z-index: 1;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 10%;
  height: 5px;
  background: #F2F2F2;
  border-radius: 3px;
  border: none;
}

@media screen and (max-width: 768px) {
  .pagination {
    width: auto; 
    font-size: 14px; 
    text-align: center; 
    margin: 10px 0; 
  }
}

.pagination {
  float: left;
  padding-top: 30px;
  text-align: center;
  font-family: "Roboto", sans-serif;
}

.pagination ul {
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

</style>
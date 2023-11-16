
<style>
body
{
    margin: 0;
    padding: 0;
    background-color:#ffff;
    font-family: 'Arial';
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.login{
        overflow: hidden;
        margin: auto;
        padding: 80px;
        background: #fff;
        border-radius: 15px ;
        border: #08ffd1 1;
        align-items: center;
        display: flex;
        justify-content: center;
        padding-left: 380px;
}


/* Search bar */
form{
display: flex;
flex-direction: column;
align-items: center;
width: fit-content;
justify-content: center;
}

label{
    color: #08ffd1;
    font-size: 17px;
}

#Uname{
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 3px;
    padding-left: 8px;
    background-color: #19198f;
}
   
#Pass{
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 3px;
    padding-left: 8px;
    background-color: #19198f;
}

#log{
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 17px;
    padding-left: 7px;
    color: blue;
}

span{
    color: white;
    font-size: 17px;
}

a{
    float: center;
}

#Passf {
    float: right;
    margin-right: 10px; 
    padding: 5px 10px;
    padding-top: -100px;
    background-color: #c70202;
}

#Dha {
    padding-top: 10px;

}

.premimg{
    display:flex;
    align-items: right;
    width:50px;
    margin-right:  60px;
}

.hautdepage{
   align-items: center;
   display: inline-flex;
}

.searchbar{
   width:300px;
}

img.loupe{
  float: left;
  width: 150px;
  margin-right: 20px;
  margin-left: 1000px;

}

.premierboutton{
    width:110px;
    border-color: aqua;
    background-color: rgb(164, 31, 31);
    height: 25px; 
}
</style> 



<template>
<head>
</head>
<body>
  <div>
    <div class="hautdepage">
      <img class="loupe" src="src/Images/MyShop.png" >
          <input class="searchbar" @keyup="searchItem" type="text" name="search" placeholder="Search" />
          <img class="premimg" src="src/Images/search1.png">
          <button class="premierboutton" v-on:click="LogIn"> Log In </button>
      </div>

      <div class="login">
        <form id="login" method="get" action="login.php">
            <label><b>Name
            </b>
            </label>
            <input type="text" name="Uname" id="Uname" placeholder="Name">
            <br><br>
            <label><b>Password
            </b>
            </label>
            <input type="Password" name="Pass" id="Pass" placeholder="Password">
            <br><br>
            <input type="button" name="log" id="log" value="Log In">
            <br><br>
            <a href="#" id="Passf">Password forgetten?</a>
            <a href="#" id="Dha">Don't have an account? REGISTER</a>
        </form>
    </div>
  </div>
</body>
</template>



<script>
</script>



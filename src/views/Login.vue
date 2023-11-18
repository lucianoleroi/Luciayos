
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
.premimg{
    display:flex;
    align-items: center;
    width:120px;
    margin-right:  60px;
    margin-left: 130px;
}
.searchbar{
    width:1300px;
    height: 50px;
 }
 
 img.loupe{
 width:150px;
 height: 50px;
 margin-right: 130px;
 }
 
 

 .premierboutton{
    width:110px;
    border-color: aqua;
    background-color: white;
    height: 25px;
   
}
body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
}
 
.hautdepage {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #f0f0f0; 
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.input-box{
    width:300px;
    align-items: flex-start;
    margin-bottom: 50px;
}

h4{
    padding-left: 10px;
}


input{
width: 290px;
}

div.toutenfait {
    width: 30px;
    margin-top: 100px;
    padding: 10px;
    text-align: center;
}

.wrapper {
    text-align: center;
}
h4{
    text-align: left;
   color :grey
}
 
.input{
    width:100 px;
}
 
.remerberandacount {
    text-align: center;
    margin-top: 15px;
}
 
.remerber-forgot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
 
.register-link {
    margin-top: 10px;
}
 
.buttonenbas {
    width: 100%;
    height: 40px;
    background-color: rgb(15, 156, 232);
   
   
}
.buttonenbas{
    color:white;
}

.form{
    float: center;
    padding-left: 682px;
}
</style> 



<template>
<head>
</head>
<body>
    <div>
    <div class="hautdepage">
        <img class="premimg" src="src/Images/MyShop.png">
        <input class="searchbar" @keyup="searchItem" type="text" name="search" placeholder="Search" />
        <img class="loupe" src="src/Images/search1.png">
    </div>

<div class="form">
    <div class="toutenfait">
        <div class="wrapper">
            <h1>Log In</h1>
            <form action="">
                <h4>Name </h4>
                <div class="input-box">
                    <input type="text" v-model="name" placeholder="Name" required/>
                    <i class="bx bxs-lock-alt"></i>
                </div>
                <h4>Password</h4>
                <div class="input-box">
                    <input type="password" v-model="Password" placeholder="Password" required/>
                </div>
            </form>
        </div>
       
   
 
            <div class="register-link">
                <p>Don't have an account? <a href="/register" >Register here!</a></p>
            </div>
            <button  class="buttonenbas" type="submit" v-on:click="signUp">Sign In</button>
        </div>
    </div>
</div>
</body>
</template>



<script>
function Register() {
    window.location.href ="/register";
}
// var Register = document.getElementById('Register');

// Register.addEventListener('click', function(){
//     window.location.href = '/register';
// });
</script>



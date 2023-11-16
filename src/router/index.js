import { createRouter, createWebHistory } from 'vue-router'

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Users from "../views/Users.vue";
import Categories from "../views/Categories.vue";
import Products from "../views/Products.vue";
import Admin from "../views/Admin.vue";
// Router COnfiguation
// import Admin from '@/layouts/Admin.vue';
// import Products from '@/views/Products.vue';
// import Categories from '@/views/Categories.vue';
// import Users from '@/views/Users.vue';




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      name: "register",
      component: Register
    },

    {
      path: "/",
      name: "login",
      component: Login
    },

    {
      path: "/categories",
      name: "categories",
      component: Categories
    },

    {
      path: "/products",
      name: "products",
      component: Products
    },

    {
      path: "/users",
      name: "users",
      component: Users
    }, 

    {
      path: "/admin",
      name: "admin",
      component: Admin
    },

  ]
});

export default router

// // Router COnfiguation
// const routes = [
//   {
//     path: '/admin',
//     component: AdminLayout,
//     children: [
//       { path: 'products', component: Products },
//       { path: 'categories', component: Categories },
//       { path: 'users', component: Users },
//     ]
//   },
// ];
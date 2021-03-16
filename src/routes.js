
import Userlist from './components/UserList.vue';
import Login from './components/Login.vue';
import Profile from './components/Profile.vue';
 export default [

    {
        path:'/users',
        name:'users',
    meta: {
        requiresAuth: true
    }
    ,component:Userlist
    },
    {path:'/',
    name:'Login',
    meta: {
        guest: true
    },
    component:Login
    },
    {path:'/userprofile/:id',
    meta: {
        requiresAuth: true
    },
    component:Profile
    },
    
]


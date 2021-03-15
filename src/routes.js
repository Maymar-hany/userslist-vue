
import Userlist from './components/UserList.vue';
import Login from './components/Login.vue';
import Profile from './components/Profile.vue';
 export default [

    {path:'/users',component:Userlist},
    {path:'/',component:Login},
    {path:'/userprofile/:id',component:Profile},
    
]
<template>
  <div id="app">
    
    
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Login'
import Userlist from './components/UserList'
import Profile from './components/Profile.vue';

export default {
  name: 'App',
  components: {
    Login,
    Userlist,
    Profile
  },
  data(){
    return{
    
        
        }
  },
  props:{
    
  }
}
</script>

<style>

</style>

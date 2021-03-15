<template>
  <div id="list" >
          <section class="hero is-primary is-align-items-center">
            <div class="hero-body">
              <p class="title">
                Users
              </p>
            
            </div>
          </section>
            <section class="section">
                <div class="column is-half
is-offset-one-fifth">
                  <table class="table is-bordered is-striped is-narrow is-fullwidth">
                    <thead>
                      <tr>
                        <th >Id</th>
                        <th>Users</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr :key="user.id" v-for="user in users">
                        <td >{{user.id}}</td>
      
                        <td>{{user.first_name}} {{user.last_name}}
                          <button class="button is-primary" 
                          >
                          <router-link :to="'/userprofile/'+ user.id"> View profile</router-link></button>
                      
                        </td>   
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
           
        </div>
</template>

<script>

import '../../node_modules/bulma/css/bulma.css';
import Profile from './Profile.vue';
export default {
  name: 'Userlist',
  components: {
    Profile
    
  },
  data(){
     return{
       users:[],
       
     }
  },
  methods:{
   
  },
  created(){
    
     this.$http.get('https://reqres.in/api/users?page=1').then(function(data){
            this.users = data.body.data;
           

        });
  }
}
</script>

<style scoped>
button{
  float: right;
}
 a {
  
     color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
</style>
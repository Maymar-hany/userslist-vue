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
                  <nav class="pagination" role="navigation" aria-label="pagination">
  <a class="pagination-previous" title="This is the first page" @click="getPreviousData" :disabled="!lastPage">Previous</a>
  <a class="pagination-next" @click="updatePage" :disabled="lastPage">Next page</a>
  <ul class="pagination-list">
    <li>
      <a v-bind:class="['pagination-link', { 'is-current' : firstPage }]" @click="getPreviousData" aria-label="Page 1" aria-current="page">1</a>
    </li>
    <li>
      <a v-bind:class="['pagination-link', { 'is-current' : !firstPage }]" @click="updatePage"  aria-label="Goto page 2">2</a>
    </li>
    
  </ul>
</nav>
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
  props:{
   
  },
  data(){
     return{
       users:[],
       currentPage:1,
       TotalPages:2,
       lastPage:false,
       first:1,
       firstPage:true
     }
  },
  methods:{
   updatePage(){
     
     if(this.lastPage==false){
     this.currentPage+=1;
     this.$http.get('https://reqres.in/api/users?page='+this.currentPage).then(function(data){
            this.users = data.body.data;});
      if(this.currentPage==this.TotalPages){
      this.lastPage=true;
      
     }
      this.firstPage=false;
    }
   },
  
  getPreviousData(){
   
           if(this.lastPage==true) {
     this.currentPage-=1;
       this.$http.get('https://reqres.in/api/users?page='+this.currentPage).then(function(data){
            this.users = data.body.data;});
     this.lastPage=false;
     this.firstPage=true}
    
      
     
   }
  

        
  
  },
  created(){
    this.updatePage();
    this.getPreviousData();
    
  },
  
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
li{
  color: aquamarine;
}
.pagination-link.is-current,.pagination-next,.pagination-previous{
  background:#00D1B2 !important
}
a.pagination-link{
  color: black;
}
a.pagination-link.is-current{
  color: #fff;
}
</style>
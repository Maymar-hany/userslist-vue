<template>
<div id="login" class="column is-half
is-offset-one-quarter">
            <section class="section">
                
                    <form class="box" @submit.prevent="login">
                        <div class="field">
                          <label class="label">Email</label>
                          <div class="control">
                            <input class="input" v-model="Email" type="email" placeholder="Email">
                          </div>
                        </div>
                      
                        <div class="field">
                          <label class="label">Password</label>
                          <div class="control">
                            <input class="input" v-model="Password" type="password" placeholder="Password">
                          </div>
                        </div>
                      <p id="msg" class ="has-text-danger"></p>
                        <button class="button is-primary ">Sign In</button>
                      </form>
                
              </section>
           
        </div>
</template>

<script>
import '../../node_modules/bulma/css/bulma.css';
import Userlist from './UserList.vue'
export default {
  name: 'Login',
  components: {
    Userlist
  },
 
  methods:{
    login(){
               if(this.Email != "" && this.Password != "") {
                /*if(this.Email == this.admin.email && this.Password == this.admin.password) {
                    
                    console.log('true')
                   // this.$router.push('users'),
                    //this.$parent.logged=false
                    
                    
                } */ this.$http.post('https://reqres.in/api/login', {
             email: this.Email,
             password: this.Password
  }).then(function (response) {

     localStorage.setItem('token', response.body.token);
   
                 if (localStorage.getItem('token') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                                console.log("hello")
                            }
                            else {
                                    this.$router.push({name:'users'});
                                    console.log("hi")
                                }
                            }
                        
  })
  .catch(function (error) {
    console.log(error)
    document.getElementById("msg").innerHTML="A email or password is incorrect"; 
  })
  }
              else {
               
                document.getElementById("msg").innerHTML="A email and password must be present"; 
            } 
      }

  },
  computed:{
        
  },
  data(){
      return{
          admin:[],
          Email:'',
          Password:'',
         token:localStorage.getItem('token'), 
      }
  },
  created(){

}}
</script>

<style scoped>

</style>
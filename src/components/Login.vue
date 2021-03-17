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


export default {
  name: 'Login',
  components: {
    
  },
 
  methods:{
    login(){
               if(this.Email != "" && this.Password != "") {
                 this.$http.post('https://reqres.in/api/login', {
             email: this.Email,
             password: this.Password
  }).then(function (response) {

     localStorage.setItem('token', response.body.token);
    
                 if (localStorage.getItem('token') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                                
                            }
                            else {
                                    this.$router.push({name:'users'});
                                    
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
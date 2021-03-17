<template>

      <div id="profile" class="column is-one-third
is-offset-one-quarter">
           
            <div class="section">
                <div class="container">
                 <div class="card">
                
               <!--  <div class="card-image">
                  <figure class="image is-3by1">
                    <img :src="user.img" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                <div class="columns">
                <div class="column">
                -->   <div class="column is-offset-one-quarter
">
                    <div class="card-image">
                     
                  <figure class="image is-128x128">
                    <img class="is-rounded" :src="user.avatar" alt="User image">
                  </figure>
                        
                </div>
                    <div>
                      <p class="title is-4">{{user.first_name}} {{user.last_name}} </p>
                    </div>
                   <!--    <p class="subtitle is-6">@{{user.username}}</p> -->
                     <div>
                      <span class="icon-text">
                        <span class="icon">
                           <font-awesome-icon :icon="email" size="1x" />
                        </span>
                        <span>{{user.email}}</span>
                      </span>
                    </div>
                  </div>
              <!-- 
                  
                      <div class="">
                    <span class="icon-text">
                        <span class="icon">
                           <font-awesome-icon :icon="addressIcon" size="1x" />
                        </span>
                        <span>{{user.address.street}},{{user.address.city}}</span>
                      </span>
                    </div>
                    <div>
                      <span class="icon-text">
                        <span class="icon">
                          <font-awesome-icon :icon="phoneIcone" size="1x" />
                        </span>
                        <span>{{user.phone}}</span>
                      </span>
                    </div>
                    <div>
                      <span class="icon-text">
                        <span class="icon">
                           <font-awesome-icon :icon="email" size="1x" />
                        </span>
                        <span>{{user.email}}</span>
                      </span>
                    </div>
                    <div>
                        <span class="icon-text">
                          <span class="icon">
                             <font-awesome-icon :icon="web" size="1x" />
                          </span>
                          <span>{{user.website}}</span>
                        </span>
                      </div> -->
                
                
            
                   <!--  <div class="column">
                        <div class="content">
                        <h1 class="title is-4"> Company Info</h1>
                        <P><strong>Company Name:</strong>{{user.company.name}}</P>
                        <P><strong>Catch Phrase:</strong>{{user.company.catchPhrase}}</P>
                        <P><strong>Bs:</strong>{{user.company.bs}}</P>

                    </div> -->
                    </div>
                </div>
                    
                  </div>
                </div>
                
        
       
            
        
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
export default {
    name: 'Profile',
    data () {
        return {
            
            phoneIcone:faPhone,
            addressIcon:faHome,
            email:faEnvelope,
            web:faGlobe,
            id:this.$route.params.id ,
            user: {},
            

        }
    },
    created() {
          
        this.$http.get('https://reqres.in/api/users/' + this.id).then(function(data){
            
            this.user = data.body.data;
            
        });
    },
    
    
    components:{
    FontAwesomeIcon
    }
 
    
}
</script>

<style>


</style>
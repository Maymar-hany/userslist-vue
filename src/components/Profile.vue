<template>

      <div id="profile" class="column is-one-third
is-offset-one-quarter">

            <div class="section">
                <div class="container">
                 <div class="card">

                  <div class="column is-offset-one-quarter">
                    <div class="card-image">

                  <figure class="image is-128x128">
                    <img class="is-rounded" :src="user.avatar" alt="User image">
                  </figure>

                </div>
                    <div>
                      <p class="title is-4">{{user.first_name}} {{user.last_name}} </p>
                    </div>

                     <div>
                      <span class="icon-text">
                        <span class="icon">
                           <font-awesome-icon :icon="email" size="1x" />
                        </span>
                        <span>{{user.email}}</span>
                      </span>
                    </div>
                  </div>

                    </div>
                </div>

                  </div>
                </div>

</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone, faHome, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Profile',
  data () {
    return {

      phoneIcone: faPhone,
      addressIcon: faHome,
      email: faEnvelope,
      web: faGlobe,
      Id: this.$route.params.id

    }
  },
  props: {

  },
  created () {

  },

  components: {
    FontAwesomeIcon
  },
  methods: {

  },
  computed: {
    user () {
      return this.$store.getters.userData
    }
  }

}
</script>

<style>

</style>

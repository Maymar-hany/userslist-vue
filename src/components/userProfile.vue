 <template>

      <div id="profile" class="column is-one-third
is-offset-one-quarter">
<button class="button is-primary" @click="isActive"> View Profile </button>
  <div id="ID" :class="['modal', { 'is-active' : clicked }]">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title"> {{users.first_name}} profile </p>
      <button id="close" class="delete" aria-label="close"  @click="isClosed">  </button>
    </header>
    <section class="modal-card-body">

                  <figure class="image is-128x128">
                    <img class="is-rounded" :src="users.avatar" alt="User image">
                  </figure>

                    <div>
                      <p class="title is-4">{{users.first_name}} {{users.last_name}} </p>
                    </div>

                     <div>
                      <span class="icon-text">
                        <span class="icon">
                           <font-awesome-icon :icon="email" size="1x" />
                        </span>
                        <span>{{users.email}}</span>
                      </span>
                    </div>

    </section>
     </div>
</div>
      </div>

</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone, faHome, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
export default {
  name: 'UserProfile',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      phoneIcone: faPhone,
      addressIcon: faHome,
      email: faEnvelope,
      web: faGlobe,
      clicked: false

    }
  },
  props: {
    id: Number
  },
  methods: {
    isActive () {
      this.clicked = true
    },
    isClosed () {
      this.clicked = false
    }
  },
  computed: {
    users () {
      return this.$store.getters.getUserById(this.id)
    }
  }
}
</script>

<style scoped>
button{
  float: right;
  margin: 5px;

}

</style>

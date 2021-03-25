<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data () {
    return {

    }
  },
  props: {

  },
  created () {
    this.$store.dispatch('loadUsers', this.$store.getters.getPage)
  },
  computed: {
    page () {
      return this.$store.getters.getPage
    }
  }
}
</script>

<style>

</style>

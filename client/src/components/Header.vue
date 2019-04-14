<template>

  <v-toolbar dark black >

    <v-toolbar-title flat class="home"><router-link tag="span" :to="{name: 'home'}">Logo</router-link></v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items >
      <v-btn v-if="$store.state.isLoggedin" flat dark @click="logout">
        <v-icon>fas fa-sign-out-alt</v-icon>Logout
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>

</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setUser',null)
      this.$store.dispatch('loggedIn',false)
      this.$store.dispatch('isUser',false)
      this.$store.dispatch('isEngg',false)
      this.$store.dispatch('isAdmin',false)
      this.$router.push({
        name: 'home'
      })
    }
  }
} 
</script>

<style scoped>
  .home{
    cursor: pointer;
    color: #fff;
  }
</style>
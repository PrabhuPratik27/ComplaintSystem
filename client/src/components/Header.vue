<template>

  <v-toolbar dark black >

    <v-toolbar-title flat class="home"><router-link tag="span" :to="{name: 'home'}">Logo</router-link></v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items >
      <v-btn v-if="$store.state.isLoggedin" flat dark @click="logout">
        Logout
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>

</template>

<script>
export default {} 
</script>

<style scoped>
  .home{
    cursor: pointer;
    color: #fff;
  }
</style>
<template>

  <v-toolbar dark black >

    <v-toolbar-title flat class="home"><router-link tag="span" :to="{name: 'home'}">Logo</router-link></v-toolbar-title>

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
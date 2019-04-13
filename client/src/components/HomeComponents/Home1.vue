<template>
  <div>
    <section>
      <v-parallax :src="require('@/assets/hero.jpeg')" height="600">

        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
        
          <h1 class="white--text mb-2 display-1 text-xs-center">User Login </h1>
          <div class="subheading mb-3 text-xs-center">Login Here to register Complaints</div>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
          >
            Login
          </v-btn>

        </v-layout>
      </v-parallax>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>
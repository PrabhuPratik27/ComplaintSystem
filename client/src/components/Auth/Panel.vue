<template>
  <div>
    <v-layout class="mt-3" justify-center align-center>
      <v-flex xs8>
        <div class="white elevation-2">
          <v-toolbar black dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
          </v-toolbar>

          <div class="pl-4 pr-4 pb-2 pt-2">
            <slot></slot>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ["title"]
}
</script>

<style lang="scss" scoped>
</style>
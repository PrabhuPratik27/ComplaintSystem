<template>
  <div>
    <panel title="Add Complaint">
      <v-layout justify-center>
        <v-flex xs-8>
          <v-form ref="register" autocomplete="off" v-model="valid" lazy-validation>
            <v-text-field label="Name" v-model="name" class="mt-2 mb-2"/>
            <v-text-field label="Department" v-model="department" class="mt-2 mb-2"/>
            <v-text-field label="Description" v-model="description" class="mt-2 mb-2"/>
            <button type="button" class='v-btn' dark color="success" @click="validate1" :disabled="!valid" :class="{disabledButton: !valid, 'theme--dark': valid, success: valid}"><div class="v-btn__content">Add Complaint</div></button>            
            </v-form>
        </v-flex>
      </v-layout>
    </panel>
  </div>
</template>

<script>
import Panel from './Auth/Panel'
import ComplaintService from '@/services/ComplaintService'
export default {
  mounted () {
    if (!this.$store.state.isuser) {
      this.$router.push({
        name: 'home'
      })
    }
  },
  components: {
    Panel
  },
  data () {
    return {
      name: '',
      department: '',
      description: '',
      valid: false
    }
  },
  methods: {
    async add () {
      try {
        const response = await ComplaintService.addcomplaint({
          name: this.name,
          department: this.department,
          description: this.description,
          user: this.$store.state.user.username
        })
        console.log(response.data)
      } catch(e) {
        console.log(e)
      }
    },
    validate1 () {
      if (this.$refs.register.validate()) {
        this.snackbar = true
      }
      this.add()
    }
  }
}
</script>

<style scoped>
  .disabledButton {
    background-color: #d8d8d8;
  }
</style>
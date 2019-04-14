<template>
  <div>
    <panel title="Login">
      <v-layout justify-center>
        <v-flex xs-8>
          <v-form ref="register" autocomplete="off" v-model="valid" lazy-validation>
            <v-text-field label="Username" v-model="username" class="mt-2 mb-2" :rules="nameRules"/>
            <v-text-field type="password" label="Password" v-model="password" class="mt-2 mb-2" :rules="passwordRules"/>
            <button type="button" class='v-btn' dark color="success" @click="validate1" :disabled="!valid" :class="{disabledButton: !valid, 'theme--dark': valid, success: valid}"><div class="v-btn__content">Login</div></button>            
            <p class="mt-3 mb-3">Don't have an account? Register now!</p>
            <button type="button" class='v-btn' dark color="success" @click="validate2" :disabled="!valid" :class="{disabledButton: !valid, 'theme--dark': valid, success: valid}"><div class="v-btn__content">Register</div></button>                        
          </v-form>
        </v-flex>
      </v-layout>
    </panel>
  </div>
</template>

<script>
import Panel from './Panel'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      username: '',
      password: '',
      valid: false,
       nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(v) || 'Passwords should contain atleast one number and one special character one uppercase character one lowercase character and must be between 6 to 16 characters long'
      ]
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.Engglogin({
          username: this.username,
          password: this.password
        })
        this.$store.dispatch('setUser',response.data.user)
        this.$store.dispatch('loggedIn',true)
        this.$store.dispatch('isEngg',true)
        this.$router.push({
          name: 'CompList'
        })
      } catch(e) {
        console.log(e)
      }
    },
    async register () {
      try {
        const response = await AuthenticationService.Enggregister({
          username: this.username,
          password: this.password
        })
        console.log(response.data)
        this.$store.dispatch('setUser',response.data.user)
        this.$store.dispatch('loggedIn',true)
        this.$store.dispatch('isEngg',true)
        this.$router.push({
          name: 'CompList'
        })
      } catch(e) {
        console.log(e)
      }
    },
    validate1 () {
      if (this.$refs.register.validate()) {
        this.snackbar = true
      }
      this.login()
    },
    validate2 () {
      if (this.$refs.register.validate()) {
        this.snackbar = true
      }
      this.register()
    }
  }
}
</script>

<style scoped>
  .disabledButton {
    background-color: #d8d8d8;
  }
</style>
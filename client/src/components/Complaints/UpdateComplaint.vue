<template>
  <div v-if="isdataReady">
     <panel title="Complaint Info">
      <p>Name: {{ complaint.name }}</p>
      <p>Department: {{ complaint.department }}</p>
      <p>Description: {{ complaint.description }}</p>
      <p>User: {{ complaint.user }}</p>
    </panel>
    <panel title="Update Status">
      <v-form ref="login" autocomplete="off">
        <v-text-field label="Status" v-model="status" class="mt-2 mb-2"/>
        <v-btn @click="updateStatus">Upate</v-btn>
      </v-form>
    </panel>
    <panel title="Update Solution">
      <v-form ref="login" autocomplete="off">
        <v-text-field label="Solution" v-model="solution" class="mt-2 mb-2"/>
        <v-btn @click="updateSolution">Update</v-btn>
      </v-form>
    </panel>
  </div>
</template>

<script>
import ComplaintService from '@/services/ComplaintService'
import Panel from '../Auth/Panel'
export default {
  async mounted () {
    if(!this.$store.state.engg) {
      this.$router.push({
        name: 'home'
      })
    } else {
      const name = this.$route.params.name
    
      const response1 = await ComplaintService.getComplaintByName({
        name: name,
      })

      this.complaint= response1.data.complaint

      this.isdataReady = true
    }
  },
  data () {
    return {
      isdataReady: false,
      status: '',
      solution: ''
    }
  },
  components: {
    Panel
  },
  methods: {
    async updateStatus () {
      const response = await ComplaintService.updateStatus({
        name: this.$route.params.name,
        status: this.status
      })

      console.log(response.data)
    },
    async updateSolution () {
      const response = await ComplaintService.updateSolution({
        name: this.$route.params.name,
        solution: this.solution
      })

      console.log(response.data)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
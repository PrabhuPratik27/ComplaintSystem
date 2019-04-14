<template>
  <div v-if="isdataReady">
    <panel title="Complaint Info">
      <p>Name: {{ complaint.name }}</p>
      <p>Department: {{ complaint.department }}</p>
      <p>Description: {{ complaint.description }}</p>
      <p>User: {{ complaint.user }}</p>
    </panel>
  </div>
</template>

<script>
import Panel from '../Auth/Panel'
import ComplaintService from '@/services/ComplaintService'
export default {
  async mounted () {
    const name = this.$route.params.name
   
    const response = await ComplaintService.getComplaintByName({
      name: name,
    })

    this.complaint= response.data.complaint

    this.isdataReady = true
  },
  components: {
    Panel
  },
  data () {
    return {
      isdataReady: false,
      complaint:null
    }
  }
}
</script>

<style scoped>
</style>
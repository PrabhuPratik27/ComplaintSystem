<template>
  <div v-if="isdataReady">
    <panel title="Complaint Info">
      <p>Name: {{ complaint.name }}</p>
      <p>Department: {{ complaint.department }}</p>
      <p>Description: {{ complaint.description }}</p>
      <p>User: {{ complaint.user }}</p>
    </panel>
    <panel title="Enginners">
      <v-data-table :headers="headers" :items="engg" class="elevation-1 mt-2 mb-2">
        <template v-slot:items="props">
          <td>{{ props.item.username }}</td>
          <td><v-btn @click="assign(props.item.username)"><v-icon>fas fa-edit</v-icon></v-btn></td>
        </template>
      </v-data-table>
    </panel>
  </div>
</template>

<script>
import Panel from '../Auth/Panel'
import ComplaintService from '@/services/ComplaintService'
import EnggService from '@/services/EnggService'
export default {
  async mounted () {
    const name = this.$route.params.name
   
    const response1 = await ComplaintService.getComplaintByName({
      name: name,
    })

    this.complaint= response1.data.complaint

    const response2 = await EnggService.getEngg()

    this.engg = response2.data

    this.isdataReady = true
  },
  components: {
    Panel
  },
  data () {
    return {
      isdataReady: false,
      complaint:null,
      engg: null,
      headers: [
        {
          text: 'Name',
          align: 'left',
          value: 'username'
        },
        {
          text: 'Assign',
          align: 'left'
        }
      ]
    }
  },
  methods: {
    async assign (data) {
      const name1 = this.$route.params.name

      const response = await ComplaintService.updateEngg({
        name: name1,
        engg: data
      })

      console.log(response.data)
    }
  }
}
</script>

<style scoped>
</style>
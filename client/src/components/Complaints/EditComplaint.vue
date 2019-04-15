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
          <td><v-btn @click="assign(props.item.username)" @click.stop="dialog = true"><v-icon>fas fa-edit</v-icon></v-btn></td>
        </template>
      </v-data-table>
    </panel>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline" style="color: green">Success</v-card-title>

        <v-card-text>
          The enginner has been assigned to the problem!!!
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Good
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Panel from '../Auth/Panel'
import ComplaintService from '@/services/ComplaintService'
import EnggService from '@/services/EnggService'
export default {
  async mounted () {
    if(!this.$store.state.admin) {
      this.$router.push({
        name: 'home'
      })
    } else { 
      const name = this.$route.params.name
    
      const response1 = await ComplaintService.getComplaintByName({
        name: name,
      })

      this.complaint= response1.data.complaint

      const response2 = await EnggService.getEngg()

      this.engg = response2.data

      this.isdataReady = true
    }
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
      ],
      dialog: false
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
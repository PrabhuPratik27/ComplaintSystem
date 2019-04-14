<template>
  <div v-if="dataReady">
    <panel title="Complaints" >
      <v-data-table :headers="headers" :items="complaints" class="elevation-1 mt-2 mb-2">
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.description }}</td>
          <td class="text-xs-right">{{ props.item.description }}</td>
          <td class="text-xs-right">{{ props.item.user }}</td>
          <td><v-btn :to="{name: 'EditComplaint', params: {name: props.item.name}}" :disabled="props.item.assignedengg"><v-icon>fas fa-edit</v-icon></v-btn></td>
        </template>
      </v-data-table>
    </panel>
  </div>
</template>

<script>
import ComplaintService from '@/services/ComplaintService'
import Panel from '../Auth/Panel'
export default {
  async mounted () {
    if(!this.$store.state.admin) {
      this.$router.push({
        name: 'home'
      })
    } else {
      const response = await ComplaintService.getComplaints()
      this.complaints = response.data
      console.log(this.complaints)
      this.dataReady = true
    }
  },
  components: {
    Panel
  },
  data () {
    return {
      complaints: {},
      headers: [
        {
          text: 'Name',
          algin: 'left',
          value: 'name'
        },
        {
          text: 'Department',
          align: 'left',
          value: 'department',
        },
        {
          text: 'Description',
          align: 'left',
          value: 'description'
        },
        {
          text: 'User',
          align: 'left',
          value: 'user'
        },
        {
          text: 'Edit',
          align: 'left',
        }
      ],
      dataReady: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
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
        <v-btn @click="updateStatus" @click.stop="dialog1 = true">Update</v-btn>
      </v-form>
    </panel>
    <panel title="Update Solution">
      <v-form ref="login" autocomplete="off">
        <v-text-field label="Solution" v-model="solution" class="mt-2 mb-2"/>
        <v-btn @click="updateSolution" @click.stop="dialog2 = true">Update</v-btn>
      </v-form>
    </panel>

    <v-dialog
      v-model="dialog1"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline" style="color: green">Success</v-card-title>

        <v-card-text>
          The status of the problem has been updated!!!
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog1 = false"
          >
            Good
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialog2"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline" style="color: green">Success</v-card-title>

        <v-card-text>
          The solution to the problem has been updated!!!
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog2 = false"
          >
            Good
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      solution: '',
      dialog1: false,
      dialog2: false
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
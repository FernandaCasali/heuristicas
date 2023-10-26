<script setup>

</script>

<template >
  

  <v-card flat class="border mx-auto mb-10  mt-10" :class="`elevation-${14}`"
  max-width="600" >
    <v-card-title>HEURÍSTICAS</v-card-title>

    <v-table>

      <thead>
        <tr>
          <th >peso</th>
          <th>heuristicas</th>
          <th>respostas</th>
        </tr>
      </thead>

      <tbody>
       
      </tbody>

    </v-table>

  </v-card>  

</template>

<script>
    export default {
    data () {
      return {
        pergunta: [
          {
            peso: '0',
            heuristicas: 'h1',
          },
          {
            peso: '0',
            heuristicas: 'h2',
          },
          {
            peso: '',
            heuristicas: 'h3',
          },
          {
            peso: '',
            heuristicas: 'h4',
          },
          {
            peso: '',
            heuristicas: 'h5',
          },
        ],
      }
    },
  }
  
</script>

<style scoped>
</style>

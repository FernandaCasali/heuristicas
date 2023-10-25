<script setup>

</script>

<template >
   <!-- <v-card class="mt-20">
    <v-table
    fixed-header
    height="300px"
  >
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
  </v-card>  -->

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
        <!-- <tr 
        v-for="item in pergunta"
        :peso="item.peso"
        :heuristicas="item.heuristicas"
        > 
          <td>{{ item.peso }}</td>
          <td>{{ item.heuristicas }}</td> -->

        <!-- </tr> -->
        <!-- <tr> -->
          <!-- <td>{{pergunta.peso}}</td>
          <td>{{pergunta.heuristicas}}</td>
          <td>
            <v-btn variant="tonal" color="primary">
              resp
            </v-btn>
          </td>
        </tr>
        <tr>
          <td>Teste</td>
          <td>2</td>
          <td>
            <v-btn variant="tonal" color="primary">
              resp
            </v-btn>
          </td>
        </tr>
        
        <tr>
          <td>Teste</td>
          <td>3</td>
          <td>
            <v-btn variant="tonal" color="primary">
              resp
            </v-btn>
          </td>
        </tr>
        <tr>
          <td>Teste</td>
          <td>4</td>
          <td>
            <v-btn variant="tonal" color="primary">
              resp
            </v-btn>
          </td>
        </tr>
        <tr>
          <td>Teste</td>
          <td>5</td>
          <td>
            <v-btn variant="tonal" color="primary">
              resp
            </v-btn>
          </td>
        </tr> -->
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

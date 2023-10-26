<script setup>
import { onUpdated, ref } from 'vue';
</script>


<template>

  <v-card
    class=" mx-auto bg-secondary rounded-lg mt-10 "
    :class="`elevation-${14}`"
    max-width="600" 
  >
    <v-toolbar color="orange-lighten-3">

      <v-toolbar-title>HEURÍSTICAS</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>


    <v-list lines="two">

      <v-list-item
        v-for="folder in folders"
        :key="folder.title"
        :title="folder.title"
        
      >
        <template v-slot:prepend>
          <v-avatar color="purple-lighten-4">
            <span class="text-h5">{{ folder.value }}</span>
          </v-avatar>
        </template>


        <template v-slot:append>
          <v-btn  variant="text">
            <v-dialog >

              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" text="Resposta" color="blue-lighten-3"
                variant="outlined"> </v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card :title="folder.title">
                  <v-card-text>
                    <v-text-field 
                    label="answer"  
                    type="number" 
                    v-model="folder.value" variant="outlined" 
                    :rules="numRules"
                    > 
                    </v-text-field>
                  </v-card-text>
                  


                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      variant="tonal"
                      color="green"
                      type="submit"
                      @click="isActive.value = false"
                    >Save</v-btn>
                    
                    <v-btn
                    variant="tonal"
                      text="Close"
                      @click="isActive.value = false"
                    ></v-btn>
                    
                  </v-card-actions>
                </v-card>
              </template>

            </v-dialog>

          </v-btn>

        </template>

      </v-list-item>
    </v-list>

  </v-card>



</template>


<script>
  export default {
  
    data: () => ({
      folders: [
        {
          subtitle: 'Heurística 1',
          title: 'Heurística 1',
          value: 0,
        },
        {
          subtitle: 'Heurística 2',
          title: 'Heurística 2',
          value: 0,
        },
        {
          subtitle: 'Heurística 3',
          title: 'Heurística 3',
          value: 0,
        },
        {
          subtitle: 'Heurística 4',
          title: 'Heurística 4',
          value: 0,
        },
        {
          subtitle: 'Heurística 5',
          title: 'Heurística 5',
          value: 0,
        }
      ],
      numRules: [
        value => {
          if(value>=1 && value<=10) return true

          return 'Numer must be between 1 and 10'
        },
      ],
    }),

    methods: {
      submit(){
        onUpdated.this.value= this.answer
      }
    },

  }
</script>



<style>
  
</style>




  


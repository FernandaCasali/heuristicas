<template>

    <!-- <v-timeline direction="horizontal" line-inset="12">
      <v-timeline-item>
        <template v-slot:opposite>
          Opposite
        </template>
        Content
      </v-timeline-item>
  
      <v-timeline-item>
        <template v-slot:opposite>
          Opposite
        </template>
        Content
      </v-timeline-item>
  
      <v-timeline-item>
        <template v-slot:opposite>
          Opposite
        </template>
        Opposite
      </v-timeline-item>
    </v-timeline> -->


    <v-timeline direction="horizontal" >
      <v-timeline-item v-for="(pesos, i) in pesos"
      :key="i"
      :icon="pesos.num"
      :dot-color="pesos.color"
      fill-dot
      >
      <!-- <template v-slot:prepend>
        <v-avatar >
          <span class="text-h5">{{ pesos.num }}</span>
        </v-avatar>
      </template> -->
      </v-timeline-item>
    </v-timeline>

</template>   

<script>
  export default {
    data: () => ({
      pesos: [
        { 
          icon: 1,
          text: 'Equal Importance',
          color: 'light-green-lighten-1'
        },
        { 
          icon: 2,
          text: 'Moderate Importance',
          color: 'light-green-darken-2'
        },
        { 
          icon: 3,
          text: 'Strong Importance',
          color: 'yellow-lighten-1'
        },
        { 
          icon: 4,
          text: 'Very Strong Importance',
          color: 'red-darken-1'
        },
        { 
          icon: 5,
          text: 'Extreme Importance',
          color: 'red-darken-4'
        },
        { 
          icon: 6,
          text: 'Moderately Less Important',
          color: 'red-darken-1'
        },
        { 
          icon: 7,
          text: 'Strongly Less Important',
          color: 'yellow-lighten-1'
        },
        { 
          icon: 8,
          text: 'Very Strongly Less Important',
          color: 'light-green-darken-2'
        },
        { 
          icon: 9,
          text: 'Extremely Less Important',
          color: 'light-green-lighten-1'
        }
      ]
    }) 
  }
</script>

<style>
</style>
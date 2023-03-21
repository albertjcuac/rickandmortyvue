<template>
  {{ filter }}<input class="checkbox" type="radio" :value="filter" @change="applyFilter" name="filters" >
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({

  name: "FilterInput",
  props: ["filter"],
  methods: {
    applyFilter(){
      this.$store.commit('search/setSelectedFilter',this.filter)
    }
  }
})
</script>


<style scoped>
.checkbox{
  margin-right: 0.5rem;
}

</style>
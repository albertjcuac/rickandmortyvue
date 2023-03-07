<template>
  {{ filter }}<input type="radio" :value="filter" @change="applyFilter" name="filters" >
</template>

<script>
export default {
  name: "FilterInput",
  props: ["filter"],
  methods: {
    applyFilter(event){
      this.$emit('status', event);
    }
  }
}
</script>


<style scoped>

</style>
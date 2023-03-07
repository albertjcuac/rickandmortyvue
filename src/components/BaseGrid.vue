<template>
  <section class="grid">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'BaseGrid',
}
</script>

<style scoped>
.grid {
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  gap: 12px;
  width: 100%;
}


</style>

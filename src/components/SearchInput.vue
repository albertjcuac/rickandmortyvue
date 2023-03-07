<template>
  <header class="header">
    <input class="search" placeholder="Search for a character" @input="search"/>
  </header>
</template>

<script>
export default {
  name: 'SearchInput',
  methods: {
    search(event) {
      this.$emit('input', event);
    }
  }
}
</script>

<style>
.search {
  width: 600px;
}
</style>


<template>

    <input class="search" placeholder="Search for a character" @input="search"/>

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
  width: 20rem;
}
</style>


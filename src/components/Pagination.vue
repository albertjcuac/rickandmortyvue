<template>
  <div class="pagination">
    <button v-if="currentPage > 1" @click="paginate(currentPage - 1)">Prev</button>
    <button v-for="page in totalPages" :key="page" @click="paginate(page)" :class="{ active: page === currentPage }">{{ page }}</button>
    <button v-if="currentPage < totalPages" @click="paginate(currentPage + 1)">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.pagination button {
  background-color: #68a64c;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 0.5rem;
  padding: 0.5rem;
  transition: background-color 0.3s ease;
}
.pagination button:hover {
  background-color: #4d7a2e;
}
.pagination button.active {
  background-color: #4d7a2e;
}
</style>

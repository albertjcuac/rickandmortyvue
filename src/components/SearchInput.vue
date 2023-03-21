<template>
  <input class="search" placeholder="Search for a character" @input="search" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {store} from "@/store/store";


export default defineComponent({
  name: 'SearchInput',
  methods: {
    search(event: Event) {
      store.commit('search/setQuery', (event.target as HTMLInputElement).value)
    }
  }
})
</script>

<style>
.search {
  width: 60%;
  height: 0.5em;
  border-radius: 60px;
  font-size: 1.2rem;
  padding: 1em 1em;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.1);
  border: 0.1em solid #c7c7c7;
  margin-top: 2.6em;
  align-self: center;
}
.search:focus {
  outline: none;
  border-color: #39ff14;
}
</style>

<template>
  <header class="header">
    <search-input @input="search"></search-input>
  </header>
  <div class="container">
    <aside class="facets">
      <h2>Filters</h2>
      <span>Status</span>
      <ul class="filters">
        <li v-for="filter in filters" class="filter">
          <label>
            {{ filter }}<input type="radio" :value="filter" v-model="selectedFilter">
          </label>
        </li>
      </ul>
    </aside>
    <main>
      <section class="characters">
        <CharacterCard v-for="character in visibleCharacters " v-bind:character="character">  </CharacterCard>
      </section>
    </main>
  </div>
</template>

<script lang="js">
import CharacterCard from "@/components/CharacterCard.vue";
import SearchInput from "@/components/SearchInput.vue";
export default {
  components: {SearchInput, CharacterCard},
  data() {
    return {
      characters: [],
      selectedFilter: 'all',
      apiUrl:'https://rickandmortyapi.com/api/character/',
      query:'',
      visibleCharacters:[]
    };
  },
  watch: {

    selectedFilter() {
      this.search();
    }
  },
  methods: {
    search(event) {
      if (event && event.target) {
        this.query = event.target.value;
      }
        let url = this.apiUrl + '?name=' + this.query;
        if (this.selectedFilter === 'all') {
          fetch(url)
              .then(response => response.json())
              .then(data => {
                this.visibleCharacters = data.results;
                this.characters = data.results;
              });
        } else {
          fetch(url + `&status=` + this.selectedFilter)
              .then(response => response.json())
              .then(data => {
                this.visibleCharacters = data.results;
              });
        }
      }

  },
  computed:{
    filters(){
      let visibleStatus = new Set()
      for (let character of this.characters) {
        visibleStatus.add(character.status)
      }
      let statusList = [...visibleStatus];
      statusList.sort()
      if(this.characters.length!==0){
        statusList.push('all')
      }

      return statusList
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
}

.characters {
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  gap: 12px;
}
.filters {
  width: 120px;
  list-style-type: none;
}
.filter:hover {
  font-weight: 600;
  cursor: pointer;
}
.filter {
  margin-bottom: 8px;
}
.container {
  display: flex;
}
@media screen and (max-width: 767px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
</style>

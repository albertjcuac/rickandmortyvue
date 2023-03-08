<template>
  <body>
    <header class="header">
      <h1 class="rickStyle">Rick and Morty Character Search</h1>
      <search-input @input="debouncedSearch"></search-input>
    </header>
    <div class="container">

      <aside class="facets">
        <h2>Filters</h2>
        <span>Status</span>
        <ul class="filters">
          <li v-for="filter in filters" class="filter">
            <label>
              <FilterInput v-bind:filter="filter" @status="applyFilter"> </FilterInput>
            </label>
          </li>
        </ul>
      </aside>
      <main>
        <BaseGrid>
          <CharacterCard v-for="character in visibleCharacters " v-bind:character="character">  </CharacterCard>
          <h3 class="nothingFound" :class="{ hide: !nothing }">Nothing Found</h3>

        </BaseGrid>
      </main>

    </div>
  </body>
</template>

<script lang="js">
import CharacterCard from "@/components/CharacterCard.vue";
import SearchInput from "@/components/SearchInput.vue";
import BaseGrid from "@/components/BaseGrid.vue";
import FilterInput from "@/components/FilterInput.vue";

export default {
  components: {FilterInput, BaseGrid, SearchInput, CharacterCard},

  data() {
    return {
      characters: [],
      selectedFilter: 'all',
      apiUrl:'https://rickandmortyapi.com/api/character/',
      query:'',
      visibleCharacters:[],



    };
  },
  watch: {
    query(){
      this.applyFilter()

    },
    selectedFilter() {
      this.debouncedSearch();
    }
  },
  mounted(){
    this.search();
  },
  methods: {

    search(event) {

      if (event && event.target) {
        this.query = event.target.value;
      }
      let url = this.apiUrl + '?name=' + this.query;
      this.visibleCharacters = [];

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
    },
    applyFilter(event) {
      if (event && event.target) {
        this.selectedFilter = event.target.value;
      }

    },
    debouncedSearch(event) {
      const self = this;
      clearTimeout(self.searchTimeout);

      self.searchTimeout = setTimeout(() => {
        self.search(event); // Pasar el evento a la función search
      }, 400);
    },



  },
  computed:{
    filters(){
      let visibleStatus = new Set()
      let statusList;
      if(typeof this.characters!=='undefined'){
        for (let character of this.characters) {
          visibleStatus.add(character.status)
        }
       statusList = [...visibleStatus];
        statusList.sort()
        if(this.characters.length!==0){
          statusList.push('all')
        }
      }
      else{
        statusList=[]
      }

      return statusList
    },
    nothing() {
      let nothing = false;
        if (this.visibleCharacters.length === 0) {
          nothing = true;
        }

      return nothing;
    }
  },

};
</script>

<style scoped>

.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  margin-top: 2rem;

}

.rickStyle {
  font-family: 'Get Schwifty', cursive;
  font-size: 3rem;
  text-shadow: 2px 2px #000;
  color: #68a64c;
  letter-spacing: 2px;
  text-align: center;
  margin: 2rem 0;
}

.facets h2 {
  font-family: 'Get Schwifty';
  font-size: 2rem;
  margin-top: 0;
  text-align: center;
}
.facets span {
  display: block;
  margin-bottom: 0.5rem;
  margin-left: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  color: green;
}

.filters {
  width: 8rem;
  list-style-type: none;

}
.filter:hover {
  font-weight: 600;
  cursor: pointer;
}
.filter {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.filter label {
  margin-left: 0.5rem;
}
.filter:hover {
  font-weight: 600;
  cursor: pointer;
  color: #68a64c;
}
.container {
  display: flex;
}
.nothingFound {
  font-size: 1.5rem;
  margin-left: 30rem;
  color: gray;
  opacity: 1;
  transition: opacity 1s ease;
}

.nothingFound.hide {
  opacity: 0;
}

@media screen and (max-width: 767px) {
  .container {
    display: flex;
    flex-direction: column;

  }
  .nothingFound{
    margin-left: 0;
    text-align: center;
  }


}
</style>
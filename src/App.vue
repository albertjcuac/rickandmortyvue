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
              <FilterInput v-bind:filter="filter" > </FilterInput>
            </label>
          </li>
        </ul>
      </aside>
      <main>
        <BaseGrid>
          <transition-group name="fade" appear>
            <CharacterCard v-for="character in visibleCharacters " v-bind:character="character">  </CharacterCard>
            </transition-group>
            <h3 class="nothingFound" :class="{ hide: !nothing }">Nothing Found</h3>
        </BaseGrid>

      </main>

    </div>

  </body>
  <footer>
    <div class="pagination" id="pagination">

      <button class="prev" ref="prevBtn"  @click="previousPage">Previous page</button>
      <span class="page-counter">Page {{currentPage}} of {{totalPages}}</span>
      <button class="next" ref="nextBtn" @click="nextPage">Next page</button>
    </div>

  </footer>
</template>

<script lang="js">
import CharacterCard from "@/components/CharacterCard.vue";
import SearchInput from "@/components/SearchInput.vue";
import BaseGrid from "@/components/BaseGrid.vue";
import FilterInput from "@/components/FilterInput.vue";

export default {
  components: {FilterInput, BaseGrid, SearchInput, CharacterCard, },

  data() {
    return {
      apiUrl:'https://rickandmortyapi.com/api/character/',
      query:'',
      currentPage : 1,
      totalPages:0,




    };
  },
  watch: {




    selectedFilter() {
      this.debouncedSearch();
    },


  },
  mounted(){
    this.search();
  },
  methods: {

    search(event) {

      if (event && event.target) {
        this.query = event.target.value;
      }
      let url = this.apiUrl + '?name=' + this.query ;
      let visibleChar = [];
      this.$store.commit('setVisibleCharacters',visibleChar);

      if (this.selectedFilter === 'all') {
        fetch(url+'&page='+this.currentPage)
            .then(response => response.json())
            .then(data => {
              this.totalPages = data.info.pages;
              this.updatePageButtons();
              this.$store.commit('setVisibleCharacters',data.results);
              this.$store.commit('setCharacters',data.results);

            });
      } else {
        fetch(url + `&status=` + this.selectedFilter+'&page='+this.currentPage)
            .then(response => response.json())
            .then(data => {
              this.totalPages = data.info.pages;
              this.updatePageButtons();
              this.$store.commit('setVisibleCharacters',data.results);

            });
      }

    },

    debouncedSearch(event) {
      const self = this;
      clearTimeout(self.searchTimeout);

      self.searchTimeout = setTimeout(() => {
        self.search(event); // Pasar el evento a la función search
      }, 400);
    },

    updatePageButtons() {
      //desactivar prevBtn en la primera página
      if (this.currentPage === 1) {
        this.$refs.prevBtn.disabled = true;
      } else {
        this.$refs.prevBtn.disabled = false;
      }
      //desactivar nextBtn en la última página
      if (this.currentPage === this.totalPages) {
        this.$refs.nextBtn.disabled = true;
      } else {
        this.$refs.nextBtn.disabled = false;
      }
    },
    nextPage(){
      this.currentPage++;
      this.debouncedSearch();

    },
    previousPage(){
      this.currentPage--;
      this.debouncedSearch();

    },




  },
  computed:{

    characters(){
      return this.$store.getters['getCharacters']
    },
    selectedFilter(){
      return this.$store.getters['getSelectedFilter']
    },
    visibleCharacters(){
      return this.$store.getters['getVisibleCharacters']
    },


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
  font-family: Get Schwifty,cursive;
  font-size: 3rem;
  text-shadow: 2px 2px #000;
  color: #4CAF50;
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
  color: #4CAF50;
}

.filters {
  width: 8rem;


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
  color: #39ff14;
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
.page-counter {
  font-size: 1rem;
  font-weight: bold;
  align-self: flex-end;
}

.pagination {

  display: flex;
  justify-content: space-evenly;


}
.pagination button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
}


.pagination button:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
}
.nothingFound.hide {
  opacity: 0;
}
.fade-enter-active{
  transition: all .2s ease;

}
.fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter,
.fade-leave-to {
  transform: translateX(40px);
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
  .pagination {

    display: flex;
    justify-content: space-evenly;
    margin-left: 1rem;
    margin-right: 1rem;


  }
  .page-counter {
    font-size: 0.5rem;
    font-weight: bold;
    align-self: flex-end;
  }
  }
</style>
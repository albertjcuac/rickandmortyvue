<template>
  <header class="header">
    <input class="search" placeholder="Search for a character" @input="search"/>
  </header>
  <div class="container">
    <aside class="facets">
      <h2>Filters</h2>
      <span>Status</span>
      <ul class="filters">
        <li v-for="filter in filters" class="filter"><label>{{filter}}<input name="filter" type="checkbox"></label></li>


      </ul>
    </aside>
    <main>
      <section class="characters">
        <CharacterCard v-for="character in characters" v-bind:character="character">  </CharacterCard>
      </section>
    </main>
  </div>
</template>
<script lang="js">
import CharacterCard from "@/components/CharacterCard.vue";

export default {
  components: {CharacterCard},
  data() {
    return {
      characters: [],
      filters: [],

    };
  },
  methods: {
    search(event) {
      const query = event.target.value;
      fetch('https://rickandmortyapi.com/api/character/?name=' + query).then(response => response.json())
          .then(data => {

            this.characters = data.results;
            let visibleStatus = new Set()

            for (let character of this.characters) {
              visibleStatus.add(character.status)

            }
            let statusList = [...visibleStatus];
            statusList.sort()
            this.filters=statusList

          });
    }
  }
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: center;
}

.search {
  width: 600px;
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
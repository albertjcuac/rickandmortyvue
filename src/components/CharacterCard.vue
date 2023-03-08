<template>
  <article class="character">
    <img class="character__image" v-bind:alt="'character image of'+character.name" v-bind:src="character.image">
    <div class="description"> {{ character.name }}
      <div v-bind:class="['status',character.status.toLowerCase()]">{{ character.status }}</div>
    </div>
  </article>
</template>

<script>
export default {
  name: "CharacterCard",
  props: ["character"]
}
</script>

<style scoped>
.character {
  display: flex;
  flex-flow: column;
  width: 250px;
  height: 350px;
  border: 1px solid black;
  background-color: whitesmoke;
  border-radius: 50px;
}

.description {
  display: flex;
  align-items: center;
  justify-content: space-between;

}
.character__image {
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
.status {
  padding: 5px;
  color: white;
}

.alive {
  background: green;
}

.dead {
  background: red;
}

.unknown {
  background: gray;
}
</style>
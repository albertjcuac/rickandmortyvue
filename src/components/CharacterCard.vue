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
}

.description {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
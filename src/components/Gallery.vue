<template>
  <div class="hello">
  </div>
</template>

<script>
export default {
  name: "Gallery",
  components: {}
};
</script>


<style scoped>
.gallery-container {
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
}

img {
  width: 100%;
  border-radius: 15px;
}

.card {
}
</style>

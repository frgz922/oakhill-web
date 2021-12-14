<template>
  <div class="google-map-area" id="support">
    <GmapMap :center="{ lat, lng }" :zoom="15" map-type-id="terrain"> </GmapMap>
  </div>
</template>
<script>
export default {
  props: ["lat", "lng"],
};
</script>
<style lang="scss" scoped>
.vue-map-container {
  height: 500px;
  // res
  @media #{$small-mobile} {
    height: 350px;
  }
}
</style>

<template>
  <div>
    <HeaderDemo />

    <OffCanvasMobileMenu v-if="isMobile" />
    <Nuxt />
    <FooterStyleOakhill
      addClassName="light-color"
      addBackgroundColor="bg-oakhill1"
    />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import isMobileMixin from "~/mixins/is-mobile";
export default {
  mounted() {
    this.hydrateStorageAuthData();
  },
  mixins: [isMobileMixin],
  methods: {
    ...mapActions({
      hydrateStorageAuthData: "auth/hydrateStorageAuthData",
    }),
  },
};
</script>

<template></template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  mounted() {
    if (process.client && this.isAuthenticated) {
      this.clearAuthData().then(() => {
        window.cinchyJS = window.cinchyJS
          ? window.cinchyJS
          : getCinchySesionData(() => {});
        window.cinchyJS.signOut();
      });
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "auth/isAuthenticated",
    }),
  },
  methods: {
    ...mapActions({
      hydrateAuthData: "auth/hydrateAuthData",
      clearAuthData: "auth/clearAuthData",
    }),
  },
};
</script>

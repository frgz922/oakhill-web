<template></template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  mounted() {
    if (process.client && !this.isAuthenticated) {
      window.cinchyJS = getCinchySesionData(
        ({ access_token, profile: { id } }) => {
          this.hydrateAuthData({ token: access_token, userName: id }).then(
            () => {
              this.$router.push({ path: "/" });
            }
          );
        }
      );
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
    }),
  },
};
</script>

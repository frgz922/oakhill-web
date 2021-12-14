<template></template>
<script>
export default {
  mounted() {
    new Oidc.UserManager().signinSilentCallback().catch((err) => {
      console.log(err);
    });
  },
};
</script>

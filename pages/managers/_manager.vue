<template>
  <div class="main-container product-details-main max-mb-50">
    <PageBannerOne bgImg="backgroundImage: url('/images/page-banner/about-us-01-hero-bg.jpg')" title="Helping the best advisory and portfolio management teams in Canada." />

    <ManagerDetailsTab />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Manager Details",
    };
  },
  mounted() {
    // console.log(this.$route.params.manager);
  },
  data() {
    return {
      productId: this.$route.query.id,
      logoUrl: this.$route.query.logoUrl,
    };
  },
};
</script>

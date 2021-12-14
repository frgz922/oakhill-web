<template>
  <div class="main-container product-details-main max-mb-50" v-if="productDetails">
        <PageBannerOne bgImg="backgroundImage: url('/images/page-banner/about-us-01-hero-bg.jpg')" title="Helping the best advisory and portfolio management teams in Canada." />

    <div class="section-padding-top-0">
      <div class="page-title">
        <div class="container section-image">
          <div>
            <img :src="productDetails ? productDetails.fundNameLogoUrl : ''" />
          </div>
          <div class="section-image-content">
            <span class="section-image-title">{{
              productDetails ? productDetails.fundNameFundName : ""
            }}</span>
            <span class="section-image-date"
              >Inception:
              {{ productDetails ? productDetails.fundNameInceptionDate : "" }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="section-select container max-mb-20">
      <select class="custom-select" @change="onchageSeries($event)">
        <option
          :value="serie.seriesId"
          v-for="(serie, index) in series"
          :key="index"
          >{{ serie.column1 }}</option
        >
      </select>
    </div>

    <ProductDetailsTabs />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  head() {
    return {
      title: "Product Details",
    };
  },
  async mounted() {
    await this.fetchProductDetailsData(this.productId);
    await this.fetchSeriesData(this.productId);
    await this.fetchFundCompositionData(this.productId);
    await this.fetchHistoricalPerformanceData(this.series[0].seriesId);
    await this.fetchMerData(this.series[0].seriesId);
    await this.fetchOperatingCalendarData(this.productId);
    await this.fetchFundFactData(this.series[0].seriesId);
    await this.fetchFundDocumentsData(this.series[0].seriesId);
  },
  data() {
    return {
      productId: this.$route.query.id,
    };
  },
  computed: {
    ...mapGetters({
      productDetails: "product-details/getProductDetailsData",
      series: "product-details/getSeriesData",
    }),
  },
  methods: {
    ...mapActions({
      fetchProductDetailsData: "product-details/fetchProductDetailsData",
      fetchSeriesData: "product-details/fetchSeriesData",
      fetchHistoricalPerformanceData:
        "product-details/fetchHistoricalPerformanceData",
      fetchFundCompositionData: "product-details/fetchFundCompositionData",
      fetchMerData: "product-details/fetchMerData",
      fetchOperatingCalendarData: "product-details/fetchOperatingCalendarData",
      fetchFundFactData: "product-details/fetchFundFactData",
      fetchFundDocumentsData: "product-details/fetchFundDocumentsData",
    }),
    async onchageSeries(seriesId) {
      await this.fetchHistoricalPerformanceData(seriesId.target.value);
      await this.fetchMerData(seriesId.target.value);
      await this.fetchFundFactData(seriesId.target.value);
      await this.fetchFundDocumentsData(seriesId.target.value);
    },
  },
};
</script>

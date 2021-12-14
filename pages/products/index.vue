<template>
  <div class="main-container">
    <PageBannerOne bgImg="backgroundImage: url('/images/page-banner/about-us-01-hero-bg.jpg')" title="Helping the best advisory and portfolio management teams in Canada." />
    <div class="section-padding-bottom section-padding-top-0">
      <!-- <SectionProductsHero /> -->
      <div class="container">
        <!-- <SectionHomeFeaturedFund /> -->

        <!-- <div>
          <b-table :items="items" :products="products">
          </b-table>
        </div> -->


        <!-- Product list -->
        <div class="row mg-t-50">
          <div
            class="col-12 max-mb-30"
            data-aos="fade-up"
            v-for="(product, index) in products"
            :key="index"
          >
            <CardItem>
              <template slot="thumbnail">
                <n-link :to="{
                    path: product.productUrl,
                    query: {
                      id: product.cinchyId,
                    },
                  }" class="image">
                  <img
                    :src="product.logoUrl"
                    :alt="product.fundName + 'Thumbnail'"
                  />
                </n-link>
              </template>

              <template slot="title">
                <n-link
                  :to="{
                    path: product.productUrl,
                    query: {
                      id: product.cinchyId,
                    },
                  }"
                  >{{ product.fundName }}</n-link
                >
              </template>
              <template slot="footer">
                <ul class="meta" slot="footer">
                  <li>
                    <span class="tx-14 tx-bold tx-sans tx-black-500">Inception Date:</span>
                    {{ product.inceptionDate }}
                  </li>
                  <li>
                    <span class="tx-14 tx-bold tx-sans tx-gray-500">AUM:</span>
                    {{ product.aumMarketing }}
                  </li>
                </ul>
              </template>
            </CardItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  components: {
    CardItem: () => import("@/components/common/CardItem"),
  },

  data() {
    return {
      options: [
        "Popularity",
        "Latest",
        "Price: low to high",
        "Price: high to low",
      ],

 
        products: ['product', 'asset_class', 'AUM'],
        items: [
          { product: 'Dickerson', AUM: 40, asset_class: 'Macdonald' },
          { product: 'Larsen', AUM: 21, asset_class: 'Shaw' },
          { product: 'Geneva', AUM: 89, asset_class: 'Wilson' }
        ],
            
      placeholderItem: "Default",
      products: [],
    };
  },
  async beforeMount() {
    this.products = await this.$fetchCinchyQuery("getProductFundLanding");
    console.log(this.products)
  },

  computed: {
    getSelectorPlaceholder: function () {
      return this.placeholderItem;
    },
  },

  head() {
    return {
      title: "Products List",
    };
  },
};
</script>

<style lang="scss">

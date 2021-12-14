<template>
  <div class="section">
    <div class="container">
      <div class="row max-mb-n50">
        <div class="col-lg-8 col-12 order-lg-1 max-mb-50">
          <div class="product-details-wrapper">
            <b-tabs pills card>
              <Tab
                v-for="(product, index) in productDetailsItems"
                :key="index"
                :item="product"
              >
                <template slot="contentBody">
                  <div
                    class="mt-max-10 product-details-tab-content"
                    v-if="product.tabTitle === 'Overview'"
                  >
                    <div class="text-justify">
                      {{
                        productDetails ? productDetails.fundNameDescription : ""
                      }}
                    </div>
                    <b-table
                      class="table max-mt-50"
                      responsive
                      head-variant="dark"
                      hover
                      bordered
                      small
                      :items="historicalPerformance"
                      v-if="historicalPerformance"
                    ></b-table>
                    <b-table
                      class="table max-mt-50"
                      responsive
                      head-variant="dark"
                      hover
                      bordered
                      small
                      :items="fundCompositionData"
                      v-if="fundCompositionData && fundCompositionData.length"
                    ></b-table>

                    <b-table-simple
                      class="table max-mt-50"
                      v-if="fundDocumentsData && fundDocumentsData.length"
                      hover
                      bordered
                      small
                      responsive
                    >
                      <b-thead head-variant="dark">
                        <b-tr>
                          <b-th>Document Types</b-th>
                          <b-th>Document URL - English</b-th>
                          <b-th>Public</b-th>
                          <b-th>Content Type</b-th>
                        </b-tr>
                      </b-thead>
                      <b-tbody>
                        <b-tr
                          v-for="(item, index) in fundDocumentsData"
                          :key="index"
                        >
                          <b-td>
                            {{ item.documentTypes }}
                          </b-td>
                          <b-td>
                            <a
                              :href="
                                !item.public
                                  ? isAuthenticated
                                    ? item.documentUrlEnglish
                                    : '/'
                                  : item.documentUrlEnglish
                              "
                              target="_blank"
                            >
                              {{
                                !item.public
                                  ? isAuthenticated
                                    ? item.documentUrlEnglish
                                    : "Login to see Document URL"
                                  : item.documentUrlEnglish
                              }}
                            </a>
                          </b-td>
                          <b-td>
                            {{ item.public ? "Yes" : "No" }}
                          </b-td>
                          <b-td>
                            {{ item.contentType }}
                          </b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                  </div>
                  <div
                    v-else-if="
                      product.tabTitle === 'Operating Calendar' &&
                        operatingCalendarData &&
                        operatingCalendarData.length
                    "
                  >
                  <b-table
                      class="table max-mt-10"
                      responsive
                      head-variant="dark"
                      hover
                      bordered
                      small
                      :items="operatingCalendarData"
                      v-if="operatingCalendarData && operatingCalendarData.length"
                    ></b-table>
                    <!-- <table class="table max-mt-10">
                      <thead class="thead-dark">
                        <tr>
                          <th>Valuation Date</th>
                          <th>Subscription Cutoff Date</th>
                          <th>Redemption Cutoff Date</th>
                          <th>Subscription Trade Date</th>
                          <th>Subscription Settlement Date</th>
                          <th>Switch Date Final NAV</th>
                          <th>Redemption Trade Date</th>
                          <th>Redemption Payment Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in operatingCalendarData"
                          :key="index"
                        >
                          <td>
                            {{ item.valuationDate }}
                          </td>
                          <td>
                            {{ item.subscriptionCutoffDate }}
                          </td>
                          <td>
                            {{ item.redemptionCutoffDate }}
                          </td>
                          <td>
                            {{ item.subscriptionTradeDate }}
                          </td>
                          <td>
                            {{ item.subscriptionSettlementDate }}
                          </td>
                          <td>
                            {{ item.switchDateFinalNav }}
                          </td>
                          <td>
                            {{ item.redemptionTradeDate }}
                          </td>
                          <td>
                            {{ item.redemptionPaymentDate }}
                          </td>
                        </tr>
                      </tbody>
                    </table> -->
                  </div>
                  <div v-else></div>
                </template>
              </Tab>
            </b-tabs>
          </div>
          <!-- Course Details Wrapper End -->
        </div>

        <div class="col-lg-4 col-12 order-lg-2 max-mb-50">
          <Sidebar :bodyContent="sidebarData">
            <template slot="contentHeader">
              <div class="">
                <button
                  class="btn btn-success btn-hover-secondary btn-width-100"
                >
                  Invest Now
                </button>
              </div>
              <div class="max-mt-30 text-center text-decoration">
                <a :href="fundFactData ? fundFactData.factSheetUrl : '/'"
                  >Fund FactSheet.pdf</a
                >
              </div>
            </template>
          </Sidebar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      productDetailsItems: "product-details/getProductDetailsItems",
      productDetails: "product-details/getProductDetailsData",
      historicalPerformance: "product-details/getHistoricalPerformanceData",
      fundCompositionData: "product-details/getFundCompositionData",
      mer: "product-details/getMerData",
      operatingCalendarData: "product-details/getOperatingCalendarData",
      fundFactData: "product-details/getFundFactData",
      fundDocumentsData: "product-details/getFundDocumentsData",
      isAuthenticated: "auth/isAuthenticated",
    }),
    sidebarData() {
      return [
        {
          icon: "money-bill-wave",
          label: "AUM",
          value: this.productDetails
            ? this.productDetails.fundNameAumMarketing
            : "",
        },
        {
          icon: "chart-network",
          label: "Distribution Frequency",
          value: this.productDetails
            ? this.productDetails.fundNameDistributionFrequency
            : "",
        },
        {
          icon: "chart-bar",
          label: "MER",
          value: this.mer
            ? `${(this.mer.managementFee * 100).toFixed(1)}%`
            : "",
        },
        {
          icon: "chart-network",
          label: "Subscription Code",
          value: this.productDetails
            ? this.productDetails.fundServCodeSubscriptions
            : "",
        },
        {
          icon: "chart-network",
          label: "Redemption Code",
          value: this.productDetails
            ? this.productDetails.fundServCodeRedemptions
            : "",
        },
      ];
    },
  },
  data() {
    return {};
  },
};
</script>

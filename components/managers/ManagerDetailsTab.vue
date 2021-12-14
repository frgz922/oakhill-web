<template>

  <div class="section managers">
    <div class="container">
      <div class="section-padding-top-0">
      <div class="page-title">
        <div class="container section-image">
          <div class="m-5">
            <img :src="managerDetailsItems(managerType).managerImg" alt="" />
          </div>
        </div>
      </div>
    </div>   
      <div class="row max-mb-n50">
        <div class="col-lg-8 col-12 order-lg-1 max-mb-50">
          <div class="product-details-wrapper">
            <b-tabs pills card>
              <Tab
                v-for="(manager, index) in managerDetailsItems(managerType).managerData"
                :key="index"
                :item="manager"
              >
                <template slot="contentBody">
                  <div class="mt-max-10 mb-5 product-details-tab-content"  
                  v-for="(content, index) in manager.tabContent.contentBody"
                :key="index"
                :item="manager">
                        <h3 class="name" v-if="content.contentTitle">
                          {{content.contentName}}
                        </h3>
                        <span v-if="content.contentTitle" class="title">
                            / {{content.contentTitle}}<br /><br />
                        </span> 
                        {{content.content}}
                        <div class="mt-2" v-for="(list, index) in content.list"
                          :key="index"
                          :item="manager">
                            <n-link :to="list.url">
                              {{list.text}}
                            </n-link>
                        </div>
                  </div>
                </template>
              </Tab>
            </b-tabs>
          </div>
          <!-- Course Details Wrapper End -->
        </div>
        <div class="col-lg-4 col-12 order-lg-2 max-mb-50">
          <Sidebar :bodyContent="managerDetailsItems(managerType).sidebarContent" />
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
      managerDetailsItems: "manager-details/getManagerDetailsItems",
    }),
    
  },
  data() {
    return {
      managerType: this.$route.params.manager,
    };
  },
  
};
</script>

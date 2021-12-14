<template>
  <div class="section-padding-bottom section-padding-top">
    <div class="views-and-insights-container">
      <div class="row" data-aos="fade-up">
        <div
          v-for="(article, index) in articles"
          :key="index"
          class="col-lg-3 col-md-6 col-sm-12 mb-25"
        >
          <span class="article-type">{{ article.type }}</span>
          <CardItem>
            <template slot="thumbnail">
              <n-link :to="article.srcUrl" class="image">
                <img :src="article.imgSrc" :alt="article.title" />
              </n-link>
            </template>

            <template slot="title">
              <n-link :to="article.srcUrl">{{ article.title }}</n-link>
              <ul class="article-info">
                <li>
                  {{
                    `${article.sourceName} | ${formatArticleDate(article.date)}`
                  }}
                </li>
              </ul>
            </template>
            <template slot="body">
              <p class="article-desc">{{ article.desc }}</p>
            </template>
          </CardItem>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  components: {
    CardItem: () => import("@/components/common/CardItem"),
  },
  computed: {
    ...mapGetters({
      articles: "view-and-insights/getArticles",
    }),
  },
  methods: {
    formatArticleDate(date) {
      return moment(date).format("MMMM YYYY");
    },
  },
};
</script>

<template>
  <div class="about-leadership-container">
    <div
      class="row intro1-section section-fluid baner"
      :style="{ backgroundImage: `url('/images/bg/subscribe-bg.jpg')` }"
    >
      <div class="container">
        <div class="row row-cols-md-2 row-cols-1 max-mb-n30">
          <!-- Intro One Content Start -->
          <div class="col align-self-center max-mb-30">
            <div class="text-center align-items-center">
              <h2 class="title">{{ leadershipTitle }}</h2>
            </div>
          </div>
          <!-- Intro One Content End -->
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row partner-section section-padding" data-aos="fade-up">
        <div
          class="col-md-6 col-sm-12 partner-info-container"
          v-for="partner in partners"
          :key="partner.name"
        >
          <div class="partner-pic">
            <img :src="partner.imgSrc" :alt="partner.name" />
          </div>
          <div class="content text-center">
            <h3 class="title">{{ partner.name }}</h3>
            <div class="desc">
              <p>{{ partner.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  head() {
    return {
      title: "Leadership",
    };
  },
  computed: {
    ...mapGetters({
      leadershipTitle: "about/getLeadershipTitle",
      partners: "about/getPartners",
    }),
  },
};
</script>

<template>
  <div>
    
    <PageBannerOne bgImg="backgroundImage: url('/images/page-banner/about-us-01-hero-bg.jpg')" title="Helping the best advisory and portfolio management teams in Canada." />
    
    <div class="about-container"
    
    >
      <div class="section-padding">
        <div class="container">
          <div class="row row-cols-lg-2 row-cols-1 max-mb-n30">
            <div class="desc col-lg-12">
              <h2 class="about-company-title"><span>Our Vision</span></h2>
              <p>{{ vision.desc }}</p>
            </div>
            <!-- <div class="img-container col-lg-6">
              <img :src="vision.imgSrc" />
            </div> -->
          </div>
        </div>
      </div>


      <div class="section-padding">
        <div class="container">
          <div class="row about-desktop-layout" data-aos="fade-up">
            <!-- <div class="img-container col-lg-6">
              <img :src="history.imgSrc" />
            </div> -->
            <div class="desc col-lg-12">
              <h2 class="about-company-title"><span>Our History</span></h2>
              <p>{{ history.desc }}</p>
            </div>
          </div>
          <div class="row about-mobile-layout" data-aos="fade-up">
            <div class="desc col-lg-6">
              <h2 class="about-company-title"><span>Our History</span></h2>
              <p>{{ history.desc }}</p>
            </div>
            <!-- <div class="img-container col-lg-6">
              <img :src="history.imgSrc" />
            </div> -->
          </div>
        </div>
      </div>
    </div>

  <div class="about-leadership-container">
    <div class="row">
      <div class="container">
        <div class="row row-cols-md-2 row-cols-1 max-mb-n30">
          <!-- Intro One Content Start -->
          <div class="col align-self-center max-mb-30">
            <div class="text-center align-items-center">
              
            </div>
          </div>
          <!-- Intro One Content End -->
        </div>
      </div>
    </div>

    <div class="bg-black-9">
      <div class="container" >

        <h1 class="title text-center tx-white pd-t-30">{{ leadershipTitle }}</h1>
        <div class="row partner-section section-padding" data-aos="fade-up">
            <div class="col-sm-12 partner-info-container" 
            v-for="partner in partners"
            :key="partner.name"
            >
              <div class=" mg-b-30">
                <div class="card-body bg-black">

                    <div class="row">
                      <div class="col-3">
                        <div class="partner-pic">
                          <img :src="partner.imgSrc" :alt="partner.name" />
                        </div>
                      </div>
                      <div class="col-9">
                        <h3 class="tx-white">{{ partner.name }}</h3>
                        <!-- <h5 class="card-title tx-white">Title</h5> -->
                        <p class="card-text tx-white">{{ partner.desc }}</p>
                      </div>
                    </div>

                </div>
              </div>
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
      title: "Company",
    };
  },
  computed: {
    ...mapGetters({
      vision: "about/getVision",
      history: "about/getHistory",
      leadershipTitle: "about/getLeadershipTitle",
      partners: "about/getPartners",
    }),
  },
};
</script>



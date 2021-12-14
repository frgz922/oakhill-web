<template>
    <div class="lifestyle-section section section-padding-top section-padding-bottom-200">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-center pd-b-50" data-aos="fade-up">
                <span class="sub-title">What type of support are you looking for?</span>
                <h2 class=" ">Browse our partner FAQ or contact us directly</h2>

            </div>
            <!-- Section Title End -->

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
                <div class="col max-mb-30" data-aos="fade-up" v-for="feature in features" :key="feature.index">
                    <div class="health-icon-box text-center">
                        <div class="icon">
                            <img :src="feature.imgSrc" alt="feature.title">
                        </div>
                        <div class="content">
                            <h3 class="title">{{ feature.title }}</h3>
                            <div class="desc">
                                <p>{{ feature.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row max-mt-50">
                <div class="col text-center">
                    <a href="mailto:tyson.rose@cinchy.com" ><button class="btn btn-cinchy-blue">Email Support</button> </a>
                    <!-- <n-link to="/" ><button class="btn btn-cinchy-blue">Email Support</button> </n-link> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                features: [
                    {
                        title: "Platform Support",
                        desc: "FAQ's directly related to the Cinchy platform",
                        imgSrc: "/images/health/health-coaching-box-image-01.png"
                    },
                    {
                        title: "Sales & Marketing",
                        desc: "Sales collateral, joint-sales FAQ, commissions and payments",
                        imgSrc: "/images/health/health-coaching-box-image-01.png"
                    },
                    {
                        title: "Business Development",
                        desc: "The Cinchy business development program overview",
                        imgSrc: "/images/health/health-coaching-box-image-01.png"
                    }
                ]
            }
        }
    };
</script>
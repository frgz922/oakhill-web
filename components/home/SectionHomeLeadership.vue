<template>
    <div class="testimonial-section section-padding-top bg-f8f8f8 b-5 mb-3">
        <div class="container">
            <div class="row mb-2">
                <div class="col-md-12 text-center">
                    <h2>Leadership</h2>
                </div>
            </div>
            <div class="h5-testimonial-slider" data-aos="fade-up">
                <swiper :options="swiperOption">
                    <div class="swiper-slide" v-for="partner in partners" :key="partner.index">
                        <div class="static-testimonial h5-testimonial mb-30">
                            <div class="testimonial-image">
                                <img :src="partner.imgSrc" :alt="partner.name">
                            </div>
                            <div class="author-info m-2">
                                <div class="cite">
                                    <h3 class="partner-name">{{ partner.name }}</h3>
                                    <span class="position-job">/ {{ partner.position }}</span>
                                </div>
                            </div>
                            <div class="partner-content">
                                <p>{{ partner.desc}}</p>
                            </div>
                            
                        </div>
                    </div>
                </swiper>
                <div class="swiper-pagination text-center"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
    export default {
        computed: {
            ...mapGetters({
            leadershipTitle: "about/getLeadershipTitle",
            partners: "about/getPartners",
            }),
        },
        data () {
            return {
                swiperOption: {
                    loop: false,
                    speed: 1000,
                    spaceBetween : 30,
                    autoHeight: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {
                        992: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 2
                        },
                        300: {
                            slidesPerView: 1
                        }
                    }
                },

                testimonials: [
                    {
                        imgSrc: "/images/testimonial/140/testimonial-avata-01.jpg",
                        alt: "image",
                        text: "Prior to founding Oak Hill Mr. Raffoul was a managing partner at a leading independent marketing and distribution firm. In that time he was responsible for all aspects of client development and capital raising.",
                        text2: "Prior to that, he was at Canada’s largest independent institutional money manager Fiera Capital where he led sales initiatives across Canada..",
                        name: "Marc Raffoul",
                        position: "Managing Partner"
                    },
                    {
                        imgSrc: "/images/testimonial/140/testimonial-avata-02.jpg",
                        alt: "image",
                        text: "Mr. Singh's experience includes various roles in both corporate finance and asset management. After starting his career at Dynamic Funds, he worked at a Toronto family office focusing on private equity.",
                        text2: "Leveraging his relationships in the retail brokerage and family office channels, Anil focuses on wholesaling alternative products and mid market corporate finance.",
                        name: "Anil Singh",
                        position: "Managing Partner"
                    },
                    
                ]
            }
        }

        
    };
</script>
<template>
    <div class="testimonial-section section section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="about-content testimonial-content mb-sm-50 mb-xs-50">
                        <span class="sub-title"> Fund Spotlight</span>
                        <h2 class="title">Designed to deliver long- term results</h2>
                        <p class="tx-20 tx-gray-700">Oakhill manages unique alternative investment solutions that offer investors the benefits of better diversification. </p>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="testimonial-slider-vertical">
                        <swiper :options="swiperOptions">
                            <div class="swiper-slide" v-for="featuredFund in featuredFund" :key="featuredFund.id">
                                <div class="testimonial-two testimonial-three bg-f5f5f5">
                                    <div class="content">
                                        <h4 class="title">{{ featuredFund.heading }}</h4>
                                        <p>{{ featuredFund.text }}</p>
                                        <n-link to="/products"><p class="">View Fund</p></n-link>
                                    </div>
                                    <div class="author-info">
                                        <div class="image">
                                            <img :src="featuredFund.image" :alt="featuredFund.alt">
                                        </div>
                                        <div class="cite">
                                            <h6 class="name">{{ featuredFund.name }}</h6>
                                            <span class="position">/ {{ featuredFund.position }}</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper>
                        <div class="swiper-pagination text-center"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                swiperOptions: {
                    slidesPerView : 1,
                    slidesPerGroup: 1,
                    effect: 'coverflow',
                    loop: true,
                    speed: 1000,
                    spaceBetween : 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    }
                },

                featuredFund: [
                    {
                        id: 1,
                        heading: "UBS (Canada) Global Merger Arbitrage Fund",
                        text: "The investment objective of UBS (Canada) Global Merger Arbitrage Fund (the Fund) is to realize consistently high risk-adjusted appreciation in the value of its assets while focusing on securities involving corporate actions.",
                        name: "Alternatives",
                        position: "UBS Asset Management (Canada) Inc.",
                        image: "/images/testimonial/70/testimonial-1.jpg",
                        alt: "image"
                    },
                    {
                        id: 2,
                        heading: "UBS (Canada) Global Real Estate Fund",
                        text: "The Fund will provide its unitholders (the “Unitholders”) with investment exposure to a global real estate strategy and other investment strategies, at the Manager’s sole discretion. ",
                        name: "Alternatives",
                        position: "UBS Asset Management (Canada) Inc.",
                        image: "/images/testimonial/70/testimonial-2.jpg",
                        alt: "image"
                    }
                ]
            }
        }
    };
</script>
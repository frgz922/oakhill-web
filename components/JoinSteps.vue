<template>
    <div class="gradation-process-section section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="gradation-title-wrapper mb-50">
                        <!-- Section Title Start -->
                        <div class="section-title text-left mb-0" data-aos="fade-up">
                            <span class="sub-title"> <strong>Cinchy Partner Network</strong></span>
                            <h2 class="title">Join Our <span> Community</span> </h2>
                        </div>

                        <!-- <div class="gradation-sub-heading" data-aos="fade-up">
                            <h3 class="heading"><mark>4</mark> Steps</h3>
                        </div> -->
                    </div>

                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="ht-gradation style-01">
                        <div class="item item-1" data-aos="fade-up" v-for="gradation in gradationData.slice(0, 4)" :key="gradation.id">
                            <div class="line"></div>
                            <div class="circle-wrap">
                                <div class="mask">
                                    <div class="wave-pulse wave-pulse-1"></div>
                                    <div class="wave-pulse wave-pulse-2"></div>
                                    <div class="wave-pulse wave-pulse-3"></div>
                                </div>
                                <h6 class="circle">{{ gradation.circle }}</h6>
                            </div>

                            <div class="content-wrap">
                                <h5 class="heading">{{ gradation.heading }}</h5>
                                <div class="text">{{ gradation.text }}</div>
                            </div>
                        </div>
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
                gradationData: [
                    {
                        id: 1,
                        circle: "1",
                        heading: "Register Online",
                        text: "Submit your info through our sign up form. The appropriate partner team member with follow up."
                    },
                    {
                        id: 2,
                        circle: "2",
                        heading: "Initial Consultation",
                        text: "Schedule a consultation call with our partnership team to learn about our platform and programs."
                    },
                    {
                        id: 3,
                        circle: "3",
                        heading: "Questionnaire",
                        text: "Fill out our partner questionnaire online and submit answers for review based on program."
                    },
                    {
                        id: 4,
                        circle: "4",
                        heading: "Formal Enrollment",
                        text: "Once approved, login to partner portal to access your onboard package and resources."
                    }
                ]
            }
        }
    };
</script>
<template>
    <div class="faq-section section pd-150 position-relative">
        <div class="container">
            <div class="row row-cols-lg-2 row-cols-1 align-items-center">
                <div class="col">
                    <div class="faq-left-image">
                        <img src="/images/about/about03/about-us-03-image-01.png" alt="about">

                        <!-- Animation Shape Start -->
                        <div class="shape shape-1 scene">
                            <span data-depth="3">
                                <img src="/images/shape-animation/shape-2.svg" alt="" class="svgInject">
                            </span>
                        </div>
                        <!-- Animation Shape End -->
                    </div>
                </div>
                <div class="col">
                    <div class="faq-content-area">
                        <!-- Section Title Start -->
                        <div class="section-title text-left mb-50" data-aos="fade-up">
                            <span class="sub-title">Platform Support <strong></strong></span>
                        </div>
                        <!-- Section Title End -->

                        <AccordionFAQ />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            AccordionFAQ: () => import('@/components/AccordionFAQ'),
        },
    };
</script>
<template>
    <div class="main-container">

        <!-- <HeaderDemo/> -->

        <OffCanvasMobileMenu />

        <HeroModernSchooling />

        <CourseOne />

        <FaqWithAccordion />

        <CounterUpFour addClassName="bg-f8f8f8 pb-0" />

        <SignatureCoursesTwo />

        <ImageContentBox />

        <ImageContentBoxTwo />

        <UpcomingEvents />

        <TestimonialStyleSeven />

        <CallToActionOne addClassName="bg-f8f8f8" />

        <!-- <FooterStyleCinchy1 addClassName="light-color" addBackgroundColor="bg-navy-blue" /> -->

    </div>
</template>

<script>
    export default {
        components: {
            // HeaderDemo: () => import('@/components/headers/HeaderDemo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroModernSchooling: () => import('@/components/HeroModernSchooling'),
            CourseOne: () => import('@/components/CourseOne'),
            FaqWithAccordion: () => import('@/components/FaqWithAccordion'),
            CounterUpFour: () => import('@/components/CounterUpFour'),
            SignatureCoursesTwo: () => import('@/components/SignatureCoursesTwo'),
            ImageContentBox: () => import('@/components/ImageContentBox'),
            ImageContentBoxTwo: () => import('@/components/ImageContentBoxTwo'),
            UpcomingEvents: () => import('@/components/UpcomingEvents'),
            TestimonialStyleSeven: () => import('@/components/TestimonialStyleSeven'),
            CallToActionOne: () => import('@/components/CallToActionOne'),
            // FooterStyleCinchy1: () => import('@/components/cinchy/FooterStyleCinchy1'),
        },

        head() {
            return {
                title: 'Portfolio Managers'
            }
        },
    };
</script>





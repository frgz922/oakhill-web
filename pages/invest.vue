<template>
    <div class="main-container">

        <HeaderDemo/>

        <OffCanvasMobileMenu /> 
        <ServiceStyleTwo />

        <CourseStyleTwo />

        <UpcomingEvents />


        <DemoDashboardFeatured />

        <FooterStyleOakhill addClassName="light-color" addBackgroundColor="bg-navy-blue" />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderDemo: () => import('@/components/headers/HeaderDemo'),

            ServiceStyleTwo: () => import('@/components/ServiceStyleTwo'),
            FaqWithVideo: () => import('@/components/FaqWithVideo'),
            UpcomingEvents: () => import('@/components/UpcomingEvents'),



            DemoDashboardFeatured: () => import('@/components/DemoDashboardFeatured'),
            FooterDemo: () => import('@/components/cinchy/FooterDemo'),
        },

        head() {
            return {
                title: 'Investment Products'
            }
        },
    };
</script>



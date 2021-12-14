<template>
    <div class="main-container">

        <!-- <HeaderTop /> -->

        <!-- <HeaderStyleWithSocial /> -->

        <HeroDemo />
        <SectionDemoFunds1 />


        <!-- <VideoStyleTwo /> -->
        <!-- <NewsletterDemo /> -->

    </div>
</template>

<script>
    export default {
        components: {
            // HeaderTop: () => import('@/components/HeaderTop'),
            // HeaderStyleWithSocial: () => import('@/components/HeaderStyleWithSocial'),
            HeroDemo: () => import('@/components/HeroDemo'),
            SectionDemoFunds1: () => import('@/components/SectionDemoFunds1'),



            // VideoStyleTwo: () => import('@/components/VideoStyleTwo'),
            // NewsletterDemo: () => import('@/components/NewsletterDemo'),

        },

        head() {
            return {
                title: 'Funds Demo'
            }
        },
    };
</script>



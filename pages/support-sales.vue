<template>
    <div class="main-container">

        <HeaderStyleCinchy1 class="header-fluid" />

        <!-- <OffCanvasMobileMenu /> -->

        <SupportFAQ />

        <FooterStyleCinchy1 addClassName="light-color" addBackgroundColor="bg-navy-blue" />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderStyleCinchy1: () => import('@/components/cinchy/HeaderStyleCinchy1'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SupportFAQ: () => import('@/components/SupportFAQ'),
            FooterStyleCinchy1: () => import('@/components/cinchy/FooterStyleCinchy1'),
        },

        head() {
            return {
                title: 'Partner Support - Sales & Marketing'
            }
        },
    };
</script>



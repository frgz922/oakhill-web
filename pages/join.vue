<template>
    <div class="main-container">

        <HeaderStyleCinchy2 class="header-fluid" />
        <!-- <OffCanvasMobileMenu /> -->
        <!-- <JoinSteps /> -->
        <!-- Form -->
        <div class="become-an-instructor-section section-padding" :style="{ backgroundImage: `url('/images/intro/intro3/bg-1.jpg')` }">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 offset-xl-6">
                        <div class="instructor-register-from">
                            <!-- <h4 class="title">Join the Cinchy Partner Network</h4> -->
                            <PartnerRegisterForm1 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterStyleCinchy1 addClassName="light-color" addBackgroundColor="bg-navy-blue" />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderStyleCinchy2: () => import('@/components/cinchy/HeaderStyleCinchy2'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            JoinSteps: () => import('@/components/JoinSteps'),
            PartnerRegisterForm1: () => import('@/components/PartnerRegisterForm1'),

            FooterStyleCinchy1: () => import('@/components/cinchy/FooterStyleCinchy1'),
        },

        head() {
            return {
                title: 'Join the Cinchy Partner Network'
            }
        },
    };
</script>



<template>
    <div class="main-container">

        <HeaderDemo class="header-fluid" />

        <!-- <OffCanvasMobileMenu /> -->

        <!-- Event Comment Section Start -->
        <div class="event-comment-section section-padding-bottom mg-t-50">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <!-- Section Title Start -->
                        <div class="section-title text-center mb-50" data-aos="fade-up">
                            <h2 class="title fz-48 heading-color">Are you a registered Advisor with <span>Oakhill</span>?</h2>
                        </div>
                        <!-- Section Title End -->
                    </div>
                </div>
                <div class="row mg-t-50">
                    <div class="offset-lg-2 col-lg-8">
                        <div class="event-form">
                            <form>
                                <div class="row">
                                    <div class="col-6 text-center">
                                        <n-link to="/login"><button class="btn btn-light btn-width-180">Yes</button></n-link>
                                    </div>
                                    
                                    <div class="col-6 text-center">
                                        <n-link to="/subscriptions/0"><button class="btn btn-light btn-width-180">No</button></n-link>
                                    </div>

                                </div>
                            </form>
                        </div>


                        
                    </div>
                </div>
            </div>
        </div>
        <!-- Event Comment Section End -->

        <!-- <FooterStyleCinchy1 addClassName="light-color" addBackgroundColor="bg-navy-blue" /> -->

    </div>
</template>

<script>
    export default {
        components: {
            HeaderDemo: () => import('@/components/headers/HeaderDemo'),

            FooterStyleCinchy1: () => import('@/components/cinchy/FooterStyleCinchy1'),
        },

        head() {
            return {
                title: 'Subcriptions'
            }
        },
    };
</script>



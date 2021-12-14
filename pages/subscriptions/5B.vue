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
                            <h2 class="title fz-48 heading-color">You're almost finished.</h2>
                            <p class="tx-gray-500">Subscription of Units will be paid for by: </p>
                        </div>
                        <!-- Section Title End -->
                    </div>
                </div>
                <div class="row mg-t-50">
                    <div class="col-2"></div>
                    <div class="col-8">
                        <div class="event-form">
                            <form>
                                <div class="row">
                                    <div class="col-2"></div>
                                    <div class="col-8 max-mb-30">

                                        <select class="custom-select">
                                            <option selected>Select Payment Method</option>
                                            <option value="1">FundServ</option>
                                            <option value="2">TMX NAVex</option>
                                            <option value="3">Direct (Cash or Wire)</option>
                                        </select>

                                    </div>
                                    <div class="col-2"></div>
                                    <div class="col-6 text-center">
                                        <a href="https://openwealthfi.s3.amazonaws.com/demo/UBS+GMA+Series+F+Sub+Agreement+(fillable)+-+PMs+(Final+as+of+04Mar2020).pdf" target="_blank" class="btn btn-light btn-lg">Download PDF & Sign</a>
                                    </div>
                                    <div class="col-6 text-center">
                                        <n-link to="/subscriptions/6"><button class="btn btn-light btn-width-180">Sign Online</button></n-link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-2"></div>
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



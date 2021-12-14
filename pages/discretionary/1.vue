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
                            <h2 class="title fz-48 heading-color">How many investors will you be including?</h2>
                        </div>
                        <!-- Section Title End -->
                        <p class="tx-gray-500 text-center ">You will be acknowleding details on behalf of each discretionary account submitted.</p>
                    </div>
                </div>
                <div class="row mg-t-50">
                    <div class="offset-lg-2 col-lg-8">
                        <div class="event-form">
                            <form>
                                <div class="row">
                                    <div class="col-md-3"></div>
                                    <div class="col-md-6 col-12 max-mb-30 text-center">
                                        <div class="custom-control custom-radio">
                                            <input type="number" class="form-control" placeholder="Number of subscribers">
                                        </div>
                                    </div>
                                    <div class="col-md-3"></div>
                                    <div class="col-12 text-center">
                                        <n-link to="/discretionary/2"><button class="btn btn-success">Create Subcription Agreement</button></n-link>
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



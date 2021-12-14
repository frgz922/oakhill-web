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
                            <h2 class="title fz-48 heading-color">This investment is risky, please check that you understand each of the investment risks.</h2>
                        </div>
                        <!-- Section Title End -->
                    </div>
                </div>
                <div class="row mg-t-50">
                    <div class="offset-lg-2 col-lg-8">
                        <div class="event-form">
                            <form>
                                <div class="row">
                                    <div class="col-2"></div>
                                    <div class="col-8 max-mb-30">
                                        <form>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck2">
                                                <label class="custom-control-label" for="customCheck2">You could lose your entire investment of <span> $___________.</span></label>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck3">
                                                <label class="custom-control-label" for="customCheck3">Liquidity risk - You may not be able to sell your investment quickly - or at all.</label>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck4">
                                                <label class="custom-control-label" for="customCheck4"><span>Lack of information - You may receive little or no information about your investment.</span></label>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck6">
                                                    <label class="custom-control-label" for="customCheck6">
                                                        <span>You will not receive advice from the salesperson about whether this investment is suitable for you
                                                            unless the salesperson is registered. The salesperson is the person who meets with, or provides information to, you
                                                            about making this investment. To check whether the salesperson is registered, go to www.aretheyregistered.ca.
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-2"></div>
                                </div>
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <n-link to="/subscriptions/5"><button class="btn btn-light btn-width-180">I Agree</button></n-link>
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
            HeaderDemo: () => import('@/components/cinchy/HeaderDemo'),

            FooterStyleCinchy1: () => import('@/components/cinchy/FooterStyleCinchy1'),
        },

        head() {
            return {
                title: 'Subcriptions'
            }
        },
    };
</script>



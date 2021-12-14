<template>
    <div class="main-container">

        <HeaderStyleCinchy2 class="header-fluid" />

        <!-- <OffCanvasMobileMenu /> -->

        <CounterUpFour :style="{ backgroundColor: '#f5f5f5' }" />
        <Gradation />

        <!-- Become An Instructor Section Start -->
        <div class="become-an-instructor-section section-padding" :style="{ backgroundImage: `url('/images/bg/become-a-teache-bg.jpg')` }">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 offset-xl-6">
                        <div class="instructor-register-from">
                            <h4 class="title">Register to become an Intructor</h4>
                            <InstructorRegisterForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Become An Instructor Section End -->


        <!-- <div class="container">
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6 center">
                    <fieldset class="form-fieldset mg-t-50 mg-b-50">
                        <legend>Contact Details</legend>
                        <form>
                            <div class="form-group">
                                <label for="formGroupExampleInput" class="d-block">First Name</label>
                                <input type="text" class="form-control" placeholder="Enter your firstname">
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput2" class="d-block">Last Name</label>
                                <input type="text" class="form-control" placeholder="Enter your lastname">
                            </div>

                            <div class="form-group">
                                <label for="formGroupExampleInput" class="d-block">Email Address</label>
                                <input type="text" class="form-control" placeholder="Enter your firstname">
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput2" class="d-block">Phone Number</label>
                                <input type="text" class="form-control" placeholder="Enter your lastname">
                            </div>
                            <n-link to="/registraion/1" ><button class="btn btn-primary " type="submit"> <i class="far fa-redo mg-r-5"></i>  Register</button> </n-link>
                            <div class="alert alert-primary mg-t-20" role="alert">
                                You will be sent a confirmation email with details to complete registration
                            </div>

                        </form>
                    </fieldset>

                </div>
                <div class="col-3"></div>
            </div>
        </div> -->


        <!-- <FooterStyleCinchy1 addClassName="light-color" addBackgroundColor="bg-navy-blue" /> -->

    </div>
</template>

<script>
    export default {
        components: {
            HeaderStyleCinchy2: () => import('@/components/cinchy/HeaderStyleCinchy2'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
                        CounterUpFour: () => import('@/components/CounterUpFour'),
            Gradation: () => import('@/components/Gradation'),
            InstructorRegisterForm: () => import('@/components/InstructorRegisterForm'),

            FooterStyleCinchy1: () => import('@/components/cinchy/FooterStyleCinchy1'),
        },

        head() {
            return {
                title: 'Partner Registration'
            }
        },
    };
</script>



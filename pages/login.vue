<template>
    <div class="main-container">
        
        
        <!--Login Register section start-->
        <div class="login-register-section section-padding-bottom mg-t-50">
            <div class="container">
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6">
                        <!-- Login Form Start -->
                        <div class="login-form-wrapper">
                            <h3 class="title">Welcome Back!</h3>
                            <form class="login-form">
                                <div class="single-input mb-30">
                                    <label for="username">Email Address</label>
                                    <input type="text" id="username" name="username" placeholder="Username or email">
                                </div>
                                <div class="single-input mb-30">
                                    <label for="password">Password</label>
                                    <input type="text" id="password" name="password" placeholder="Password">
                                </div>
                                <div class="single-input mb-30">
                                    <div class="row">
                                        <div class="col-sm-6 remember-me-wrap">
                                            <div class="checkbox-input">
                                                <input type="checkbox" name="login-form-remember" id="login-form-remember">
                                                <label for="login-form-remember">Remember me</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 lost-your-password-wrap">
                                            <button class="lost-your-password"  ref="btnShow" @click="showModal">Forgot your password or username?</button>
                                            <!-- modal -->
                                            <b-modal id="modal-forgot" title="Forgot password or username" ok-only>
                                                <p class="my-4">
                                                    If you have forgotten your user or password, please contact our IT administrator at <a href="mailto:portaladmin@oakhillfinancial.com">portaladmin@oakhillfinancial.com</a> or your designated sales manager. Please provide you dealer rep code and account email address.
                                                </p>
                                            </b-modal>
                                            <!-- modal -->
                                        </div>
                                    </div>
                                </div>
                                <div class="single-input">
                                    <n-link to="/subscriptions/3"><button class="btn btn-dark btn-width-100">Sign In</button></n-link>
                                </div>
                            </form>
                        </div>
                        <!-- Login Form End -->
                    <div class="col-3"></div>
                    </div>
                </div>
            </div>
        </div>
        <!--Login Register section end-->


    </div>
</template>

<script>
    import eventData from '~/data/event'
    
    export default {
        methods: {
            showModal(e) {
                e.preventDefault()
                this.$root.$emit('bv::show::modal', 'modal-forgot', '#btnShow')
            },
        },
        components: {
            EventItemGridStyle: () => import('@/components/EventItemGridStyle'),
        },

        data () {
            return {
                eventData,
                options: [
                    'Popularity', 
                    'Latest',
                    'Price: low to high',
                    'Price: high to low'
                ],
                placeholderItem: 'Default'
            }
        },

        computed: {
            getSelectorPlaceholder: function () {
                return this.placeholderItem
            }
        },

        head() {
            return {
                title: 'Register'
            }
        },
    }
</script>
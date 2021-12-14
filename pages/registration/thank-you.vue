<template>
    <div class="main-container">
        
        <SectionHomeHero />

        <!--Login Register section start-->
        <div class="login-register-section section-padding-bottom mg-t-50">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 col-lg-6">
                        <div class="">
                            <h3 class="title">Thank you for registering. Our sales team will contact you with portal login details to access Advisor only content. </h3>
                            <n-link to="/products/"><button class="btn btn-dark">View our funds</button> </n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import eventData from '~/data/event'
    
    export default {
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
    };
</script>


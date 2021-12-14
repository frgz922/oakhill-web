<template>
    <div class="section-padding position-relative">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="newsletter-content">
                        <h2 class="title">Sign up for product <span>Alerts</span></h2>
                        <p>Product alerts and notifications are for advisors only</p>
                        <div class="newsletter-form">
                            <form>
                                <input type="email" placeholder="Enter E-mail Address">
                                <button class="btn btn-primary btn-hover-secondary">Subscribe</button>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    };
</script>

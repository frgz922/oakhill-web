<template>
    <div class="section-padding" :style="{ backgroundColor: '#f5f7fa' }">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-center mg-b-50" data-aos="fade-up">
                <h2 class="title"> Current Products</h2>
            </div>
            <!-- Section Title End -->

            <!-- Courses Wrapper Start -->
            <div class="row">
                <div class="col-12 max-mb-30" data-aos="fade-up" v-for="course in courseData.coursePostItem.slice(0, 6)" :key="course.id">
                    <DemoProductList :course="course" />
                </div>
            </div>
            <!-- Courses Wrapper End -->
        </div>
    </div>
</template>

<script>
    import courseData from '~/data/demo-products'

    export default {
        components: {
            DemoProductList: () => import('@/components/DemoProductList')
        },

        data () {
            return {
                courseData
            }
        }
    };
</script>
<template>
    <div class="section-padding" :style="{ backgroundColor: '#f5f7fa' }">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-center mg-b-50" data-aos="fade-up">
                <h2 class="title"> Fund Documents</h2>
            </div>
            <!-- Section Title End -->

            <!-- Courses Wrapper Start -->
            <div class="row">
                <div class="col-12 max-mb-30" >

                        <div class="container">
                            <table class="table table-sm table-dark" data-aos="fade-up" v-for="course in courseData.coursePostItem.slice(0, 6)" :key="course.id">
                            <caption>Regulatory Documents</caption>
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Fund Manager</th>
                                    <th scope="col">Document</th>
                                    <th scope="col">Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <DemoProductList :course="course" />
                            </tbody>
                            </table>
                        </div>


                    
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
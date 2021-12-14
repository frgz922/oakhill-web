<template>


        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>{{ course.title }}</td>
            <td>@mdo</td>
        </tr>


</template>

<script>
    export default {
        props:['course']
    };
</script>
<template>
    <div class="home">
        <h1>{{ msg }} Page</h1>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Home',
    components: {},
    setup() {
        let msg = ref('this is home page')
        return {
            msg
        }
    }
}
</script>

<style lang="less" scoped></style>

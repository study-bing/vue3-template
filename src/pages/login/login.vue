<template>
    <div class="login">
        <h1>{{ msg }} Page</h1>
        {{ name }}
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'login',
    components: {},
    setup(props, content) {
        console.log(props, content)
        let msg = ref('this is login page')
        let store = useStore()
        store.commit('login/setInfo', { name: 'name' })
        let name = computed(() => store.getters['login/userInfo'].name)
        return {
            msg,
            name
        }
    }
}
</script>

<style lang="less" scoped></style>

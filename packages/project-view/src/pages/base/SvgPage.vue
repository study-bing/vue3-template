<template>
    <div class="">
        <h1 class="m-top-20 m-bottom-20">全局的svg</h1>
        <ul class="icon-list">
            <li v-for="svg in svgList" :key="svg" @click="copyHandle(svg)">
                <SvgIcon :name="svg" />
                <span class="icon-name">{{ svg }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { copyUrl } from '$modules/utils'
let svgList = ref([])
import { ElMessage } from 'element-plus'
const getSvg = urls => {
    let reg = /(.+).svg$/
    return urls.map(el => {
        let content = el.split('/').pop()
        return content.match(reg)[1]
    })
}
const copyHandle = svg => {
    let copyText = `<SvgIcon name="${svg}" />`
    copyUrl(copyText)
}
onMounted(() => {
    ElMessage({
        message: 'Congrats, this is a success message.',
        type: 'success',
    })
    let svgs = []
    const comContext = import.meta.globEager('../../assets/svg/**/*.svg')
    Object.keys(comContext).forEach(com => {
        const mod = comContext[com].default || {}
        const modList = Array.isArray(mod) ? [...mod] : [mod]
        svgs.push(...modList)
    })
    svgList.value = getSvg(svgs)
})
</script>

<style scoped>
.icon-list {
    display: flex;
    border: 1px solid #eee;
    border-radius: 4px;
    flex-wrap: wrap;
    margin-top: 20px;
}
.icon-list li {
    padding: 20px 10px;
    height: 150px;
    display: flex;
    flex-direction: column;
    width: 150px;
    align-content: center;
    align-items: center;
    justify-content: center;
    height: 120px;
    color: #666;
    font-size: 13px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
}
.icon-name {
    color: #505050;
    margin-top: 20px;
    cursor: pointer;
}
</style>

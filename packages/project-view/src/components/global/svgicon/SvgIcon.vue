<!--
 * @Author: linbin
 * @Date: 2022-03-01 11:28:19
 * @LastEditTime: 2022-03-01 15:22:15
 * @LastEditors: linbin
 * @Description: svg组件
 * @FilePath: /vue3-template-vite/packages/project-view/src/components/global/svgicon/SvgIcon.vue
-->
<template>
    <svg :class="svgClass" aria-hidden="true" :style="styleObject">
        <use :href="symbolId" />
    </svg>
</template>
<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
    name: 'SvgIcon',
    props: {
        prefix: {
            type: String,
            default: 'icon',
        },
        name: {
            type: String,
            required: true,
        },
        className: {
            type: String,
            default: '',
        },
        currentColor: {
            type: String,
            default: '',
        },
        width: {
            type: [Number, String],
            default: 22,
        },
        height: {
            type: [Number, String],
            default: 22,
        },
    },
    setup(props) {
        const symbolId = computed(() => `#${props.prefix}-${props.name}`)
        const svgClass = computed(() => {
            let initCss = 'svg-icon '
            if (props.readOnly) {
                initCss += 'read-only '
            }
            if (props.className) {
                initCss += props.className
            }
            return initCss
        })
        const styleObject = computed(() => {
            return `width:${props.width}px;height:${props.height}px;`
        })
        return { symbolId, svgClass, styleObject }
    },
})
</script>
<style scope>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.1em; /* 因icon大小被设置为和字体大小一致，而span等标签的下边缘会和字体的基线对齐，故需设置一个往下的偏移比例，来纠正视觉上的未对齐效果 */
    fill: currentColor; /* 定义元素的颜色，currentColor是一个变量，这个变量的值就表示当前元素的color值，如果当前元素未设置color值，则从父元素继承 */
    overflow: hidden;
    cursor: pointer;
    flex-shrink: 0;
}
.read-only {
    cursor: initial;
}
</style>

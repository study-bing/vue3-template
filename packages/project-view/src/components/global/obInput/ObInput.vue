<template>
    <el-input :modelValue="modelValue" @input="updateVal" @change="changeVal" v-bind="$attrs" />
</template>
<script>
import { setValue, isEmpty } from './setValue'
export default {
    name: 'obInput',
    props: {
        modelValue: {
            type: [String, Number], //String | Number
            default: '',
        },
        typeValue: {
            type: [String, Number], //String | Number
            default: '',
        },
        minValue: {
            type: [String, Number], //String | Number
            default: '',
        },
        maxValue: {
            type: [String, Number], //String | Number
            default: '',
        },
    },
    setup(props, context) {
        // 输入更新值
        const updateVal = (val) => {
            //获取到input元素里面的值，
            let targetVal = val.trim()
            if (props.typeValue) {
                targetVal = setValue(targetVal, props.typeValue)
            }
            // 发送事件和值
            context.emit('update:modelValue', targetVal)
        }
        // 失去交点或者回车时判断值
        const changeVal = (val) => {
            if (['int', 'number'].includes(props.typeValue)) {
                if (!isEmpty(props.minValue) && Number(val) <= Number(props.minValue)) {
                    context.emit('update:modelValue', Number(props.minValue))
                    return
                }
                if (!isEmpty(props.maxValue) && Number(val) > Number(props.maxValue)) {
                    context.emit('update:modelValue', Number(props.maxValue))
                    return
                }
                // 发送事件和值
                context.emit('update:modelValue', Number(val))
            }
        }
        return {
            changeVal,
            updateVal,
        }
    },
}
</script>

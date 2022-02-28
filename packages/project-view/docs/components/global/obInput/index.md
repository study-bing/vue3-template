# Input 输入框

:::demo Input 输入框

```vue
<template>
	<ob-input v-model="value" />
</template>
<script setup>
import {ref} from 'vue'
    const value = ref('')
</script>
```

:::

|  Attribute   |  Description  |  Type  |  Accepted Values	|  Default  |
|  ----  | ----  |  ----  | ----  | ----  |
| typeValue  | 类型 | string / number | int：整数，cen：中文、整数、英文，noText：字母,整数,下划线，number：数字，noWord：不能输入汉字，en：字符整数，ce：字符整数，onlyE：英文下划线 |-|
| minValue  | 最小值 | string / number | - |-|
| maxValue  | 最大值 | string / number | - |-|

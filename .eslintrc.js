module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    rules: {
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // allow debugger during development
        'arrow-parens': 0, // 箭头函数用小括号括起来
        'no-tabs': 'off',
        quotes: ['error', 'single'],
        'no-console': 'off', //禁止使用console
        'generator-star-spacing': 'off', // allow async-await
        camelcase: [
            'error',
            {
                properties: 'never'
            }
        ], //强制驼峰法命名
        eqeqeq: 'error', //  #使用带引号替代双引号
        'no-extend-native': 2, //禁止扩展native对象
        'no-mixed-spaces-and-tabs': [2, false], //禁止混用tab和空格
        'no-multi-spaces': 1, //不能用多余的空格
        'no-multiple-empty-lines': [
            1,
            {
                max: 2
            }
        ], //空行最多不能超过2行
        'no-native-reassign': 2, //不能重写native对象
        'no-trailing-spaces': 1, //一行结束后面不要有空格
        'no-undef': 1, //不能有未定义的变量
        'no-eval': 1, //禁止使用eval
        'vue/no-parsing-error': [
            2,
            {
                'x-invalid-end-tag': false
            }
        ],
        'no-dupe-keys': 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
        'no-dupe-args': 2, //函数参数不能重复
        "prefer-template":"error",//以编程方式构建字符串时，使用模板字符串而不是连接符 例:How are you, ${name}?
        "prefer-arrow-callback":"error",//当你必须要使用匿名函数（如在传递内联回调时），请使用箭头函数
        "no-dupe-class-members":"error",//避免重复的类成员
        "no-duplicate-imports":"error",//同一个路径只使用一次import
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",//.单行元素的配置禁止在右括号前换行
            "multiline": "always"//多行元素的配置要求在右方括号前换行。
        }],
        "no-var":"error",//不得申明var用let
        'vue/html-closing-bracket-spacing': ["error", {
            "startTag": "never",
            "endTag": "never",
            "selfClosingTag": "never"
        }],
        "vue/no-multiple-template-root": "off"
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}

module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          '$components': '@/components',
          '$assets': '@/assets',
          '$services': '@/services',
          '$pages': '@/pages',
          '$modules': '@/modules',
        }
      }
    }
  }

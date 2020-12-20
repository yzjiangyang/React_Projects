const {override, addLessLoader, fixBabelImports} = require('customize-cra')

module.exports = override(
    fixBabelImports('antd', {
        librayDirectory: 'es',
        style: 'css'
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled :true
        }
    })
)


var utils = require('loader-utils')
//这个loader用来解析txt文件
module.exports = function(source) {
    console.log(this);
    console.log(source);
    const options = utils.getOptions(this)
    console.log(options);
    return `export default {}`;
};

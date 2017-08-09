const Jimp = require("jimp");
const path = require('path');
const fs = require('fs');

/**
 * @param {string} filepath 文件路径,绝对路径
 * @param {string} distpath 生成之后的存放路径
 * @param {number} width 裁切后的宽度
 * @param {number} height 裁切后的高度
 * @param {number} x 裁切的始x点
 * @param {number} y 裁切的始y点
 * @return {Promise}
 */
module.exports = function(filepath,distpath,width,height,x,y) {
    return new Promise(function(resolve,reject){
        if ( !fs.existsSync(filepath) ) {
            reject({ret:-1,error:new Error('file ' + filepath +' is not exist')});
            return ;
        }
        let res = path.parse(filepath),
            filename = res.name,
            suffix = res.ext,
            distfilename = filename + '_' + 'crop' + '_' + Date.now() + suffix;
        let distfilepath = path.resolve(distpath,distfilename);
        Jimp.read(filepath)
            .then(function(image){
                image
                    .crop(width,height,x,y)
                    .write(distfilepath);
                resolve(distfilepath);
            }).catch(function(err){
                reject({ret:-2,error:err});
            });
    });
}
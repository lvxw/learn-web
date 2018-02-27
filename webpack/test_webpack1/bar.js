/*export default function bar() {
    //这种方式也可以
    return "hello world!"
}*/


function bar_cur() {
    return "hello world!"
}

var a_cur = "the world is pretty!"

module.exports={
    bar:bar_cur,
    a:a_cur
};


/*
    每个js文件只能有有个export 或者 module.exports
 */

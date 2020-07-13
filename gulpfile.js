const gulp = require("gulp");
const {exec} = require("child_process");
const livereload = require('gulp-livereload')
function compile(cb) {
    //执行编译命令 layaair2-cmd compile 
    let process = exec("layaair2-cmd compile");
    process.stdout.on("data",(data)=>{
        console.log(data);
    });
    process.stderr.on("data",(data)=>{
        console.log(data);
    });
    process.on("exit",(code,signal)=>{
        console.log("success");
        console.log(code,signal);
        // console.log(cb,"cb")
        // cb();
    })
}
//创建一个名称为compile的gulp任务
gulp.task("compile", function(){
    /**
     * @ 监听src目录下的所有子目录的所有文件，
     * @ 延迟1000毫秒，才执行下次监听，避免手欠的同学，因连续保存触发多次连续编译
     * @ 监听生效后执行的函数
     */
    // livereload.listen()
    gulp.watch('src/**/*.*', {delay:200}, compile);
});
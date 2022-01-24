layui.use(['layer','form'],function(){
    let layer = layui.layer,
        form = layui.form;

        form.on('submit(networkSettingSubmit)',function(data){
            let field = data.field;
            console.log(field);
            //todo ...
            return false;
        })
})
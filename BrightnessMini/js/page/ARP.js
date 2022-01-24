layui.use(['jquery','element','table','layer','form'],function(){
    let $ = layui.jquery,
    table = layui.table,
    layer = layui.layer,
    form = layui.form,
    element = layui.element;

    table.render({
        elem: '#demo'
        ,height: 460
        ,url: '../../json/table.json'  //数据接口
        ,page: true //开启分页
        ,cols: [[ //表头
          {type: 'checkbox', width:80, sort: true, fixed: 'left'}
          ,{field: 'id', title: 'ID', width:60, sort: true}
          ,{field: 'desc', title: '描述', width:150}
          ,{field: 'ip', title: 'IP地址', width:120}
          ,{field: 'mac', title: 'MAC地址', width:160} 
          ,{field: 'interface', title: '接口', width: 100}
          ,{field: 'type', title: '类型', width: 70}
          ,{field: 'status', title: '状态', width: 70}
          ,{fixed: 'right',title:'操作', width:140, align:'center', toolbar: '#barDemo'} //这里的toolbar值是模板元素的选择器
        ]]
    });

    document.querySelector('#addARP').onclick = function(){
      layer.open(
            {
                title:'添加设备',
                type:1,
                content:$('#arpForm'),
                area: ['800px','500px'],
                btn: ['确定', '取消'],
                success:function(layero, index){
                    //监听表单提交
                    form.on('submit(arpSubmit)',function(data){
                        let field = data.field;
                        console.log(field);
                        //ajax提交数据
                        //todo ...
                        layer.msg('数据提交成功',{icon:1,end:function(){
                            layer.close(index);//关闭当前弹窗
                        }})
                        return false;//阻止默认事件，阻止自动关闭
                    })                  
                },
                yes:function(index, layero){
                    layero.find('#arpSubmit').click();//触发提交按钮
                },
            }
        )
    }
})
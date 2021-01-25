$(function() {
   let form = layui.form;
    axios.get('/my/userinfo').then((res)=> {
        console.log(res);
        //formTest 即 class="layui-form" 所在元素属性 lay-filter="" 对应的值
        form.val("form", res.data.data);
    })
    form.verify({
        nickname:function(value){ 
          if(value.length>6){
            return '用户名不能超过6个字符';
          }
          },
 })
})
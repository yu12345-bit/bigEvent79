// 发送ajax请求 获取用户信息
function getUserInfo () {
    axios.get("/my/userinfo").then((res)=> {
        // console.log(res);
        if (res.data.status !==0) {
            return  layer.msg('获取用户信息失败')
        }
        avatarAndName(res.data)
    })
}
getUserInfo()
function avatarAndName (res) {
    // console.log('res打印结果为',res);
    let name = res.data.nickname||res.data.username 
    $('#weicome').text('欢迎'+name)
    $('#come').text(name)
    if (res.data.user_pic) {
        $('.layui-nav-img').attr('src',res.data.user_pic).show()
        $('.text-avatar').hide()
    }else {
        $('.layui-nav-img').hide()
        let first = name[0].toUpperCase()
        $(".text-avatar").text(first).show()
    }
 $('#logoutBtn').click(function() {
    layer.confirm('确定退出', {icon: 3, title:'提示'}, function(index){
        //do something
         localStorage.removeItem('token')
         location.href = '/home/login.html'
        layer.close(index);
      });
 })
 
}
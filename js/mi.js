$(document).ready(function () {
    //路由器
    let router = {
        '#/pages/home': './pages/home.html',
        '#/pages/category': './pages/category.html',
        '#/pages/cart': './pages/cart.html',
        '#/pages/me': './pages/me.html',
    }
    //加载home页面
    $('#mywrap').load(router['#/pages/home']);
    //监听hashchange事件
    window.addEventListener('hashchange', function () {
        //console.log(this.location.hash);
        //加载hash对应页面
        $('#mywrap').load(router[this.location.hash]);
    });
    //事件委托
    $('#mytab').on('tap', function (e) {
        let target = e.target;
        if (target.nodeName === 'I' || target.nodeName === 'P') {
            $(target).parents('li').addClass('current').siblings().removeClass('current');
            // console.log(target);
        }
        // console.log('ok');
    })
})
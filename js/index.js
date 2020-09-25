window.addEventListener('load', function() {
    var focus = document.querySelector('.focus')
    var ul = focus.children[0];
    var ol = focus.children[1];
    var w = focus.offsetWidth
    var index = 0;
    var timer = setInterval(function() {
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all 0.3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000)
    ul.addEventListener('transitionend', function() {
        if (index >= 3) {
            index = 0;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    })
    var startX = 0;
    var moveX = 0;
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);
    })
    ul.addEventListener('touchmove', function(e) {

        moveX = e.targetTouches[0].pageX - startX;
        ul.style.transition = 'none';
        var translatex = -index * w + moveX;
        ul.style.transform = 'translateX(' + translatex + 'px)';
        e.preventDefault(); // 阻止滚动屏幕的行为
    })
    ul.addEventListener('touchend', function() {
        if (Math.abs(moveX) > 50) {
            if (moveX > 0) {
                index--;
            } else {
                index++;
            }
            var translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else {
            var translatex = -index * w;
            ul.style.transition = 'all .1s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }

        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            var translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
    })

})
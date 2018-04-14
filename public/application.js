$(".article").throwable({
    containment: [0, 300, $(window).width(), $(window).height()],
    drag: true,
    gravity:{x:0,y:0},
    shape:"box",
    autostart:false,
    bounce:0,
    damping:100,
    collisionDetection: true
});

$("pre").throwable({
    containment: [0, 300, $(window).width(), $(window).height()],
    drag: true,
    gravity:{x:0,y:0},
    shape:"box",
    autostart:false,
    bounce:0,
    damping:100,
    collisionDetection: true
});

$("span").throwable({
    containment: [0, 300, $(window).width(), $(window).height()],
    drag: true,
    gravity:{x:0,y:0},
    shape:"box",
    autostart:false,
    bounce:0,
    damping:100,
    collisionDetection: true
});

$("h2").throwable({
    containment: [0, 300, $(window).width(), $(window).height()],
    drag: true,
    gravity:{x:0,y:0},
    shape:"box",
    autostart:false,
    bounce:0,
    damping:100,
    collisionDetection: true
});

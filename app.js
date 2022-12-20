$("body").keydown(function (event) {
    if (event.which === 65) {
        $("audio").get(0).play()
        $(".key[data-key=65]").addClass("playing")
    }
    if (event.which === 83) {
        $("audio").get(1).play()
        $(".key[data-key=83]").addClass("playing")
    }
    if (event.which === 68) {
        $("audio").get(2).play()
        $(".key[data-key=68]").addClass("playing")
    }
    if (event.which === 70) {
        $("audio").get(3).play()
        $(".key[data-key=70]").addClass("playing")
    }
    if (event.which === 71) {
        $("audio").get(4).play()
        $(".key[data-key=71]").addClass("playing")
    }
    if (event.which === 72) {
        $("audio").get(5).play()
        $(".key[data-key=72]").addClass("playing")
    }
    if (event.which === 74) {
        $("audio").get(6).play()
        $(".key[data-key=74]").addClass("playing")
    }
    if (event.which === 75) {
        $("audio").get(7).play()
        $(".key[data-key=75]").addClass("playing")
    }
    if (event.which === 76) {
        $("audio").get(8).play()
        $(".key[data-key=76]").addClass("playing")
    }
})
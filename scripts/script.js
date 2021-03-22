setInterval(() => {
    $('#loading-flame').css({
        opacity: `${Math.floor(Math.random() * 50) + 51}%`
    })
}, 100)

$("#content").hide();

window.addEventListener('load', () => {
    setTimeout(() => {
        $("#loading-screen").fadeOut();
        $("#content").fadeIn();
    }, 2500)
})

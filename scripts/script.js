
setInterval(() => {
    $('#loading-flame').css({
        opacity: `${Math.floor(Math.random() * 50) + 51}%`
    })
}, 100)

$("#content").hide();

if (Cookies.get("theme") == undefined) {
    Cookies.set("theme", "light", { sameSite:'strict' });
}

setTheme(Cookies.get("theme"));

function setSrc(element, src) {
    $(element).attr("src", src);
}

function setTheme (theme) {
    if (theme == 'dark') {
        setSrc("#loading-bomb", "assets/bomb_white.svg");
        setSrc("#loading-waves", "assets/waves_white.svg");
        setSrc("#bomb-logo", "assets/bomb-logo_white.svg");
        setSrc("#toggle img", "assets/dark_toggle.svg");
        setSrc("#telegram", "assets/telegram_white.svg");
        setSrc("#twitter", "assets/twitter_white.svg");
        setSrc("#discord", "assets/discord_white.svg");
        document.documentElement.style.setProperty('--background-c', '#181818');
        document.documentElement.style.setProperty('--second-color', '#373737');
        document.documentElement.style.setProperty('--third-color', '#eeeeee');
        document.documentElement.style.setProperty('--base-color', '#ffffff');
    }
    if (theme == 'light') {
        setSrc("#loading-bomb", "assets/bomb.svg");
        setSrc("#loading-waves", "assets/waves.svg");
        setSrc("#bomb-logo", "assets/bomb-logo.svg");
        setSrc("#toggle img", "assets/light_toggle.svg");
        setSrc("#telegram", "assets/telegram.svg");
        setSrc("#twitter", "assets/twitter.svg");
        setSrc("#discord", "assets/discord.svg");
        document.documentElement.style.setProperty('--background-c', '#f5f5f5');
        document.documentElement.style.setProperty('--second-color', '#ffffff');
        document.documentElement.style.setProperty('--third-color', '#373737');
        document.documentElement.style.setProperty('--base-color', '#181818');
    }
}

function switchTheme() {
    console.log(Cookies.get('theme'))
    if (Cookies.get("theme") == "dark") {
        Cookies.set("theme", "light", { sameSite:'strict' });
        return setTheme('light')
    } else {
        Cookies.set("theme", "dark", { sameSite:'strict' });
        return setTheme('dark')
    } 
}

window.addEventListener('load', () => {
    setTimeout(() => {
        $("#loading-screen").fadeOut();
        $("#content").fadeIn();
    }, 2500)
})

function prepare() {
        var title = document.getElementById("prepare-script").getAttribute("data-title");
        if (typeof title != "string") {
            title = "Стихотворение";
        }
        $("#header-image").load("/header_image.html");
        $("#header-text").load("/header_text.html", function () {
            document.getElementById("upper-text").textContent = title;
        });
        $("#menu").load("/menu.html");
        var container = document.getElementById("main-container");
        container.style.height = window.innerHeight.toString() + "px";
        window.addEventListener('resize', function () {
            container.style.height = window.innerHeight.toString() + "px";
        });
        $(document).ready(function () {
            $(".preloader").hide();
            //$("#preloader_div_id").hide();
            //$("#preloader_gif_id").hide();
            //document.getElementById("preloader_id").style.display="none";
            //document.getElementById("preloader_div_id").style.display="none";
            //document.getElementById("preloader_gif_id").style.display="none";
        });
    }
prepare();
function showHideServiceDescription(id, filter) {
    if ($("#" + id).css("display") === "none") {
        $(".descripcion-servicio").css("display", "none");
        $("#" + id).css("display", "block");
    } else {
        $("#" + id).css("display", "none");
    }
}

function showHideForm() {
    if ($("#forma-cotizacion").css("display") === "none") {
        $("#forma-cotizacion").fadeIn(900);
        $("#forma-cotizacion").css("display", "block");
    } else {
        $("#forma-cotizacion").fadeIn(900).fadeOut("slow", function () {
            $("#forma-cotizacion").css("display", "none");
        });
    }
}

function ok() {
    alert("ok");
}

$(document).ready(function () {
    $('.categoria').css("height",$('.categoria').css(("width"*540)/800));
});

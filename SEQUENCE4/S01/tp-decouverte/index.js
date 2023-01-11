 jQuery(document).ready(function(){
 console.log("Jquery est bien chargé et la page est prête!");
 });

jQuery("#zoom").click(function () {
    console.log("click sur zoom");
    zoom()

});

jQuery("#dezoom").click(function () {
    console.log("click sur dezoom");
    dezoomer()

});


jQuery(document).ready(function () {
    console.log("Jquery est bien chargé et la page est prête!");
    jQuery("#chargement").hide();
    jQuery("#contenu").show();
}
);

function zoom() {
    jQuery("#zoom").prop("disabled", true);
    jQuery("#dezoom").prop("disabled", false);
    console.log("click sur zoom");
    jQuery("img").each(function () {
        console.log("Une image trouvée ! a zoomer");
        jQuery(this).css("height", "100vh");
    })


}


function dezoomer() {
    jQuery("#dezoom").prop("disabled", true);
    jQuery("#zoom").prop("disabled", false);
    console.log("click sur dezoom");
    jQuery("img").each(function () {
        console.log("Une image trouvée ! a dezoomer");
        jQuery(this).css("height", "25vh");
    })


}

jQuery(document).keyup(function (touche) {
    var appui = touche.which || touche.keycode;
    if (appui == 109)
        dezoomer()
    else
        if (appui == 107)
            zoom()
    console.log(appui);
});
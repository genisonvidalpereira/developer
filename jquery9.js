
$("#texto1").css("text-align","center")

$( ".area" ).css( "border", "1px solid black" );
$( ".area" ).css( "width", "auto" );
$( ".area" ).css( "max-width", "100%" );
$( ".area" ).css( "backgroundColor", "gray" );
$( ".area" ).css( "padding", "0px 12px" );
$( ".area" ).css( "fontsize", "0" );
$( ".area" ).css( "margim", "0" );

$( ".area-titulo" ).css( "display", "block" );

$( "#titulo" ).css( "color", "green" );
//$( "#titulo" ).css( "border", "1px solid black" );
$( "#titulo" ).css( "padding", "15px 0" );
$( "#titulo" ).css( "color", "green" );
$( "#titulo" ).css( "fontsize", "16px" );
$( "#titulo" ).css( "display", "inline-block" );
$( "#titulo" ).css( "width", "90%" );

$( "#toggle-tab" ).css( "width", "0%" );
$( "#toggle-tab" ).css( "text-align", "center" );
$( "#toggle-tab" ).css( "cursor", "pointer" );


$("#toggle-tab").click(function() {

    $("#texto").fadeToggle();
    $("#toggle-tab").toggleClass("flip");

});
    
$( "#texto2" ).css( "color", "green" );
//$( #texto2" ).css( "border", "1px solid black" );
$( "#texto2" ).css( "padding", "15px 0" );
$( "#texto2" ).css( "color", "green" );
$( "#texto2" ).css( "fontsize", "16px" );
$( "#texto2" ).css( "display", "inline-block" );
$( "#texto2" ).css( "width", "90%" );
$( "#texto3" ).css( "color", "green" );
$( "#texto" ).css( "color", "green" );

$( "#toggle" ).css( "width", "0%" );
$( "#toggle" ).css( "text-align", "center" );
$( "#toggle" ).css( "cursor", "pointer" );

$("#toggle").click(function() {

    $("#texto3").toggle();
    $("#toggle").toggleClass("flip");
    
});

$(".header").css("text-align","center");
$( ".row" ).css( "border", "1px solid black" );
$( ".col" ).css( "border", "1px solid black" );
$(".header1").css("text-align","center");
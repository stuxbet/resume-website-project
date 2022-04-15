$( document ).ready( function() {
    $( "#BTN_WEL" ).click( function() { $("#WIN_WEL").fadeIn( "fast", function(){} ); } );
    $( "#BTN_TEA" ).click( function() { $("#WIN_TEA").fadeIn( "fast", function(){} ); } );
    $( "#BTN_SCH" ).click( function() { $("#WIN_SCH").fadeIn( "fast", function(){} ); } );
    $( "#BTN_SER" ).click( function() { $("#WIN_SER").fadeIn( "fast", function(){} ); } );
    $( "#BTN_CON" ).click( function() { $("#WIN_CON").fadeIn( "fast", function(){} ); } );
    $( "#BTN_CV" ).click( function() { $("#WIN_CV").fadeIn( "fast", function(){} ); } );
    $( "#BTN_BKG" ).click( function() { $("#WIN_BKG").fadeIn( "fast", function(){} ); } );
    $( "#BTN_DIV" ).click( function() { $("#WIN_DIV").fadeIn( "fast", function(){} ); } );
    $( "#BTN_SAM" ).click( function() { $("#WIN_SAM").fadeIn( "fast", function(){} ); } );
    $( "#BTN_PHIL" ).click( function() { $("#WIN_PHIL").fadeIn( "fast", function(){} ); } );


    $( ".BTN_CLOSE" ).click( function() {
      $( this ).closest( ".window" ).fadeOut( "fast", function() {} );
    } );
  } );
  
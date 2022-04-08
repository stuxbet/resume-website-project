$( document ).ready( function() {
    $( "#BTN_WEL" ).click( function() { $("#WIN_WEL").fadeIn( "fast", function(){} ); } );
    $( "#BTN_TEA" ).click( function() { $("#WIN_TEA").fadeIn( "fast", function(){} ); } );
    $( "#BTN_EXA" ).click( function() { $("#WIN_EXA").fadeIn( "fast", function(){} ); } );
    $( "#BTN_EXP" ).click( function() { $("#WIN_EXP").fadeIn( "fast", function(){} ); } );
    $( "#BTN_CON" ).click( function() { $("#WIN_CON").fadeIn( "fast", function(){} ); } );
    
    $( ".BTN_CLOSE" ).click( function() {
      $( this ).closest( ".window" ).fadeOut( "fast", function() {} );
    } );
  } );
  
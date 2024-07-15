$(document).ready(function() {
  const sections = [
      "#WIN_WEL", "#WIN_TEA", "#WIN_SCH", "#WIN_SER", 
      "#WIN_CON", "#WIN_CV", "#WIN_BKG", "#WIN_DIV", 
      "#WIN_SAM", "#WIN_PHIL"
  ];

  function showSection(sectionToShow) {
      sections.forEach(section => {
          if (section === sectionToShow) {
              $(section).fadeIn("fast");
          } else {
              $(section).hide();
          }
      });
  }

  $("#BTN_WEL").click(function() { showSection("#WIN_WEL"); });
  $("#BTN_TEA").click(function() { showSection("#WIN_TEA"); });
  $("#BTN_SCH").click(function() { showSection("#WIN_SCH"); });
  $("#BTN_SER").click(function() { showSection("#WIN_SER"); });
  $("#BTN_CON").click(function() { showSection("#WIN_CON"); });
  $("#BTN_CV").click(function() { showSection("#WIN_CV"); });
  $("#BTN_BKG").click(function() { showSection("#WIN_BKG"); });
  $("#BTN_DIV").click(function() { showSection("#WIN_DIV"); });
  $("#BTN_SAM").click(function() { showSection("#WIN_SAM"); });
  $("#BTN_PHIL").click(function() { showSection("#WIN_PHIL"); });

  $(".BTN_CLOSE").click(function() {
      $(this).closest(".window").fadeOut("fast");
  });
});

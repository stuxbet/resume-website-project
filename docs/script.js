$(document).ready(function() {
  const sections = [
      "#WIN_WEL", "#WIN_CV", "#WIN_BKG", "#WIN_SK", "#WIN_CON", "#WIN_PG", "#WIN_WK"
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
  $("#BTN_CV").click(function() { showSection("#WIN_CV"); });
  $("#BTN_BKG").click(function() { showSection("#WIN_BKG"); });
  $("#BTN_SK").click(function() { showSection("#WIN_SK"); });
  $("#BTN_CON").click(function() { showSection("#WIN_CON"); });
  $("#BTN_WK").click(function() { showSection("#WIN_WK"); });
  $("#BTN_PG").click(function() { showSection("#WIN_PG"); });

  $(".BTN_CLOSE").click(function() {
      $(this).closest(".window").fadeOut("fast");
  });
});

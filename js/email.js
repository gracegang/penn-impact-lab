(function () {
  var contacts = {
    pi: [103,114,97,99,101,46,106,46,103,97,110,103,64,112,101,110,110,109,101,100,105,99,105,110,101,46,117,112,101,110,110,46,101,100,117]
  };
  function decode(values) {
    return values.map(function (code) { return String.fromCharCode(code); }).join("");
  }
  document.querySelectorAll(".email-link").forEach(function (button) {
    button.addEventListener("click", function () {
      var encoded = contacts[button.dataset.contact];
      if (!encoded) return;
      window.location.href = "https://outlook.office.com/mail/deeplink/compose?to=" + encodeURIComponent(decode(encoded));
    });
  });
})();
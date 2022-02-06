const buttons = document.querySelectorAll("button[id^=submit]");

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    selectedFunction = event.target.id;
    inputValue = event.target.parentNode.children[4].value;
    outputDiv = event.target.parentNode.children[8];
    outputDiv.innerHTML = main(selectedFunction, inputValue);
  });
});

var main = function (selected, input) {
  switch (selected) {
    case "submit-outputOwnValues":
      var myOutputValue = `hello ${input}`;
      return myOutputValue;

    case "submit-greeting":
      var myOutputValue = "Helloaaaaa " + input + ", you look great today!";
      return myOutputValue;

    case "submit-metricConversion":
      var distanceInKm = input;
      var distanceInMiles = distanceInKm * 0.62;
      var myOutputValue = distanceInMiles;
      return myOutputValue;

    case "submit-outputFormatting":
      var distanceInKm = input;
      var distanceInMiles = distanceInKm * 0.62;
      var myOutputValue = distanceInMiles;
      var myOutputValue = `Hi! ${input} km is equal to ${distanceInMiles} miles.`;
      return myOutputValue;

    default:
      break;
  }
};

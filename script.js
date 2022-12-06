// Write your JavaScript code here!

// const { pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let form = document.querySelector("form");

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   });
   

   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";
   

   form.addEventListener("submit", function(event) {
    // Refer to 25.9 on validating forms with JavaScript 
    // Refer to div w/ ID of launchForm for proper naming schemes
      event.preventDefault();

      let pilotInput = document.querySelector("input[name=pilotName]");
      let pilot = pilotInput.value;
      
      let copilotInput = document.querySelector("input[name=copilotName]");
      let copilot = copilotInput.value;
      
      let fuelInput = document.querySelector("input[name=fuelLevel");
      let fuelLevel = Number(fuelInput.value);
      
      let cargoInput = document.querySelector("input[name=cargoMass");
      let cargoLevel = Number(cargoInput.value);

      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
   });
});
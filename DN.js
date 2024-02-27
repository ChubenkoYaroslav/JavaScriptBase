function createCity(properties) {
  const city = {};

  for (let i = 0; i < properties.length; i++) {
    const property = properties[i];
    const userInput = prompt(`Enter ${property} for the city:`);

    if (userInput !== null && userInput.trim() !== "") {
      city[property] = userInput;
    } else {
     
      return {};
    }
  }

  return city;
}

const cityProperties = [
  "name",
  "area",
  "population",
  "main street",
  "mayor's name",
];

const dniproCity = createCity(cityProperties);

if (Object.keys(dniproCity).length > 0) {
  console.log(dniproCity);
} else {
  console.log("City creation canceled.");
}

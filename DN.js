function createCity(properties) {
  const [name, area, population, mainStreet, mayorName] = properties;

  const city = {
    name: "Dnipro",
    area: 409,
    population: 966000,
    "main street": "Yavornytskogo",
    "mayor's name": "B. Filatov",
  };

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
console.log(dniproCity);

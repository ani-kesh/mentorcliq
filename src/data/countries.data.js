export const getCountries = async function () {
  return await fetch("https://restcountries.com/v3.1/all")
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      if (result.length > 0) {
        return result;
      }
    });
};

export const getCities = async function () {
  return await fetch(
    "https://countriesnow.space/api/v0.1/countries/population/cities"
  )
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      return result;
    });
};

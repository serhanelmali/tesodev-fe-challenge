const getData = async (value) => {
  const response = await fetch(
    `http://localhost:80/search?searchterm=${value}`
  );
  const persons = await response.json();

  return persons.data;
};

export default getData;

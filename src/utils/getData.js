const getData = (url) => {
  const data = fetch(url)
    .then(response => response.json())
    .then(json => json)
    .catch(error => error);

  return data;
};

export default getData;

const JSONLoader = async () => {
  const response = await fetch('/MyJson.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

export default JSONLoader;

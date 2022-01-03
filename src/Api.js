export async function fetchData() {
  const num = Math.floor(Math.random() * (10)) + 1;
  const response = await fetch(
    `https://testimonialapi.toolcarton.com/api/${num}`
  );
  const data = await response.json();
  console.log(data);
  return data;
}

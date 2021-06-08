// fetch the data from the backend and return it as a JSON object
export const fetchProjectsList = () =>
  fetch("http://localhost:4000/projects").then((res) =>
    res.json()
  )
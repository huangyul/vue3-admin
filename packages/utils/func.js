import axios from "axios"

const sayHello = async (a, b) => {
  await axios.post("/").catch((err) => console.log(err))
  return a + b
}

export { sayHello }

import { add, multiply } from "./math.js";

const result1 = add(2, 3);       // define result1
const result2 = multiply(4, 5);  // define result2

document.getElementById("app").innerHTML = `
  <h2>Parcel Mini App</h2>
  <p>Add: ${result1}</p>
  <p>Multiply: ${result2}</p>
`;
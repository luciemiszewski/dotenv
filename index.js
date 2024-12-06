require("dotenv").config();

const cowsay = require("cowsay");
const name = process.env.MY_NAME;
const campus = process.env.CAMPUS;

console.log(
  cowsay.say({
    text: `I'm a ${name} moooodule, and I study at ${campus}`,
  })
);

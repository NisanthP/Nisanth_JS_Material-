let user = {
  name: "Sudhesh R",
  age: 27,
  city: "Pollachi",
  contact: "8754310000",
};

for (let prop in user) {
  console.log(prop + " : " + user[prop]);
}

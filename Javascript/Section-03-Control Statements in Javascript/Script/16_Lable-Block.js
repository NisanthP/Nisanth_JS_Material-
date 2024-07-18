let groups = [
  ["Ram", "Sam", "Ravi"],
  ["Kumar", "Sudhesh", "Sundar"],
  ["Rajesh", "Saranya", "Rahul"],
];

for (let group of groups) {
  inner: for (let member of group) {
    if (member.startsWith("R")) {
      console.log("found one starting with R:", member);
      break inner;
    }
  }
}

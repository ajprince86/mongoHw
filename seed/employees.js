const db = require(`../db`);
const Employee = require(`../models/employee`);

db.on(`error`, console.error.bind(console, `MongoDB connection error`));
const main = async () => {
  const employees = [
    {
      first_name: "Michael",
      last_name: "Jordan",
      email: "theGoat23@gmail.com",
      job_title: "Nba Owner",
      address: {
        street: "123 Bulls Avenue",
        city: "Chicago",
        state: "Illinois",
        zip: "60603",
      },
    },
    {
      first_name: "Lebron",
      last_name: "James",
      email: "theRealGoat6@yahoo.com",
      job_title: "Nba Player",
      address: {
        street: "123 Lakers Street",
        city: "Los Angeles",
        state: "California",
        zip: "90006",
      },
    },
    {
      first_name: "Bruce",
      last_name: "Springsteen",
      email: "jerseyBoy49@hotmail.com",
      job_title: "Singer",
      address: {
        street: "123 Monmouth Drive",
        city: "Newark",
        state: "New Jersey",
        zip: "07105",
      },
    },
    {
      first_name: "Bruce",
      last_name: "Wayne",
      email: "theDarkKnight88@protonmail.com",
      job_title: "Entreprenuer",
      address: {
        street: "18-45 Empire Road",
        city: "Gotham City",
        state: "Gotham",
        zip: "29348",
      },
    },
    {
      first_name: "Rosa",
      last_name: "Parks",
      email: "freedomForever7@aol.com",
      job_title: "Activist",
      address: {
        street: "43-12 Liberty Street ",
        city: "Detroit",
        state: "Michigan",
        zip: "48202",
      },
    },
  ];
  await Employee.insertMany(employees);
  console.log(`Created new employees`);
};

const run = async () => {
  await main();
};

run();

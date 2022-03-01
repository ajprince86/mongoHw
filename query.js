const db = require(`./db`);
const Employee = require(`./models/employee`);

db.on(`error`, console.error.bind(console, `MongoDB connection error`));

const findEmployees = async () => {
  const allEmployees = await Employee.find({});
  console.log(allEmployees);
};

const newEmployee = async () => {
  const employeeOne = new Employee({
    first_name: "Judge",
    last_name: "Judy",
    email: "judgeDreedMommy@gmail.com",
    job_title: "Judge",
    address: {
      street: "245-12 Laws Way",
      city: "New York",
      state: "New York",
      zip: "11004",
    },
  });
  await employeeOne.save();
  console.log(`Created a new employee`);
};

const main = async () => {
  const employee1 = new Employee({
    first_name: "Michael",
    last_name: "Jackson",
    email: "moonWalker80@hotmail.com",
    job_title: "Entertainer",
    address: {
      street: "78 Thriller Drive",
      city: "Gary",
      state: "Indiana",
      zip: "46405",
    },
  });
  await employee1.save();
  const employee2 = new Employee({
    first_name: "Kamala",
    last_name: "Harris",
    email: "vicePresident49@america.com",
    job_title: "Vice President of the United States of America",
    address: {
      street: "1600 Pennsylvania Avenue NW",
      city: "Washington",
      state: "District of Columbia",
      zip: "20500",
    },
  });
  await employee2.save();
  const employee3 = new Employee({
    first_name: "Beyonce",
    last_name: "Knowles",
    email: "destiny_child81@gmail.com",
    job_title: "Singer",
    address: {
      street: "789 Grammy Street",
      city: "Houston",
      state: "Texas",
      zip: "77001",
    },
  });
  await employee3.save();
};

const updateEmployee = async () => {
  const updated = await Employee.updateOne(
    { first_name: `Bruce` },
    { first_name: `Thomas` }
  );
  console.log(updated);
};

//Deleting a Book

const deleteEmployee = async () => {
  const deleted = await Employee.deleteOne({ last_name: `Jordan` });
  console.log(deleted);
};

const fullNames = async () => {
  const onlyFullNames = await Employee.find(
    {},
    { first_name: 1, last_name: 1, _id: 0 }
  );
  console.log(onlyFullNames);
};

const run = async () => {
  // await findEmployees();
  // await newEmployee();
  // await main();
  // await updateEmployee();
  // await deleteEmployee();
  await fullNames();
  db.close();
};

run();

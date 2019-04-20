const contacts = [
  {
    id: 1,
    fullName: "Genna Arnli",
    phoneNumber: "5278765234",
    email: "garnli0@photobucket.com",
    gender: "Female"
  },
  {
    id: 2,
    fullName: "Jojo Scotchford",
    phoneNumber: "7925766855",
    email: "jscotchford1@booking.com",
    gender: "Female"
  },
  {
    id: 3,
    fullName: "Kakalina Pietasch",
    phoneNumber: "3118199662",
    email: "kpietasch2@auda.org.au",
    gender: "Female"
  },
  {
    id: 4,
    fullName: "Araldo Coil",
    phoneNumber: "5887272284",
    email: "acoil3@behance.net",
    gender: "Male"
  },
  {
    id: 5,
    fullName: "Shadow Maffi",
    phoneNumber: "8455497996",
    email: "smaffi4@bravesites.com",
    gender: "Male"
  }
];

function view(data) {
  console.log("View all Data");
  // data.map()
  data.map(function(Obj) {
    console.log(Obj);
  });
  console.log("\n----------------------------------------------\n");
}

function add(data) {
  console.log("Add Contact Data");
  // spread operator ...
  let newContact = {
    id: 6,
    fullName: "Dita Nugraheni",
    phoneNumber: "085736093458",
    email: "DitaNugraheni@gmail.com",
    gender: "Female"
  };
  data.push(newContact);
  console.log(data);

  console.log("\n----------------------------------------------\n");
}

function edit(data, id) {
  console.log("Edit Selected Data");
  // array.filter
  // spread operator ...
  let editedCont = data.filter(function(contact) {
    if (contact.id === id) {
      contact.fullName = "Muhammad Nurman Ridho";
      // contact.phoneNumber = "085736093458";
      contact.email = "Ridhonrmn@gmail.com";
      return contact;
    }
  });
  console.log(editedCont);
  console.log("\n----------------------------------------------\n");
}

function remove(data, id) {
  console.log("Remove Selected Data");
  // array.filter
  // spread operator ....
  let remContact = data.filter(function(contact) {
    if (contact.id === id) {
      if (contact.id === id) {
        data.splice(data.indexOf(contact), 1);
      }
    }
  });
  console.log(data);
}

view(contacts);
add(contacts);
edit(contacts, 1);
remove(contacts, 3);

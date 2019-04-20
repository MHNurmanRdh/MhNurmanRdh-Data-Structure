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
  console.log("***** View All Data *****\n");
  // data.map()
  data.map(function(contact) {
    console.log(contact);
  });
  console.log("\n----------------------------------------------\n");
}

function add(data) {
  console.log("***** Add New Data *****\n");
  // spread operator ...
  const newCont = [...data];
  let addNewContact = {
    id: 6,
    fullName: "Dita Nugraheni",
    phoneNumber: "085736093458",
    email: "DitaNugraheni@gmail.com",
    gender: "Female"
  };
  newCont.push(addNewContact);
  console.log(newCont);
  console.log("\n----------------------------------------------\n");
  // console.log(data); //untuk cek data asli
}

function edit(data, id) {
  console.log("***** Edit Selected Data *****\n");
  // array.filter
  // spread operator ...
  data.filter(function(contact) {
    const editContact = {
      ...contact
    };
    if (editContact.id === id) {
      editContact.fullName = "Muhammad Nurman Ridho";
      // contact.phoneNumber = "085736093458";
      editContact.email = "Ridhonrmn@gmail.com";
      // return contact;
    }
    console.log(editContact);
  });
  console.log("\n----------------------------------------------\n");
  // console.log(data); //untuk cek data asli
}

function remove(data, id) {
  console.log("***** Remove Selected Data *****\n");
  // array.filter
  // spread operator ....
  const removeData = [...data];
  removeData.filter(function(contact) {
    if (contact.id === id) {
      removeData.splice(removeData.indexOf(contact), 1);
    }
  });
  console.log(removeData);
  // console.log("\n--------------------------------------------\n");
  // console.log(data); //untuk cek data asli
}

view(contacts);
add(contacts);
edit(contacts, 3);
remove(contacts, 3);

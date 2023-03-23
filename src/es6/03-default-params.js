function newUser(name, age, country) {
  var name = name || "Rafa";
  var age = age || 28;
  var country = country || "Cuba";
  console.log(name, age, country);
}

newUser();
newUser("Pinga", 28, "mojón");

function newAdmin(name = "Ocar", age = 32, country = "USA") {
  console.log(name, age, country);
}

newAdmin();
newAdmin("Pedro", 21, "Vzl");

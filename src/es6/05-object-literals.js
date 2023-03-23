//enahced object literalas

function newUser(user, age, country, uId) {
  return {
    user: user,
    age: age,
    country: country,
    id: uId,
  };
}

console.log(newUser("gndx", 34, "MX", 1));

// create password element collection
let collection = [];

// get what users picked
function updateCollection(options, type, start, end) {
  switch (options[type]) {
    case "on":
      collection = collection.concat(
        [...Array(end - start + 1)].map((_, i) =>
          String.fromCharCode(i + start)
        )
      );
      break;
    default:
      break;
  }
}

// Get random characters to generate password
function sample(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generatePassword(options) {
  let password = "";
  // Update collection based on user choices
  updateCollection(options, "lowercase", 97, 122);
  updateCollection(options, "uppercase", 65, 90);
  updateCollection(options, "numbers", 48, 57);
  updateCollection(options, "symbols", 33, 47);

  // get rid of what users don't like to have in password
  if (options.excludeCharacters) {
    // Only preserve characters not included in options.excludeCharacters
    collection = collection.filter((character) => {
      // If the character exists in options.excludeCharacters, return false
      // if (options.excludeCharacters.includes(character)) {
      //   return false;
      // }
      // return true;
      return !options.excludeCharacters.includes(character);
    });
  }

  // get password result
  for (let i = 0; i < options.length; i++) {
    password += sample(collection);
  }

  return password;
}

module.exports = generatePassword;

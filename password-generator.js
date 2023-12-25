var generator = require('generate-password');

// Function to generate and log password
function generator_password(){
var password = generator.generate({
	length: 10,
	numbers: true
});
console.log(password);
}

// Call the function
generator_password();

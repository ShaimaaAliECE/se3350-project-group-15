var bcrypt = require('bcryptjs');
var hashedPassword;

export function hashIt(password){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Store hash in your password DB.
            hashedPassword = hash;
        });
        console.log(err);
    });
}

export function compareIt(password){
    bcrypt.compare(password, hashedPassword, function(err, res) {
        // res == true
        return res;
        console.log(res);
    });
}




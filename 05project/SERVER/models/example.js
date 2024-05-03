const bcrypt = require('bcrypt');

// Hashing a password (during registration or password update)
async function hashPassword(password) {
    try {
        // Generate a salt
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);

        // Hash the password using the salt
        const hashedPassword = await bcrypt.hash(password, salt);

        return hashedPassword;
    } catch (error) {
        console.error("Error hashing password:", error);
        throw error;
    }
}

// Comparing a password during login
async function comparePasswords(plainTextPassword, hashedPassword) {
    try {
        // Compare the plain text password with the hashed password
        const result = await bcrypt.compare(plainTextPassword, hashedPassword);

        return result;
    } catch (error) {
        console.error("Error comparing passwords:", error);
        throw error;
    }
}

// Example usage
async function exampleUsage() {
    const plainTextPassword = 'Resav'; // Password entered by the user during login
    const hashedPasswordFromDatabase = 'Resav123'; // Hashed password stored in the database
    
    // Compare the provided password with the stored hashed password
    const isMatch = await comparePasswords(plainTextPassword, hashedPasswordFromDatabase);
    
    if (isMatch) {
        console.log("Passwords match. Login successful!");
    } else {
        console.log("Passwords do not match. Login failed!");
    }
}

// Example usage
exampleUsage();

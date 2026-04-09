function createLoginTracker (user) {
    let attempt = 3;

    return (password) => {
        if (attempt === 0) {
            return "Account locked due to too many failed login attempts";
        }
        if (password === user.password){
            return "Login successful";
        }
        else {
            const attemptMessage = 4 - attempt;
            attempt--;
            return `Attempt ${attemptMessage}: Login failed`;
        }
    };
};
module.exports = {createLoginTracker};

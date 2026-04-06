//creating a login attempt
function createLogin() {
    let attempt = 3;
    let login = (pin) => {
        if (attempt === 0) {
            console.log("access denied") 
        }
        if (pin === userInfo.pin){
            console.log("access granted")  
        }
        else {
            attempt--;
            console.log(`incorrect pin. You have ${attempt} attemp left`);
        }
    }
    return login;
};
//creating user info
let userInfo = {
    name: "Martin Maxwell",
    pin: "250250"
};
let loginattempt = createLogin(userInfo.pin);
//loginTrials
//firstTrial
loginattempt("254254"); //Output: incorrect pin.
loginattempt("250250"); //Output:access granted.

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
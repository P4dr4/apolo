import { gitAvatar } from "./src/gitAvatar.js";
import { gitName } from "./src/gitName.js";
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getUserInfo() {

  rl.question("Please enter your GitHub username: ", async (username) => {

    try {
  
      let avatar = await gitAvatar(username);
      let name = await gitName(username);
    
      console.log("++++++++++++++++++++++++++++++++++++++++");
      console.log("Here's your GitHub avatar URL: " + avatar);
      console.log("----------------------------------------");
      console.log("Here's your GitHub name: " + name);
      console.log("++++++++++++++++++++++++++++++++++++++++");
    
    } catch (error) {
      console.error('Error getting user info:', error);
    } finally {
      rl.close();
    }
  
  });

}

getUserInfo();
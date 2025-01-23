import { fetchGitHubUser } from "./gitUserData.js";

export async function gitName(user) {
  try {
    const userData = await fetchGitHubUser(user);
    if (userData.name) {
      return userData.name;
    } else {
      throw new Error('User name not found');
    }
  } catch (error) {
    console.error('Error fetching user name:', error);
    throw error;
  }
}

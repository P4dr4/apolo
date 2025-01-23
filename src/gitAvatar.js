import { fetchGitHubUser } from "./gitUserData.js";

export async function gitAvatar(user) {

  try {

    const userData = await fetchGitHubUser(user);

    if (userData.avatar_url) {

      return userData.avatar_url;

    } else {

      throw new Error('User avatar not found');

    }

  } catch (error) {

    console.error('Error fetching user avatar:', error);

    throw error;

  }

}
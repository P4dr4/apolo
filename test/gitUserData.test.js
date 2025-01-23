import { fetchGitHubUser } from "../src/gitUserData.js";

// Mock fetch for testing
global.fetch = jest.fn((url) =>
  Promise.resolve({
    ok: url.includes('octocat'),
    statusText: 'Not Found',
    json: () => Promise.resolve({
      login: 'octocat',
      avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
      name: 'The Octocat'
    }),
  })
);

describe('fetchGitHubUser', () => {
  it('should fetch user data from GitHub', async () => {
    const username = 'octocat';
    const userData = await fetchGitHubUser(username);
    expect(userData).toHaveProperty('login', username);
  });

  it('should throw an error if user is not found', async () => {
    const username = 'nonexistentuser';
    await expect(fetchGitHubUser(username)).rejects.toThrow('Network response was not ok');
  });
});

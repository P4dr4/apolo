import { gitName } from "../src/gitName.js";

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

describe('gitName', () => {
  it('should fetch user name from GitHub', async () => {
    const username = 'octocat';
    const name = await gitName(username);
    expect(name).toBe('The Octocat');
  });

  it('should throw an error if user name is not found', async () => {
    const username = 'nonexistentuser';
    await expect(gitName(username)).rejects.toThrow('Network response was not ok Not Found');
  });
});

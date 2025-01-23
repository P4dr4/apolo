import { gitAvatar } from "../src/gitAvatar.js";

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

describe('gitAvatar', () => {
  it('should fetch user avatar URL from GitHub', async () => {
    const username = 'octocat';
    const avatarUrl = await gitAvatar(username);
    expect(avatarUrl).toBe('https://avatars.githubusercontent.com/u/583231?v=4');
  });

  it('should throw an error if user avatar is not found', async () => {
    const username = 'nonexistentuser';
    await expect(gitAvatar(username)).rejects.toThrow('Network response was not ok Not Found');
  });
});

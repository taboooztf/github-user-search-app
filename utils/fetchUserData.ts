export type GitHubUser = {
    login: string;
    avatar_url: string;
    html_url: string;
    followers: number;
    public_repos: number;
  };
  
  export async function fetchUserData(username: string): Promise<GitHubUser | null> {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
  
      if (!response.ok) {
        // ユーザーが見つからない or エラー
        return null;
      }
  
      const data = await response.json();
  
      return {
        login: data.login,
        avatar_url: data.avatar_url,
        html_url: data.html_url,
        followers: data.followers,
        public_repos: data.public_repos,
      };
    } catch (error) {
      console.error("API fetch error:", error);
      return null;
    }
  }

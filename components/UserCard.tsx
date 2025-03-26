import React from "react";

type UserCardProps = {
  avatar_url: string;
  login: string;
  html_url: string;
  followers: number;
  public_repos: number;
};

export default function UserCard({
  avatar_url,
  login,
  html_url,
  followers,
  public_repos,
}: UserCardProps) {
  return (
    <div className="border rounded shadow p-4 max-w-md mx-auto mt-6">
      <img
        src={avatar_url}
        alt={`${login}のアイコン`}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-bold text-center mt-4">{login}</h2>
      <p className="text-center text-blue-500">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          GitHubプロフィールを見る
        </a>
      </p>
      <div className="flex justify-around mt-4">
        <div>
          <p className="font-semibold">フォロワー</p>
          <p className="text-center">{followers}</p>
        </div>
        <div>
          <p className="font-semibold">リポジトリ</p>
          <p className="text-center">{public_repos}</p>
        </div>
      </div>
    </div>
  );
}

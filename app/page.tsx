"use client"; // ← App Router でクライアントコンポーネントを使う場合はこれを必ず最初に書く！

import { fetchUserData, GitHubUser } from "../utils/fetchUserData";
import { useState } from "react";
import SearchForm from "../components/SearchForm";
import UserCard from "../components/UserCard";

export default function HomePage() {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [error, setError] = useState("");

  const handleSearch = async (username: string) => {
    setError("");
    setUserData(null);
    const data = await fetchUserData(username);

    if (data) {
      setUserData(data);
      console.log("取得したデータ:", data);
    } else {
      setError("ユーザーが見つかりません");
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">GitHubユーザー検索アプリ</h1>
      <SearchForm onSearch={handleSearch} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {userData && (
        <UserCard
          avatar_url={userData.avatar_url}
          login={userData.login}
          html_url={userData.html_url}
          followers={userData.followers}
          public_repos={userData.public_repos}
        />
      )}
    </main>
  );
}

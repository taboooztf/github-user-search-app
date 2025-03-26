'use client';  // ← App Router でクライアントコンポーネントを使う場合はこれを必ず最初に書く！

import SearchForm from "../components/SearchForm";
import { useState } from "react";

export default function HomePage() {
  const [username, setUsername] = useState("");

  const handleSearch = (input: string) => {
    console.log("検索したユーザー名:", input);
    setUsername(input);
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">GitHubユーザー検索アプリ</h1>
      <SearchForm onSearch={handleSearch} />

      {username && (
        <p className="mt-4 text-lg">
          「{username}」で検索が実行されました（今はまだAPIは繋がない）
        </p>
      )}
    </main>
  );
}

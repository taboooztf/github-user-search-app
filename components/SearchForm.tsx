import { useState, FormEvent } from "react";

type SearchFormProps = {
  onSearch: (username: string) => void;  // 親から渡されるコールバック関数
};

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    onSearch(inputValue.trim());
    setInputValue("");  // 入力欄をクリア
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-4">
      <input
        type="text"
        placeholder="GitHubユーザー名を入力"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border px-3 py-2 rounded w-64"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        検索
      </button>
    </form>
  );
}

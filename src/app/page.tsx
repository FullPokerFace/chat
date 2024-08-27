"use client";

import { useState } from "react";
import UsernameInput from "../components/UsernameInput";
import ChatWindow from "../components/ChatWindow";

export default function Home() {
  const [username, setUsername] = useState<string | null>(null);

  const handleUsernameSubmit = (submittedUsername: string) => {
    setUsername(submittedUsername);
  };

  if (!username) {
    return <UsernameInput onUsernameSubmit={handleUsernameSubmit} />;
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <ChatWindow username={username} />
    </main>
  );
}

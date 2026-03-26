"use client";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function Admin() {
  const { username } = useParams(); // 🔥 dynamic username

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [links, setLinks] = useState<any[]>([]);

  const addLink = () => {
    setLinks([...links, { title: "", url: "" }]);
  };

  const updateLink = (index: number, field: string, value: string) => {
    const updated = [...links];
    updated[index][field] = value;
    setLinks(updated);
  };

  const saveProfile = () => {
    const data = { name, bio, links };

    localStorage.setItem(`profile_${username}`, JSON.stringify(data));
    alert(`Saved for ${username}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4">
      <h1 className="text-xl font-bold mb-4">
        Admin Panel ({username})
      </h1>

      <input
        className="w-full mb-3 p-2 border"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full mb-3 p-2 border"
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />

      <button
        onClick={addLink}
        className="mb-3 bg-blue-500 text-white p-2 rounded"
      >
        Add Link
      </button>

      {links.map((link, index) => (
        <div key={index} className="mb-3">
          <input
            className="w-full mb-1 p-2 border"
            placeholder="Title"
            onChange={(e) =>
              updateLink(index, "title", e.target.value)
            }
          />
          <input
            className="w-full p-2 border"
            placeholder="URL"
            onChange={(e) =>
              updateLink(index, "url", e.target.value)
            }
          />
        </div>
      ))}

      <button
        onClick={saveProfile}
        className="bg-green-500 text-white p-2 rounded w-full"
      >
        Save
      </button>
    </div>
  );
}
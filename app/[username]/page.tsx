"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const username = pathname.replace("/", "").toLowerCase();

  const [profile, setProfile] = useState<any>(null);

  // 🔥 fallback default data
  const userData = {
    mcgreg: {
      name: "@mcgreg",
      bio: "Automation Builder",
      image: "/mcgreg.jpg",
      links: [
        {
          name: "Personal Website",
          url: "https://mgseosolution.com/",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/mc.greg_86",
        },
      ],
    },
  };

  useEffect(() => {
    const data = localStorage.getItem(`profile_${username}`);

    if (data) {
      setProfile(JSON.parse(data));
    } else {
      setProfile(userData[username as keyof typeof userData]);
    }
  }, [username]);

  if (!profile) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1>User not found: {username}</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center px-4">

      {/* Profile */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={profile.image || "/mcgreg.jpg"}
          className="w-24 h-24 rounded-full mb-3"
        />
        <h1 className="text-xl font-bold">{profile.name}</h1>
        <p className="text-gray-400">{profile.bio}</p>
      </div>

      {/* Links */}
      <div className="w-full max-w-sm">
        {profile.links.map((link: any, index: number) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            className="block w-full p-4 mb-3 bg-white text-black rounded-xl text-center font-semibold hover:scale-105 transition"
          >
            {link.title || link.name}
          </a>
        ))}
      </div>

    </main>
  );
}
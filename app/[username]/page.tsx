"use client";

import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();

  // Get username from URL (/mcgreg → mcgreg)
  const username = pathname.replace("/", "").toLowerCase();

  const userData = {
    mcgreg: {
      name: "@mcgreg",
      bio: "Automation Builder",
      image: "/mcgreg.jpg",
      links: [
        { name: "YouTube", url: "https://www.youtube.com/@mCgReg861" },
        { name: "Instagram", url: "https://www.instagram.com/mc.greg_86?igsh=ZmI1OXU2Mmllb3pl" },
      ],
    },
    john: {
      name: "@john",
      bio: "Developer",
      image: "/john.jpg",
      links: [
        { name: "GitHub", url: "https://github.com" },
        { name: "Twitter", url: "https://twitter.com" },
      ],
    },
    alex: {
      name: "@alex",
      bio: "Designer",
      image: "/alex.jpg",
      links: [
        { name: "Dribbble", url: "https://dribbble.com" },
        { name: "LinkedIn", url: "https://linkedin.com" },
      ],
    },
  };

  const user = userData[username as keyof typeof userData];

  if (!user) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1>User not found: {username || "EMPTY"}</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold mb-4">My Link Hub</h1>
      <div className="flex flex-col items-center gap-3 mb-8">
  <img
  src={user.image}
  alt={user.name}
  className="w-24 h-24 rounded-full object-cover"
/>

  <h1 className="text-xl font-bold">{user.name}</h1>
  <p className="text-sm text-gray-400">{user.bio}</p>
</div>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        {user.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-center py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            {link.name}
          </a>
        ))}
      </div>
    </main>
  );
}

export default function Home() {
  const links = [
    { name: "YouTube", url: "https://youtube.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Portfolio", url: "https://yourportfolio.com" },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      
      {/* Profile */}
      <div className="flex flex-col items-center gap-3 mb-8">
        <div className="w-24 h-24 rounded-full bg-gray-500" />
        <h1 className="text-xl font-bold">@mcgreg</h1>
        <p className="text-sm text-gray-400">My Links</p>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {links.map((link, index) => (
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
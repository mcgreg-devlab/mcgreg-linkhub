export default function Page() {
  const links = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mcgreg-workflow-automation" },
  { name: "OnlineJobs.ph", url: "https://www.onlinejobs.ph/jobseekers/info/2005695" },
  { name: "Upwork", url: "https://www.upwork.com/freelancers/011679636902fb2d51?mp_source=share" },
  { name: "YouTube", url: "http://www.youtube.com/@mCgReg861" },
];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      
      <div className="flex flex-col items-center gap-3 mb-8">
        <img
          src="/mcgreg.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <h1 className="text-xl font-bold">@mcgreg</h1>
        <p className="text-sm text-gray-400">Automation Builder</p>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            className="bg-white text-black text-center py-3 rounded-xl font-semibold"
          >
            {link.name}
          </a>
        ))}
      </div>

    </main>
  );
}
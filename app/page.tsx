"use client";

import { useEffect } from "react";

export default function Page() {
  const links = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mcgreg-workflow-automation" },
    { name: "OnlineJobs.ph", url: "https://www.onlinejobs.ph/jobseekers/info/2005695" },
    { name: "Upwork", url: "https://www.upwork.com/freelancers/011679636902fb2d51?mp_source=share" },
    { name: "YouTube", url: "http://www.youtube.com/@mCgReg861" },
    { name: "Personal Website", url: "https://mgseosolution.com/" }
  ];

  useEffect(() => {
    const canvas = document.getElementById("matrix") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    const drops: number[] = Array(columns).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff00";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* MATRIX CANVAS */}
      <canvas
        id="matrix"
        className="fixed top-0 left-0 w-full h-full z-0"
      />

      {/* GLASS CONTAINER */}
      <div className="relative z-10 bg-black/70 backdrop-blur-sm p-6 rounded-2xl w-full max-w-sm flex flex-col items-center">

        {/* PROFILE */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <img
            src="/mcgreg.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <h1 className="text-xl font-bold">@mcgreg</h1>
          <p className="text-sm text-gray-400">Automation Builder</p>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-4 w-full">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 border border-green-500 text-center py-3 rounded-xl font-semibold bg-black/60 hover:bg-green-500 hover:text-black transition duration-300 shadow-[0_0_10px_#00ff00] hover:shadow-[0_0_20px_#00ff00]"
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}
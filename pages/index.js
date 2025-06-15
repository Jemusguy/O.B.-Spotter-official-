import React from "react";

export default function OBSpotterPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="flex flex-col items-center justify-center py-8">
        <img
          src="/O_B_Spotter_Logo_Broderie_Impression.png"
          alt="O.B. Spotter Logo"
          className="w-64 mb-4"
        />
        <h1 className="text-4xl font-bold text-red-600 italic text-center">
          The Ultimate Stroke Training Tool
        </h1>
      </header>

      <main className="max-w-5xl mx-auto px-4">
        <section className="py-12">
          <h2 className="text-3xl font-bold text-white mb-4">O.B. Spotter</h2>
          <p className="text-lg text-gray-300 mb-6">
            Train with precision and improve your stroke consistency. The O.B.
            Spotter is a patented billiard training device that delivers the
            object ball to the exact same spot every time, helping you master
            alignment and timing.
          </p>
        </section>

        <section className="py-12 border-t border-gray-700">
          <h3 className="text-2xl font-semibold text-gray-200 mb-2">
            Coming Soon
          </h3>
          <p className="text-gray-400">More training tools in development!</p>
        </section>

        <section className="py-12 border-t border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4">About</h2>
          <p className="text-lg text-gray-300">
            Invented in Canada and already loved by players, the O.B. Spotter
            was designed for players who want to refine their technique and
            consistency without the guesswork. Developed by a billiards
            enthusiast with over 40 years of experience.
          </p>
        </section>

        <section className="py-12 border-t border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
          <p className="text-gray-300 mb-2">
            Email: <a href="mailto:gjem1@hotmail.com" className="underline text-blue-400">gjem1@hotmail.com</a>
          </p>
          <p className="text-gray-300 mb-2">
            Facebook: <a href="https://www.facebook.com/profile.php?id=61573736167234" className="underline text-blue-400" target="_blank">O.B. Spotter on Facebook</a>
          </p>
        </section>
      </main>

      <footer className="text-center py-6 border-t border-gray-700 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} O.B. Spotter — All rights reserved
      </footer>
    </div>
  );
}

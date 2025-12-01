import Image from "next/image";

export default function AboutPage() {
  return (
    <main
      className="p-10 min-h-screen flex flex-col justify-between bg-slate-800"
      //style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div>
        <h1 className="text-white text-8xl font-bold">About Me</h1>

        <p className="font-[var(--font-inter)] text-white mt-4 text-2xl">
          → Hi! I'm Herald James Canchela Bulawan, but you can call me "James".
          I'm 19 years old, born on August 1, 2006 at Bicol Medical Center. 
          I'm currently second year enrolled at Naga College Foundation, at Naga city with the degree of Bachelor of Science in Information Technology, 
          I live in barangay Pagatpat Calabanga province of Camarines Sur. 
          I have big ambitions and a drive to achieve success as early as possible, fueled by a strong work ethic and a love for hustling. 
          I thrive on challenges, constantly seeking opportunities to learn, grow, and push myself to the next level.
        </p>

        <div className="p-3 flex justify-center mt-10 gap-25">
          <Image
            src="/about1.jpg"
            width={300}
            height={300}
            alt="About Me Photo"
            className="rounded-2xl shadow-lg object-cover border border-white"
          />

          <Image
            src="/about3.jpg"
            width={300}
            height={300}
            alt="About Me Photo"
            className="rounded-2xl shadow-lg object-cover border border-white"
          />

          <Image
            src="/about2.jpg"
            width={300}
            height={300}
            alt="About Me Photo"
            className="rounded-2xl shadow-lg object-cover border border-white"
          />
        </div>

      </div>

      <a
        href="/"
        className="p-5 mb-5 gap-2 px-5 py-3 rounded-xl text-white font-medium 
        bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition w-fit"
      >
        ← Back Home
      </a>
    </main>
  );
}

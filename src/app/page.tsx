import { User, Mail, School, Heart, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";

export default function HomePage() {
  return (
    
<main className="p-10 min-h-screen flex flex-col justify-center bg-slate-800">

  <div className="flex items-center gap-10">
    <div>
      <h1 className="font-[var(--font-poppins)] text-white text-9xl ml-30 font-bold">Hi There,</h1>
      <h1 className="font-[var(--font-poppins)] text-white text-9xl ml-30 font-bold">I'm James</h1>
    </div>

    <Image
      src="/avatarMS.jpg"
      alt="My Avatar"
      width={280}
      height={280}
      className="rounded-full object-cover"
    />
  </div>

  <p className="font-[var(--font-inter)] mt-0 ml-30 text-2lg text-white">
    Welcome to my simple Portfolio
  </p>

      <nav className="ml-30 mt-8 flex flex-wrap gap-4">
        <a
          href="/about"
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-white font-medium 
          bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition"
        >
          <User size={20} />
          About Me
        </a>

        <a
          href="/contact"
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-white font-medium 
          bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition"
        >
          <Mail size={20} />
          Contact
        </a>

        <a
          href="/education"
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-white font-medium 
          bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition"
        >
          <School size={20} />
          Education
        </a>

        <a
          href="/hobbies"
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-white font-medium 
          bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition"
        >
          <Heart size={20} />
          My Hobbies
        </a>

        <a
          href="/skills"
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-white font-medium 
          bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition"
        >
          <Star size={20} />
          My Skills
        </a>
      </nav>
    </main>
  );
}


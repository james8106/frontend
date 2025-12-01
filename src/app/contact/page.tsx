import { User, Mail, School, Heart, Star } from "lucide-react";


export default function ContactPage() {
  return (
<main className="p-25 min-h-screen flex flex-col justify-between bg-slate-800">

  <div>
    <h1 className="p-5 text-white text-8xl font-bold flex flex-col justify-center">Work with me!</h1>

    <p className="font-[var(--font-inter)] p-0 mt-4 text-white text-4xl"> 
🖂 email: heraldjamesbulawan@gmail.com </p>
    <p className="font-[var(--font-inter)] p-0 mt-4 text-white text-4xl"> 
✆ contact num: +639 542 312 012 </p>
    <p className="font-[var(--font-inter)] p-0 mt-4 text-white text-4xl"> 
🗐 linkedIn: Herald James Bulawan </p>
   <p className="font-[var(--font-inter)] p-0 mt-4 text-white text-4xl"> 
🕭 instagram: @jamesblwn </p>
    <p className="font-[var(--font-inter)] p-0 mt-4 text-white text-4xl"> 
🖉 facebook: James Bulawan </p>
  </div>

  <a
    href="/"
    className="mb-8 p-5 px-5 py-3 rounded-xl text-white font-medium 
    bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition w-fit"
  >
    ← Back Home
  </a>

</main>
  );
}

export default function SkillsPage() {
  return (
<main className="p-10 min-h-screen flex flex-col justify-between bg-slate-800">

  <div>
    <h1 className="p-5 text-white text-8xl font-bold flex flex-col justify-center">My skills</h1>

    <p className="font-[var(--font-inter)] p-3 mt-4 text-white text-4xl"> 
♛ Organizational Skills - Detail oriented with strong time
management and task prioritization abilities.</p>
    <p className="font-[var(--font-inter)] p-3 mt-4 text-white text-4xl"> 
♛ Teamwork - Cooperates well with colleagues and follows
directions from supervisors.</p>
    <p className="font-[var(--font-inter)] p-3 mt-4 text-white text-4xl"> 
♛ Hard-working Skills - Always ready to take on extra responsibilities
when needed, and maintain high energy and focus on work. </p>
   <p className="font-[var(--font-inter)] p-3 mt-4 text-white text-4xl"> 
♛ Problem-Solving Skill - Quickly identify and fix issues to keep work
flowing smoothly, and handle unexpected problems calmly and
effectively. </p>
    <p className="font-[var(--font-inter)] p-3 mt-4 text-white text-4xl"> 
♛ Diligent - Committed to completing tasks with accuracy and care </p>
  </div>

  <a
    href="/"
    className="p-10 mt-10 py-3 rounded-xl text-white font-medium 
    bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition w-fit"
  >
    ← Back Home
  </a>

</main>
  );
}

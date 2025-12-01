export default function HobbiesPage() {
  return (
<main className="p-10 flex flex-col gap-16 bg-slate-800">

  <h1 className="text-8xl font-bold text-center text-white">My Hobbies</h1>

  <div>
    <p className="text-white text-4xl font-[var(--font-inter)] mb-6">
      🏀 I love playing basketball
    </p>

    <div className="grid grid-cols-5 gap-6 justify-center">
      <img src="/bball3.jpg" className="rounded-xl shadow-lg w-48 h-48 object-cover" />
      <img src="/bball1.jpg" className="rounded-xl shadow-lg w-48 h-48 object-cover" />
      <img src="/bball2.jpg" className="rounded-xl shadow-lg w-48 h-48 object-cover" />
    </div>
  </div>

  <div>
    <p className="text-white text-4xl font-[var(--font-inter)] mb-6">
      ❤️ To be with my girlfriend
    </p>

    <div className="grid grid-cols-5 gap-6 justify-center">
      <img src="/gf1.jpg" className="rounded-xl shadow-lg w-48 h-48 object-cover" />
      <img src="/gf3.jpg" className="rounded-xl shadow-lg w-48 h-48 object-cover" />
      <img src="/gf2.jpg" className="rounded-xl shadow-lg w-48 h-48 object-cover" />
    </div>
  </div>

  <div>
    <p className="text-white text-4xl font-[var(--font-inter)] mb-6">
      👨‍👩‍👧‍👦 Hangout with family and friends
    </p>

    <div className="grid grid-cols-5 gap-6 justify-center">
      <img src="/ff1.jpg" className="rounded-xl shadow-lg w-48 h-48 object-cover" />
      <img src="/ff2.jpg" className="rounded-xl shadow-lg w-48 h-48 object-cover" />
      <img src="/ff3.jpg" className="rounded-xl shadow-lg w-48 h-48 object-cover" />
    </div>
  </div>

  <div>
    <p className="text-white text-4xl font-[var(--font-inter)] mb-6">
      🏍️ Ride with my motorbike
    </p>

    <div className="grid grid-cols-5 gap-6 justify-center">
      <img src="/motor1.jpg" className="rounded-xl shadow-lg w-48 h-48 object-cover" />
      <img src="/motor2.jpg" className="rounded-xl shadow-lg w-48 h-48 object-cover" />
      <img src="/motor3.jpg" className="rounded-xl shadow-lg w-48 h-48 object-cover" />
    </div>
  </div>

  <div>
    <p className="text-white text-4xl font-[var(--font-inter)] mb-6">
      🍜 Eating food
    </p>

    <div className="grid grid-cols-5 gap-6 justify-center">
      <img src="/food1.jpg" className="rounded-xl shadow-lg w-48 h-48 object-cover" />
      <img src="/food2.jpg" className="rounded-xl shadow-lg w-48 h-48 object-cover" />
      <img src="/food3.jpg" className="rounded-xl shadow-lg w-48 h-48 object-cover" />
    </div>
  </div>

  <a
    href="/"
    className="mt-12 px-6 py-3 rounded-xl text-white font-medium 
      bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition w-fit"
  >
    ← Back Home
  </a>

</main>

  );
}

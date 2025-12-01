export default function EducationPage() {
  return (
    <main className="p-5 min-h-screen flex flex-col justify-between bg-slate-800">

<div>
    <h1 className="text-white text-8xl font-bold flex flex-col justify-center">My Educational Background</h1>

        <div className="flex items-start mt-8 p-4 border-b border-gray-300">
        <div className=" mr-20 ml-50 flex-shrink-0">
            <img 
                src="/edu4.jpg" 
                alt="Naga College Foundation Logo" 
                width={200}
                height={100}  
                className="rounded-2xl shadow-lg object-cover border border-white" 
            />
        </div>
        
        <div className="text-white text-3xl font-[var(--font-inter)]">
            <h3 className="font-bold">Bachelor of Science in Information Technology</h3>
            <p>Naga College Foundation</p>
            <p>College, 2024 – present</p>
        </div>
    </div>

        <div className="flex items-start mt-8 p-4 border-b border-gray-300">
        <div className="mr-20 ml-50 flex-shrink-0">
            <img 
                src="/edu.jpg" 
                alt="Calabanga National Science High School Logo" 
                width={200}
                height={100}
                className="rounded-2xl shadow-lg object-cover border border-white" 
            />
        </div>
        
        <div className="text-white text-3xl font-[var(--font-inter)]">
            <h3 className="font-bold">Senior High School (ABM Strand)</h3>
            <p>Calabanga National Science High School, 2023 – 2024</p>
            <p className="mt-2">**Achievements:**</p>
            <ul className="list-disc ml-8 text-2xl">
                <li>With Honors</li>
                <li>Work Immersion</li>
            </ul>
        </div>
    </div>
    
        <div className="flex items-start mt-8 p-4">
        <div className="mr-20 ml-50 flex-shrink-0">
            <img 
                src="/edu2.jpg" 
                alt="Calabanga National Science High School Logo" 
                width={200}
                height={100}
                className="rounded-2xl shadow-lg object-cover border border-white"  
            />
        </div>
        
        <div className="text-white text-3xl font-[var(--font-inter)]">
            <h3 className="font-bold">Junior High School Graduate</h3>
            <p>Makati High School, 2018 – 2023</p>
            <p className="mt-2">**Achievements:**</p>
            <ul className="list-disc ml-8 text-2xl">
                <li>With Honors</li>
                <li>Honesty Award</li>
                <li>MTAP Certificate</li>
            </ul>
        </div>
    </div>

</div>

  <a
    href="/"
    className="p-5 mb-8 gap-2 px-5 py-3 rounded-xl text-white font-medium 
    bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition w-fit"
  >
    ← Back Home
  </a>

</main>

    

  );
}

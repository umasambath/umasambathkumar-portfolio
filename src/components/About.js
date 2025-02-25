"use client"
import Lottie from "react-lottie-player";
import animationData from "./assets/girl-coding.json";
import "aos/dist/aos.css";

export default function About() {
    return (

        <section id="about"
            className="h-auto bg-gradient-to-r from-indigo-500 overflow-hidden">
            <h2 className="text-center font-bold text-5xl p-8 text-white-800 dark:text-white drop-shadow-lg"> ABOUT</h2>
            <div className="static flex flex-col md:flex-row items-center justify-between p-20 pl-20">
                <div class="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-lg shadow-lg">
                    <ul class="space-y-3 text-base md:text-lg lg:text-3xl">
                        <li class="flex items-start">
                            <span className="space-y-3 text-base md:text-lg lg:text-5xl"> </span>
                            <p><strong>Passionate Full-Stack Developer | Cloud Enthusiast</strong></p>
                        </li>
                        <li class="flex items-start">
                            <span class="space-y-3 text-base md:text-lg lg:text-5xl">💻</span>
                            <p>Expert in crafting scalable, high-performance web applications using <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>DevOps</strong> practices.</p>
                        </li>
                        <li class="flex items-start">
                            <span class="space-y-3 text-base md:text-lg lg:text-5xl">☁️</span>
                            <p>Certified in <strong>AWS</strong> & <strong>Azure</strong>, with experience in <strong>GCP</strong>; adept at optimizing workflows and automating deployments.</p>
                        </li>
                        <li class="flex items-start">
                            <span class="space-y-3 text-base md:text-lg lg:text-5xl">🧩</span>
                            <p>Quick learner and problem solver; enjoy tackling coding challenges on <strong>HackerRank</strong> and staying ahead of industry trends.</p>
                        </li>
                        <li class="flex items-start">
                            <span class="space-y-3 text-base md:text-lg lg:text-5xl">🌏</span>
                            <p>Recently relocated to <strong>Australia</strong>; eager to explore new technologies and embrace the vibrant culture.</p>
                        </li>
                    </ul>
                </div>

                <Lottie
                    animationData={animationData}
                    className="w-96"
                />
            </div>


        </section>



    )
}


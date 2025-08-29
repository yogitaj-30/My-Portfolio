import React from "react";
import GitHubCalendar from "react-github-calendar";
import { subYears, startOfMonth } from "date-fns";

const GitHub = () => {
    return (
        <section id="github" className="min-h-screen bg-indigo-50 px-6 py-12 text-center"
        >
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-10">
                My GitHub Statistics
            </h1>

            <div className="flex flex-col md:flex-row justify-center gap-10 mb-10">
                <img
                    src="https://github-readme-stats.vercel.app/api?username=yogitaj-30&show_icons=true&theme=dracula"
                    alt="GitHub Stats"
                    className="rounded-lg shadow-lg"
                />
                <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=yogitaj-30&layout=compact&theme=dracula"
                    alt="Most Used Languages"
                    className="rounded-lg shadow-lg"
                />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-10">
                My GitHub Calendar
            </h2>
            <div className="border rounded-lg shadow-lg bg-white p-6">
                <GitHubCalendar
                    username="yogitaj-30"
                    blockSize={14}
                    blockMargin={9}
                    fontSize={15}
                    transformData={(contributions) => {
                        const cutoff = startOfMonth(subYears(new Date(), 1));
                        return contributions.filter((day) => new Date(day.date) >= cutoff)
                    }}
                />
            </div>
        </section>
    );
};

export default GitHub;

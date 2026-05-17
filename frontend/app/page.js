"use client";

import { useState } from "react";

export default function Home() {

  const [growth, setGrowth] = useState("");
  const [competition, setCompetition] = useState("");
  const [profit, setProfit] = useState("");

  const [score, setScore] = useState(null);
  const [recommendation, setRecommendation] = useState("");

  const calculateScore = async () => {

    const response = await fetch(
      `http://127.0.0.1:8000/calculate?growth=${growth}&competition=${competition}&profit=${profit}`
    );

    const data = await response.json();

    setScore(data.score);
    setRecommendation(data.recommendation);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-[500px]">

        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          Strategy Market Calculator
        </h1>

        <div className="space-y-4">

          <div>
            <label className="block mb-1 font-medium text-black">
              Market Growth (%)
            </label>

            <input
              type="number"
              value={growth}
              onChange={(e) => setGrowth(e.target.value)}
              className="w-full border p-3 rounded-lg text-black"
              placeholder="Enter market growth"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-black">
              Competition Intensity (1-10)
            </label>

            <input
              type="number"
              value={competition}
              onChange={(e) => setCompetition(e.target.value)}
              className="w-full border p-3 rounded-lg text-black"
              placeholder="Enter competition level"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-black">
              Profit Margin (%)
            </label>

            <input
              type="number"
              value={profit}
              onChange={(e) => setProfit(e.target.value)}
              className="w-full border p-3 rounded-lg text-black"
              placeholder="Enter profit margin"
            />
          </div>

          <button
            onClick={calculateScore}
            className="w-full bg-black text-white p-3 rounded-lg mt-4 hover:bg-gray-800"
          >
            Calculate Market Attractiveness
          </button>

          {score !== null && (
            <div className="mt-6 bg-gray-100 p-5 rounded-xl text-black">

              <h2 className="text-xl font-bold mb-2">
                Market Score: {score}
              </h2>

              <p className="text-lg">
                Recommendation: {recommendation}
              </p>

            </div>
          )}

        </div>
      </div>
    </main>
  );
}
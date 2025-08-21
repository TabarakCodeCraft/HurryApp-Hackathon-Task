import { useState } from "react";
import "./App.css";

function App() {
  // Algorithm to find missing ranges
  function findMissingRanges(frames) {
    let maxFrame = 0;
    for (let f of frames) if (f > maxFrame) maxFrame = f;

    const received = new Set(frames);
    let gaps = [];
    let missingCount = 0;
    let i = 1;

    while (i <= maxFrame) {
      if (!received.has(i)) {
        let start = i;
        while (i <= maxFrame && !received.has(i)) {
          i++;
          missingCount++;
        }
        let end = i - 1;
        gaps.push([start, end]);
      } else {
        i++;
      }
    }

    let longestGap = [];
    let maxLen = 0;
    for (let g of gaps) {
      let length = g[1] - g[0] + 1;
      if (length > maxLen) {
        maxLen = length;
        longestGap = g;
      }
    }

    return { gaps, longest_gap: longestGap, missing_count: missingCount };
  }

  const [input, setInput] = useState("1,2,3,5,6,10,11,16");
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    const frames = input
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    setResult(findMissingRanges(frames));
  };

  return (
    <div className="camera-frame">
      <h1>📹 Missing Frames Detector</h1>
      <p>Enter received frame numbers (comma separated):</p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input-box"
      />

      <button onClick={handleCheck} className="detect-btn">
        🔍 Detect Missing Frames
      </button>

      {result && (
        <div className="result-card">
          <h2>📊 Results:</h2>
          <p>
            <b>Missing Ranges:</b> {JSON.stringify(result.gaps)}
          </p>
          <p>
            <b>Longest Gap:</b> {JSON.stringify(result.longest_gap)}
          </p>
          <p>
            <b>Total Missing Frames:</b> {result.missing_count}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;

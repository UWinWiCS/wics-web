import React, { useState, useRef, useEffect } from "react";
import { Download, Sparkles, RefreshCw } from "lucide-react";

export default function BinaryBeadBuilder() {
  const [firstInitial, setFirstInitial] = useState("");
  const [lastInitial, setLastInitial] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [patternGenerated, setPatternGenerated] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const drawCanvas = (pattern: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Reset / clear background with clean white
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const beadSize = 35;
    const spacing = 10;

    // Layout calculations
    const topMargin = 50;
    const bottomMargin = 140;

    const titleHeight = 28;
    const subtitleHeight = 22;
    const spacingAfterSubtitle = 40;

    const availableHeight =
      canvas.height -
      topMargin -
      bottomMargin -
      titleHeight -
      subtitleHeight -
      spacingAfterSubtitle;

    // Beads y-position: start below title + subtitle + spacing
    const y =
      topMargin +
      titleHeight +
      subtitleHeight +
      spacingAfterSubtitle +
      availableHeight / 2;

    // Draw title
    ctx.font = 'bold 28px "Madimi One", sans-serif';
    ctx.fillStyle = "#FDA8C7";
    ctx.textAlign = "center";
    ctx.fillText("My Binary Bead Pattern!", canvas.width / 2, topMargin);

    // Draw subtitle
    ctx.font = '22px "Marmelad", sans-serif';
    ctx.fillStyle = "#b388eb";
    ctx.fillText(
      "WiCS @ University of Windsor",
      canvas.width / 2,
      topMargin + titleHeight + 14
    );

    // Draw beads
    let x =
      (canvas.width - (pattern.length * (beadSize + spacing) - spacing)) / 2 + 15;
    for (const bit of pattern) {
      if (bit === "1") {
        ctx.fillStyle = "#FDA8C7"; // pink for 1
      } else if (bit === "0") {
        ctx.fillStyle = "#b388eb"; // purple for 0
      } else {
        ctx.fillStyle = "#ffffff"; // white spacer
      }

      ctx.beginPath();
      ctx.arc(x, y, beadSize / 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.strokeStyle = "#ffafcc";
      ctx.lineWidth = 2;
      ctx.stroke();

      x += beadSize + spacing;
    }

    // Draw logo at bottom
    const logo = new Image();
    logo.src = "/img/wics-logo.png";
    logo.onload = () => {
      const logoWidth = 200;
      const logoHeight = 100;
      const logoX = (canvas.width - logoWidth) / 2;
      const logoY = canvas.height - logoHeight - 10;
      ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);
    };
  };

  const handleGenerate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage("");

    const first = firstInitial.trim().toUpperCase();
    const last = lastInitial.trim().toUpperCase();

    if (!first.match(/^[A-Z]$/) || !last.match(/^[A-Z]$/)) {
      setErrorMessage("Please enter valid single letters (A-Z) for both initials!");
      return;
    }

    // Convert each initial to binary (8 bits each)
    const firstBinary = first.charCodeAt(0).toString(2).padStart(8, "0");
    const lastBinary = last.charCodeAt(0).toString(2).padStart(8, "0");

    // Combine with white spacers: start, between, end
    const pattern = "S" + firstBinary + "S" + lastBinary + "S";

    drawCanvas(pattern);
    setPatternGenerated(true);
  };

  const handleClear = () => {
    setFirstInitial("");
    setLastInitial("");
    setErrorMessage("");
    setPatternGenerated(false);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `binary-bracelet-${firstInitial || "pattern"}-${lastInitial || ""}.png`;
    link.href = dataUrl;
    link.click();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);

  return (
    <div className="min-w-full min-h-screen bg-[#fff7fb] text-[#3a2a3a] pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Header Banner */}
        <header className="w-full bg-[#ffc8dd] text-[#4a004f] rounded-2xl p-6 md:p-8 text-center shadow-md mb-8">
          <h1 className="font-madimi text-3xl md:text-4xl tracking-tight mb-3">
            💻 WiCS Binary Bead Bracelet Builder 💗
          </h1>
          <p className="font-marmelad text-lg md:text-xl text-[#5b175e] max-w-2xl mx-auto leading-relaxed">
            Learn how computers use <strong>binary</strong> — the language of 1s
            and 0s — to represent information, and build your own binary bead
            pattern!
          </p>
        </header>

        {/* Educational Info Section */}
        <section className="w-full bg-[#ffeef8] p-6 md:p-8 rounded-2xl shadow-sm border border-[#ffd6e8] mb-8 text-center">
          <h2 className="font-madimi text-2xl md:text-3xl text-[#4a004f] mb-3">
            What is Binary?
          </h2>
          <div className="font-marmelad text-base md:text-lg text-[#473047] space-y-2 max-w-2xl mx-auto">
            <p>
              Computers use a simple language of 1s and 0s called{" "}
              <strong className="text-[#a42079]">binary</strong>.
            </p>
            <p>
              Each 1 or 0 is a <em>bit</em>. Eight bits make up one <em>byte</em> —
              enough to represent a letter or number!
            </p>
            <p>
              For example, the letter <strong>A</strong> in binary is{" "}
              <code className="bg-[#ffc8dd] px-2 py-0.5 rounded text-[#4a004f] font-mono font-bold">
                01000001
              </code>
              .
            </p>
          </div>
        </section>

        {/* Generator Section */}
        <section className="w-full bg-[#ffeef8] p-6 md:p-8 rounded-2xl shadow-sm border border-[#ffd6e8] mb-8 text-center">
          <h2 className="font-madimi text-2xl md:text-3xl text-[#4a004f] mb-3">
            Generate Your Bead Pattern
          </h2>
          <p className="font-marmelad text-base md:text-lg text-[#473047] mb-2">
            Enter your initials below to see your binary code as a colorful bead
            pattern!
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white/70 px-4 py-2 rounded-full border border-[#ffafcc] font-marmelad text-sm md:text-base mb-6">
            <span>💗 <strong>1</strong> = Pink bead</span>
            <span className="text-[#ffafcc]">•</span>
            <span>💜 <strong>0</strong> = Purple bead</span>
            <span className="text-[#ffafcc]">•</span>
            <span>🤍 <strong>Spacer</strong> = White bead</span>
          </div>

          {/* Form */}
          <form
            onSubmit={handleGenerate}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            <input
              type="text"
              maxLength={1}
              value={firstInitial}
              onChange={(e) => setFirstInitial(e.target.value.toUpperCase())}
              placeholder="First"
              className="w-24 md:w-28 p-2.5 text-center text-xl font-bold rounded-xl border-2 border-[#ffafcc] focus:border-[#f372b7] focus:outline-none uppercase bg-white shadow-sm font-marmelad"
              aria-label="First Initial"
            />
            <input
              type="text"
              maxLength={1}
              value={lastInitial}
              onChange={(e) => setLastInitial(e.target.value.toUpperCase())}
              placeholder="Last"
              className="w-24 md:w-28 p-2.5 text-center text-xl font-bold rounded-xl border-2 border-[#ffafcc] focus:border-[#f372b7] focus:outline-none uppercase bg-white shadow-sm font-marmelad"
              aria-label="Last Initial"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 bg-[#ff91c7] hover:bg-[#f372b7] text-white font-madimi rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Sparkles size={18} />
              Generate Pattern
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#f5d0e3] hover:bg-[#ebbed6] text-[#4a004f] font-madimi rounded-xl transition-all cursor-pointer"
            >
              <RefreshCw size={18} />
              Clear
            </button>
          </form>

          {errorMessage && (
            <p className="text-red-500 font-medium mb-4 text-sm md:text-base font-marmelad">
              {errorMessage}
            </p>
          )}

          {/* Canvas Preview Container */}
          <div className="w-full overflow-x-auto rounded-xl border-2 border-[#ffd6e8] bg-white p-2 shadow-inner">
            <canvas
              ref={canvasRef}
              width={900}
              height={315}
              className="w-full max-w-[900px] h-auto mx-auto block rounded-lg"
            />
          </div>

          {/* Download & Save Action */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleDownload}
              disabled={!patternGenerated}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-madimi text-white shadow-md transition-all cursor-pointer ${
                patternGenerated
                  ? "bg-[#b388eb] hover:bg-[#9c6cdb] active:scale-95"
                  : "bg-gray-300 opacity-60 cursor-not-allowed"
              }`}
            >
              <Download size={20} />
              Save Bead Layout (PNG)
            </button>
          </div>
        </section>

        {/* Footer info */}
        <footer className="text-center text-sm md:text-base text-[#6f566e] mt-4 font-marmelad">
          <p>
            Made with 💗 by the Women in Computer Science Club @ The University of
            Windsor |{" "}
            <a href="/" className="underline hover:text-[#ff91c7] font-semibold">
              wics-uwindsor.ca
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

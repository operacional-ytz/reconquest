!function(){function e(e,t){try{return Math.floor(Math.random()*(t-e+1)+e)}catch(e){console.log(e)}}try{let t=e(400,700);setInterval((()=>{document.querySelectorAll(".atomicat-random").forEach((e=>{e.innerText=t.toString()})),t+=e(-1,2)}),1e3)}catch(e){console.log(e)}}(),function(){try{["hoje-ext","amanha-ext","hoje","ano","amanha","hora"].forEach((e=>{let t="";"ano"==e&&(t=(new Date).getFullYear()),document.querySelectorAll(".atomicat-"+e).forEach((e=>{e.innerText=t}))}))}catch(e){console.log(e)}}();

(function() {
    var buttonShown = false;

    function showCTAButton() {
        if (buttonShown) return;
        buttonShown = true;

        var buttons = document.querySelectorAll(".smartplayer-scroll-event");
        buttons.forEach(function(btn) {
            btn.style.display = "block";
            setTimeout(function() {
                btn.classList.add("show");
            }, 50);
        });
    }

    function initSmartPlayerListener() {
        var attempts = 0;
        var maxAttempts = 100;

        var checkInterval = setInterval(function() {
            attempts++;

            if (window.smartplayer && window.smartplayer.instances) {
                var player = window.smartplayer.instances["vid-6943034a387adf5a89eca7b2"];

                if (player) {
                    clearInterval(checkInterval);

                    if (typeof player.on === "function") {
                        player.on("smartAutoWebinarShow", function() {
                            showCTAButton();
                        });

                        player.on("timeupdate", function() {
                            if (player.video && player.video.currentTime > 10) {
                                showCTAButton();
                            }
                        });
                    }

                    setTimeout(function() {
                        if (!buttonShown) {
                            showCTAButton();
                        }
                    }, 15000);
                }
            }

            if (attempts >= maxAttempts) {
                clearInterval(checkInterval);
                setTimeout(function() {
                    showCTAButton();
                }, 5000);
            }
        }, 100);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initSmartPlayerListener);
    } else {
        initSmartPlayerListener();
    }
})();

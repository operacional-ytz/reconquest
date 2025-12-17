!function(){function e(e,t){try{return Math.floor(Math.random()*(t-e+1)+e)}catch(e){console.log(e)}}try{let t=e(400,700);setInterval((()=>{document.querySelectorAll(".atomicat-random").forEach((e=>{e.innerText=t.toString()})),t+=e(-1,2)}),1e3)}catch(e){console.log(e)}}(),function(){try{["hoje-ext","amanha-ext","hoje","ano","amanha","hora"].forEach((e=>{let t="";"ano"==e&&(t=(new Date).getFullYear()),document.querySelectorAll(".atomicat-"+e).forEach((e=>{e.innerText=t}))}))}catch(e){console.log(e)}}();

(function() {
    let buttonShown = false;

    function showButton() {
        if (buttonShown) return;
        buttonShown = true;
        console.log("Exibindo botão agora...");
        document.querySelectorAll(".smartplayer-scroll-event").forEach(function(btn) {
            btn.classList.add("show");
            console.log("Classe 'show' adicionada com sucesso!");
        });
    }

    const checkPlayer = setInterval(function() {
        if (window.smartplayer && window.smartplayer.instances) {
            const player = window.smartplayer.instances["vid-6943034a387adf5a89eca7b2"];
            if (player && player.on) {
                clearInterval(checkPlayer);
                console.log("SmartPlayer encontrado! Player:", player);

                player.on("timeupdate", function(event) {
                    const currentTime = player.video && player.video.currentTime ? player.video.currentTime : 0;
                    if (currentTime > 5 && !buttonShown) {
                        console.log("Vídeo passou de 5 segundos! Mostrando botão...");
                        showButton();
                    }
                });

                const events = ["smartplayer:scroll", "scroll", "smartAutoWebinarShow", "play", "playing"];
                events.forEach(function(evt) {
                    player.on(evt, function() {
                        console.log("Evento disparado:", evt);
                        if (evt.includes("scroll") || evt === "smartAutoWebinarShow") {
                            setTimeout(showButton, 1000);
                        }
                    });
                });

                console.log("Listeners configurados. Testando botão em 3 segundos...");
                setTimeout(function() {
                    console.log("Teste: forçando exibição do botão...");
                    showButton();
                }, 3000);
            }
        }
    }, 100);
})();

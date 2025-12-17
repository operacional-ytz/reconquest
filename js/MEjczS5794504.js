!function(){function e(e,t){try{return Math.floor(Math.random()*(t-e+1)+e)}catch(e){console.log(e)}}try{let t=e(400,700);setInterval((()=>{document.querySelectorAll(".atomicat-random").forEach((e=>{e.innerText=t.toString()})),t+=e(-1,2)}),1e3)}catch(e){console.log(e)}}(),function(){try{["hoje-ext","amanha-ext","hoje","ano","amanha","hora"].forEach((e=>{let t="";"ano"==e&&(t=(new Date).getFullYear()),document.querySelectorAll(".atomicat-"+e).forEach((e=>{e.innerText=t}))}))}catch(e){console.log(e)}}();

(function() {
    const checkPlayer = setInterval(function() {
        if (window.smartplayer && window.smartplayer.instances) {
            const player = window.smartplayer.instances["vid-6943034a387adf5a89eca7b2"];
            if (player && player.on) {
                clearInterval(checkPlayer);
                console.log("SmartPlayer encontrado! Configurando listeners...");

                const eventNames = [
                    "smartplayer:scroll",
                    "scroll",
                    "timeupdate",
                    "smartAutoWebinarShow"
                ];

                eventNames.forEach(function(eventName) {
                    player.on(eventName, function(data) {
                        console.log("Evento '" + eventName + "' disparado!", data);
                        if (eventName === "smartAutoWebinarShow" || eventName === "scroll" || eventName === "smartplayer:scroll") {
                            setTimeout(function() {
                                document.querySelectorAll(".smartplayer-scroll-event").forEach(function(btn) {
                                    btn.classList.add("show");
                                    console.log("Botão exibido!");
                                });
                            }, 1000);
                        }
                    });
                });

                console.log("Todos os listeners configurados. Aguardando eventos...");
            }
        }
    }, 100);

    setTimeout(function() {
        clearInterval(checkPlayer);
    }, 10000);
})();

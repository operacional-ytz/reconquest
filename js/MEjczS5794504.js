!function(){function e(e,t){try{return Math.floor(Math.random()*(t-e+1)+e)}catch(e){console.log(e)}}try{let t=e(400,700);setInterval((()=>{document.querySelectorAll(".atomicat-random").forEach((e=>{e.innerText=t.toString()})),t+=e(-1,2)}),1e3)}catch(e){console.log(e)}}(),function(){try{["hoje-ext","amanha-ext","hoje","ano","amanha","hora"].forEach((e=>{let t="";"ano"==e&&(t=(new Date).getFullYear()),document.querySelectorAll(".atomicat-"+e).forEach((e=>{e.innerText=t}))}))}catch(e){console.log(e)}}();

window.smartplayer=window.smartplayer||{},smartplayer.instances=smartplayer.instances||{},smartplayer.on=function(event,callback){const checkInterval=setInterval(()=>{const videoId="vid-6943034a387adf5a89eca7b2";if(smartplayer.instances[videoId]){clearInterval(checkInterval);smartplayer.instances[videoId].on(event,callback)}},100)};

smartplayer.on("smartplayer.scroll",function(){document.querySelectorAll(".smartplayer-scroll-event").forEach(function(btn){btn.classList.add("show")})});

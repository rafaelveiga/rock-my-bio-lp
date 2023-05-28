new TypeIt("#app", {})
  .type('<span class="text-[#FF4458]" id="app">Tinder</span>', { delay: 500 })
  .pause(1000)
  .delete(6, { delay: 500 })
  .type('<span class="text-[#0047FF]" id="app">OkCupid</span>', { delay: 500 })
  .pause(1000)
  .delete(8, { delay: 500 })
  .type('<span class="text-[#FFC629]" id="app">Bumble</span>', { delay: 500 })
  .pause(1000)
  .delete(6, { delay: 500 })
  .type('<span class="text-[#FF4458]" id="app">Tinder</span>', { delay: 500 })
  .pause(1000)
  .delete(6, { delay: 500 })
  .type('<span class="text-[#0047FF]" id="app">OkCupid</span>', { delay: 500 })
  .pause(1000)
  .delete(8, { delay: 500 })
  .type('<span class="text-[#FFC629]" id="app">Bumble</span>', { delay: 500 })
  .pause(1000)
  .delete(6, { delay: 500 })
  .type('<span class="text-[#FF4458]" id="app">Tinder</span>', { delay: 500 })
  .pause(1000)
  .delete(6, { delay: 500 })
  .type('<span class="text-[#0047FF]" id="app">OkCupid</span>', { delay: 500 })
  .pause(1000)
  .delete(8, { delay: 500 })
  .type('<span class="text-[#FFC629]" id="app">Bumble</span>', { delay: 500 })
  .pause(1000)
  .delete(6, { delay: 500 })
  .type('<span class="text-[#FF4458]" id="app">Tinder</span>', { delay: 500 })
  .pause(1000)
  .go();

const waitlist = document.getElementById("waitlist-join");

waitlist.addEventListener("click", () => {
  // scroll to bottom
  window.scrollTo(0, document.body.scrollHeight);
});

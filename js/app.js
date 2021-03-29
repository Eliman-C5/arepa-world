const d = document,
  $btn = d.querySelector(".btn-send"),
  $loader = `
  <div class="loader">
    <img src="assets/Spinner-1s-200px.svg" alt="loader">
  </div>`,
  $message = `<p class="special-message" style="margin-bottom: 1em;">Congratulations! Now you are part of this family</p>`;

let tester;

d.addEventListener("submit", (e) => {
  e.preventDefault();
  $btn.insertAdjacentHTML("afterend", $loader);
  $btn.style.display = "none";
  let $loaderDOM = d.querySelector("form .loader");

  setTimeout(() => {
    $loaderDOM.style.display = "none";
    $loaderDOM.insertAdjacentHTML("afterend", $message);
  }, 4000);

  setTimeout(() => {
    tester = window.open("https://eliman-c5.github.io/arepa-world/gratefulness", "tester");
  }, 5500);
});
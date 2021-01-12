const d = document,
  $btn = d.querySelector(".btn-send"),
  $loader = `<img src="assets/Spinner-1s-200px.svg" alt="loader">`,
  $message = `<p class="special-message" style="margin-bottom: 1em;">Congratulations! Now you are part of this family</p>`;

let tester;

d.addEventListener("submit", (e) => {
  e.preventDefault();
  $btn.insertAdjacentHTML("afterend", $loader);
  $btn.style.display = "none";
  let $loaderDOM = d.querySelector("form img");

  setTimeout(() => {
    $loaderDOM.style.display = "none";
    $loaderDOM.insertAdjacentHTML("afterend", $message);
  }, 4000);

  setTimeout(() => {
    tester = window.open("../gratefulness.html", "tester");
  }, 5500);
});
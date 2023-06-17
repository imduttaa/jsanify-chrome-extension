const jsanify_button = document.querySelector(".jsanify-btn");
const jsanify_input = document.querySelector(".container-input");
const jsanify_output = document.querySelector(".container-output");

jsanify_button.addEventListener("click", () => {
    const parsed_text = JSON.parse(jsanify_input.value);
    const formatted_text = JSON.stringify(parsed_text, null, 3);

    jsanify_output.value = formatted_text;
});

const toast = document.querySelector(".toast"),
    error_msz = document.querySelector(".text-2");
(closeIcon = document.querySelector(".close")),
  (progress = document.querySelector(".progress"));

let timer1, timer2;

window.onerror = function(e) {
    error_msz.innerHTML = e;
    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
        toast.classList.remove("active");
    }, 5000); //1s = 1000 milliseconds

    timer2 = setTimeout(() => {
        progress.classList.remove("active");
    }, 5300);
};

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});

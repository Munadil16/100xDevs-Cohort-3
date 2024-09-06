const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.getAttribute("id");
    document.body.style.backgroundColor = color;
  });
});

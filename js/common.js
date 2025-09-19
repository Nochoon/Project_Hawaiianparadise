let gnb;
let wrap;
window.onload = () => {
  let buttonElements = document.getElementsByTagName("button");
  wrap = document.querySelector("#wrap");

  gnb = document.querySelector(".gnb");

  for (const element of buttonElements) {
    element.addEventListener("click", () => {
      ClickButtonEvent(element.id);
    });
  }
};

function ClickButtonEvent(id) {
  console.log(`Click Button id : ${id}`);

  switch (id) {
    default:
      break;

    case "menu":
      gnb.classList.add("active");
      wrap.classList.add("clickmenu");
      break;

    case "closegnb":
      gnb.classList.remove("active");
  }
}

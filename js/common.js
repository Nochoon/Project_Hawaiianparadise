let gnb;
window.onload = () => {
  let menuBtn = document.querySelector(".btn");
  let buttonElements = document.getElementsByTagName("button");
  let id;

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
      break;

    case "closegnb":
      gnb.classList.remove("active");
  }
}

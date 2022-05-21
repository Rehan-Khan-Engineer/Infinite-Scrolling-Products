var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

let curElementNumber = 1;

function scrollHandler() {
  const distanceToBottom = document.body.getBoundingClientRect().bottom;

  if (distanceToBottom < document.documentElement.clientHeight + 150) {
    const temp = document.getElementsByTagName("template")[0];
    const clon = temp.content.cloneNode(true);
    curElementNumber++;
    const elementCount = document.createElement("h3");
    elementCount.textContent = `Element ${curElementNumber} ⬇️`;
    elementCount.className = "elementStyle";

    document.body.append(elementCount, clon);
  }
}

window.addEventListener("scroll", scrollHandler);

//documentElement is root <html> element

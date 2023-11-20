const btToggleMenu = document.querySelector(".menu-hamburger");
const dialog = document.querySelector("dialog");
const dialogContent = dialog.querySelector("form");

btToggleMenu.addEventListener("click", () => {
  document.body.classList.toggle("open-nav");
});

document.querySelector("#btree").addEventListener("click", () => openModal("assets/btree.png"));
document.querySelector("#ext2").addEventListener("click", () => openModal("assets/ext2.png"));
document.querySelector("#ext3").addEventListener("click", () => openModal("assets/ext3.png"));
document.querySelector("#ext4").addEventListener("click", () => openModal("assets/ext4.png"));

function openModal(imageSrc) {
  dialogContent.innerHTML = `<div id='X'></div> <img src='${imageSrc}'> <div class='main'>FECHAR</div>`;
  dialog.classList.remove("cookie");
  dialog.showModal();
}
function openDialog() {
  dialogContent.innerHTML = `<h1>Nós coletamos cookies de acordo com a nossa <a href='#'>Política de Privacidade</a>, você aceita a coleta de cookies?</h1><div><div id='sim'><p>SIM</p></div><div id='nao'>NÃO</div></div>`;
  dialog.classList.add("cookie");
  dialog.show();
}

dialog.addEventListener("click", (event) => {
  if (event.target.tagName === "DIV") {
    dialog.classList.remove("cookie");
    dialog.close();
  }
});

openDialog();



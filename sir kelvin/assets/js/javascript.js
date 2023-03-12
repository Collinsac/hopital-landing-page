const btn = document.getElementById('m-btn');
const menu = document.getElementById('m-menu');

btn.addEventListener('click', hide);

function hide() {

    if (menu.style.display=="none") {

        menu.style.display="block";

    } else {

        menu.style.display="none";

    }

}
const btn_menu = document.querySelector("#btn_menu");
const menu = document.querySelector("#menu");
btn_menu.addEventListener("click",function() {
    menu.classList.toggle("view");
});

const sub_menu_btn = document.querySelectorAll(".sub_menu_btn");
for(let i=0; i < sub_menu_btn.length; i++) {
    sub_menu_btn[i].addEventListener("click",function() {
        if(window.innerWidth < 3000) {
            const sub_menu = this.nextElementSibling;
            const height = sub_menu.scrollHeight;

            if(sub_menu.classList.contains("desplazar")) {
                sub_menu.classList.remove("desplazar");
                sub_menu.removeAttribute("style");
            } else {
                sub_menu.classList.add("desplazar");
                sub_menu.style.height = height + "px";
            }
        }
});
}

function main() {
    const button_no = document.querySelector(".button_no");
    button_no.addEventListener("mouseover", () => {
        console.log(button_no.style);
        if (button_no.style.gridArea == "E / E / E / E") {
            button_no.style.gridArea = "B";
        } else {
            button_no.style.gridArea = "E";
        }
    });

    const button_yes = document.querySelector(".button_yes");
    button_yes.addEventListener("click", () => {
        alert("I love you too!");
    });
}

main();
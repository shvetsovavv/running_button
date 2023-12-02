
function main() {
    const button_no = document.querySelector(".button_no");

    button_no.addEventListener("mouseover", changeGrid);
    button_no.addEventListener("click", changeGrid);

    const button_yes = document.querySelector(".button_yes");
    button_yes.addEventListener("click", () => {
        alert("I love you too!");
    });

    function changeGrid() {
        if (button_no.style.gridArea == "E / E / E / E") {
            button_no.style.gridArea = "B";
        } else {
            button_no.style.gridArea = "E";
        }
    };
}

main();
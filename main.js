window.onload = () => {

    let box = document.querySelector(".container");
    let title = document.querySelector("h1");
    let logical = true;
    
    function changeBackground() {
        logical = !logical;
        box.style.backgroundColor = logical ? "black" : "greenyellow";
        title.style.color = logical ? "white" : "black";
    };

    document.addEventListener("click", changeBackground);
};

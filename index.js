function displaySearch() {
    let x = document.getElementById("search");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function showCount() {
    let x = document.getElementById("count");
    if(x.value == 0) {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
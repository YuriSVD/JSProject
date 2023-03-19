let button = document.createElement("button");
button.innerText = "Post of Current User";
wrap.append(button);
button.onclick = function () {
    let block = document.getElementById("comments");
    if (block.style.maxHeight) {
        block.style.maxHeight = null;
    } else {
        block.style.maxHeight = block.scrollHeight + "px";
    }
}
function AddItem() {
    var item = document.createElement("P");
    var text = document.getElementById("text").value;
    item.innerHTML = text;
    document.getElementById("list").appendChild(item);
}
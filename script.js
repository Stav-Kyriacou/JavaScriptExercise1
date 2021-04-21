function AddItem() {
    var item = document.createElement("P");                     //create a paragraph element, store it in a variable
    var input = document.getElementById("text");                //store the input box as a variable
    var text = input.value;                                     //store the value of the input box as a variable

    item.innerHTML = text;                                      //set the innerhtml of paragraph element
    document.getElementById("list").appendChild(item);          //append the paragraph element to the element
    input.value = '';                                           //clear the input box
}
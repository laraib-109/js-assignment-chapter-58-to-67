// CHAPTER 58 STARTED
// QUESTION # 01

let main = document.getElementById('main-content');
    console.log(main);

    console.log(main.children);

    let renderElements = document.getElementsByClassName("render");
    for (let i = 0; i < renderElements.length; i++) {
      document.write(renderElements[i].innerHTML + "<br>");
    }
    document.getElementById("first-name").value = "Alex";

    document.getElementById("last-name").value = "Bank";
    document.getElementById("email").value = "alexbank@example.com";

document.write("<br><br>");

 // CHAPTER 58
// QUESTION # 02

let node = document.getElementById("form-content");
document.write("i. Node type of form-content :", node.nodeType + "<br>");

// FOR LAST NAME 

let last = document.getElementById("lastName");
document.write("ii.  Node type of lastName :" , last.nodeType + "<br>")
document.write("Child node type:", last.firstChild.nodeType + "<br>");

// updated  last name 
last.firstChild.nodeValue = "Last Name : Ali";
document.write("iii. Updated text :", lastName.innerText + "<br>");

// FIRST & LAST CHILD 
let mainContent = document.getElementById("main-content");
document.write("iv. First child:", mainContent.firstElementChild.innerText + "<br>");
document.write("Last child:", mainContent.lastElementChild.innerText + "<br>");


// PREVIOUS AND NEXT SIBILINGS 
document.write("v. Next sibling :", lastName.nextElementSibling.innerText + "<br>");
document.write("Previous sibling :", lastName.previousElementSibling.innerText + "<br>")

// NODE TYPE OF EMAIL 
let email = document.getElementById("email");
document.write("vi. Parent node:", email.parentNode.nodeName + "<br>");
document.write("Node type of email:", email.nodeType);



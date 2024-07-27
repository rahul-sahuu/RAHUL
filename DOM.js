// //added cum back

let docTitle = document.title;
window.addEventListener("blur", () => {document.title = "anty munty sunty";
})
window.addEventListener("focus", () => {
document.title = docTitle;
})
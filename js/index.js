
function getContent() {
    let intro = document.getElementById("shortIntro").textContent;
    return intro;
}
$(document).ready(function () {
    let introDiv = $("#aboutMe")
    if (introDiv.is(':visible')) {
        let content = getContent();
        $("#intro").typedText(content);
    }
})
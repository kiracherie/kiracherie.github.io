var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
function addResponsive() {
    console.log("adding responsive class\n")
    var x = document.getElementById("myTopnav");
    if (!x.classList.contains('responsive')) {
        x.classList.add('responsive');
    } else {
        x.classList.remove('responsive');
    }
}
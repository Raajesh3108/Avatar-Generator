let canvas, ctx, w, h;
const colour = ['#6f97a5', '#87d4ab', '#dac45d', '#d45757', '#d6627e', '#bb62d6', '#34c5b1', '#e4803e', '#d10e68', '#c6c82d'];
document.getElementById('profile').style.background = colour[0];
document.getElementById('profile').textContent = "RP";
var e1 = document.getElementById('btn');
var i = 0;
e1.addEventListener("click", function () {
    i = i + 1;
    i = i % colour.length;
    document.getElementById('profile').style.background = colour[i];
    var result = document.getElementById('input').value;
    var words = result.split(' ');
    if (words.length === 1) {
        firstWord = words[0][0];
        document.getElementById('profile').textContent = firstWord;
    }
    else {
        var firstWord = words[0][0];
        var secondWord = words[1][0];
        document.getElementById('profile').textContent = firstWord + secondWord;
    }
});

let download = () => {
    let profile = document.querySelector("#profile");
    let name = document.querySelector("#input").value;
    name = name.split(" ").join("_") + "_profile";
    profile.style.borderRadius = "0px";
    html2canvas(profile).then((canvas) => {
        // Convert the canvas to blob
        canvas.toBlob((blob) => {
            let link = document.createElement("a");
            link.download = `${name}.png`;
            link.href = URL.createObjectURL(blob);
            link.click();
            profile.style.borderRadius = "50%";
        }, 'image/png');
    });
}
var e2 = document.querySelector(".download")
e2.addEventListener("click", function () {
    download();
});
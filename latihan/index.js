const picture = document.querySelector("#picture");
const button = document.querySelector("#show-hide-button");

button.addEventListener("click", () => {
    if (picture.style.display === 'none') {
        picture.style.display = 'inline-block';
    } else {
        picture.style.display = 'none';
    }
});
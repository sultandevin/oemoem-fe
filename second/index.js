
const kotak = document.querySelector(".kotak");

// tombol ganti warna
const jadiHitam = document.querySelector("#jadi-hitam");
jadiHitam.addEventListener("click", () => {
    kotak.style.backgroundColor = "black";
});

// tombol reset warna
const jadiPink = document.querySelector("#jadi-pink");
jadiPink.addEventListener("click", () => {
    kotak.style.backgroundColor = "pink";
})
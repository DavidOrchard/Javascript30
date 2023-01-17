const togglePlay = () => {
    document.querySelector("video").play();
}


document.querySelector(".player__button.toggle").addEventListener("click", togglePlay);


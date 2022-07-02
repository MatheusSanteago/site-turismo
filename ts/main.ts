const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
const navtext = document.querySelectorAll(".nav-link");
const navbar = document.querySelector(".navbar");
const icon = document.querySelectorAll("i");


// Altera o tema
function changeTheme(event: any) {

    if (event.matches) {
        themeDark();
    } else {
        themeLight();
    }
};

// Escuta a mudança de tema no sistema
prefersColorScheme.addListener(changeTheme);

// Altera o tema conforme o tema do usuário
changeTheme(prefersColorScheme);

function themeLight() {
    navbar?.classList.add("bg-light");
    icon[0].style.color = "Black";
    icon[1].style.color = "Black";
    navtext.forEach(e => {
        e.classList.add("text-dark");
    });
}

function themeDark() {

    navbar?.classList.add("bg-dark");
    icon[0].style.color = "White";
    icon[1].style.color = "White";
    navtext.forEach(e => {
        e.classList.add("text-light");
    });
}

function addImage(
    srcOne: string,
    srcTwo: string,
    srcThree: string,
    localOne: string,
    localTwo: string,
    localThree: string
) {
    const carouselImage = document.querySelectorAll("img");
    var imgCheck = false;

    try {
        carouselImage[0].src = `${srcOne}`;
        carouselImage[1].src = `${srcTwo}`;
        carouselImage[2].src = `${srcThree}`;
    } catch (err) {
        console.log(err);
    }

    imgCheck = true;
    if (imgCheck) addInfo(localOne, localTwo, localThree);
}

function addInfo(localOne: string, localTwo: string, localThree: string) {
    const localName = document.querySelectorAll("h1");

    localName[0].textContent = `Visite ${localOne}!`;
    localName[1].textContent = `Visite ${localTwo}!`;
    localName[2].textContent = `Visite ${localThree}!`;
}

window.onload = () => {
    addImage(
        "https://images.alphacoders.com/470/thumb-1920-470208.jpg",
        "https://images6.alphacoders.com/469/thumb-1920-469195.jpg",
        "https://images5.alphacoders.com/458/458484.jpg",
        "Londres",
        "Orlando",
        "Egito"
    );
};

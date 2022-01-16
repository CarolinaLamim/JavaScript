const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');


const changeCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;

    } catch (e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await changeCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();

/* outra forma, sem o catch 

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');


const changeCats = async () => {
        const data = await fetch(BASE_URL);
        .then(res=> res.jason())
        .catch( e => console.log(e)) 

        return data.webpurl;
};   

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await changeCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();*/
const btn = document.querySelector('button');
const items = document.querySelectorAll('li');
const liArray = [... items];

let size = 10;

const clicker = () => {

    liArray.forEach(function(liArray) {

        liArray.style.display = "block";
        liArray.style.fontSize = size + "px"

    })

    size ++ ;

}

btn.addEventListener("click" , clicker);
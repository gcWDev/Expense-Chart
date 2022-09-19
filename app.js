let map = new Map();

map.set('mon', 17.45)
map.set('tue', 34.91)
map.set('wed', 52.36)
map.set('thu', 31.07)
map.set('fri', 23.39)
map.set('sat', 43.28)
map.set('sun', 25.48)

const text = document.querySelectorAll('.days')

for (let i = 0; i < text.length; i++) {
    const parentElement = text[i].parentElement
    parentElement.style.height = heightCalculator(text[i].innerText)
    parentElement.addEventListener('click', function () {
        if (parentElement.style.backgroundColor == 'rgb(118, 181, 188)') {
            parentElement.style.backgroundColor = 'hsl(10, 79%, 65%)'
        } else {
            parentElement.style.backgroundColor = 'hsl(186, 34%, 60%)'
            parentElement.style.transition = '0.5s'
        }
    })
}

function heightCalculator(bar) {
    let max = 0
    map.forEach(e => {
        if (max < e) {
            max = e;
        }
    })
    let temp = map.get(bar);
    let ans = temp / max * 160
    return ans.toString() + 'px'
}

//add mouse over to display the money box + mouse out 
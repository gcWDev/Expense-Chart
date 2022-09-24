
let map = new Map();

map.set('mon', 17.45)
map.set('tue', 34.91)
map.set('wed', 52.36)
map.set('thu', 31.07)
map.set('fri', 23.39)
map.set('sat', 43.28)
map.set('sun', 25.48)

const text = document.querySelectorAll('.days')
const pricing = document.querySelectorAll('.dollar-amount')

function pricingToggle() {
    for (let i = 0; i < pricing.length; i++) {
        const siblingText = pricing[i].nextElementSibling.innerText
        pricing[i].lastElementChild.innerText = '$' + map.get(siblingText)
        pricing[i].style.display = 'none'
    }
}

for (let i = 0; i < text.length; i++) {
    const parentElement = text[i].parentElement
    const temp = parentElement.childNodes[1]
    parentElement.style.height = heightCalculator(text[i].innerText)
    parentElement.addEventListener('click', function () {
        if (parentElement.style.backgroundColor == 'rgb(118, 181, 188)') {
            parentElement.style.backgroundColor = 'hsl(10, 79%, 65%)'
        } else {
            parentElement.style.backgroundColor = 'hsl(186, 34%, 60%)'
            parentElement.style.transition = '0.5s'
        }
    })
    parentElement.addEventListener('mouseover', function () {
        console.log(temp)
        temp.style.display = ''
    })
    parentElement.addEventListener('mouseout', function () {
        temp.style.display = 'none'
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
pricingToggle()
const quote = document.querySelector('.advice-box__advice');
const adviceNumber = document.querySelector('.advice-box__advice-number');
const rollBtn = document.querySelector('.advice-box__randomize-btn');
const dice = document.querySelector('.dice');
const divider = document.querySelector('.advice-box__divider')
function randomAdvice()
{
    fetch('https://api.adviceslip.com/advice')
    .then(res=> res.json())
    .then(data=>{
        adviceNumber.textContent = `advice #${data['slip'].id}`;
        quote.textContent = data['slip'].advice;
    })

}
const perform = () => {
    rollBtn.classList.remove('hover');
    dice.classList.add('r-roll');
    setTimeout(()=>
    {
        dice.classList.remove('r-roll');
        dice.classList.add('roll');
    }, 1000);
    setTimeout(randomAdvice, 2000);
    dice.classList.remove('roll');
    rollBtn.classList.add('hover');
}
const checkDivider = () => {
    divider.setAttribute('src', window.innerWidth >= 768 ? './src/img/pattern-divider-desktop.svg':'./src/img/pattern-divider-mobile.svg')
}
checkDivider();
rollBtn.addEventListener('click', perform);
window.addEventListener('resize', checkDivider);
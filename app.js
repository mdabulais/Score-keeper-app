let p1Button = document.querySelector('#p1Button');
let p2Button = document.querySelector('#p2Button');
let resetButton = document.querySelector('#reset');

let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
let scoreTarget = document.querySelector('#target')

let p1Score = 0
let p2Score = 0
let winningScore = 3

let isGameOver = false

p1Button.addEventListener('click', function(){
    if(!isGameOver){
        p1Score++
        if(p1Score===winningScore){
            isGameOver = true
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score
    }
})

p2Button.addEventListener('click', function(){
    if(!isGameOver){
        p2Score++
        if(p2Score===winningScore){
            isGameOver = true
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score
    }
})

resetButton.addEventListener('click', reset);

function reset(){
    p1Score = 0
    p2Score = 0
    p1Display.textContent = 0
    p2Display.textContent = 0
    isGameOver = false
    p1Display.classList.remove('has-text-success', 'has-text-danger')
    p2Display.classList.remove('has-text-success', 'has-text-danger')
    p1Button.disabled = false
    p2Button.disabled = false
}

scoreTarget.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})
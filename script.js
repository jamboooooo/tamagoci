class CreateTamagochi {
    tamagochi = {
        name: 'jambo',
        energy: 3,
        food: 3,
        mood: 3,
        getStatus: function() {
            console.log(tama.name);
            if (tama.energy < 3) {
                myEnergyStatus.textContent = 'Я хочу спать'
            } else {
                myEnergyStatus.textContent = 'Я не хочу спать'
            }
            if (tama.food < 3) {
                myEatStatus.textContent = 'Я хочу есть'
            } else {
                myEatStatus.textContent = 'Я не хочу есть'
            }
            if (tama.mood < 3) {
                myMoodStatus.textContent = 'Мне скучно'
            } else {
                myMoodStatus.textContent = 'Мне весело'
            }
            if (tama.mood <= 0 || tama.energy <= 0 || tama.food <= 0) {
                alert(tama.name + ' умер :(')
            }
        },
        setName: function(name) {
            tama.name = name;
        },
        getFood: function() {
            if (tama.food < 5) {
                tama.food += 1;
            }
            tama.mood -= 1;
            tama.getValue();
        },
        getSleep: function() {
            if (tama.energy < 5) {
                tama.energy += 1;
            }
            tama.food -= 1;
            tama.getValue();
        },
        getPlay: function() {
            if (tama.mood < 5) {
                tama.mood += 1;
            }
            tama.energy -= 1;
            tama.getValue();
        },
        getValue: function() {
            eatItem.textContent = tama.food;
            sleepItem.textContent = tama.energy;
            playItem.textContent = tama.mood;
            tama.checkState();
            tama.getStatus();
        },
        checkState: function() {
            if (tama.energy === 0 || tama.mood === 0 || tama.food === 0) {
                emodji.innerHTML = '☠️'
            } else if (tama.food < 3 && tama.energy < 3 || tama.energy < 3 && tama.mood < 3 || tama.mood < 3 && tama.food < 3) {
                emodji.innerHTML = '😭'
            } else if (tama.energy < 3 || tama.mood < 3 || tama.food < 3) {
                emodji.innerHTML = '😐'
            } else {
                emodji.innerHTML = '😀'
            }

        }
    }

}

const tama = new CreateTamagochi().tamagochi

const eatBtn = document.querySelector('.eat')
const sleepBtn = document.querySelector('.sleep')
const playBtn = document.querySelector('.play')
const status = document.querySelector('.status')
const emodji = document.querySelector('.emo')
const eatItem = document.querySelector('.eat-item')
const sleepItem = document.querySelector('.sleep-item')
const playItem = document.querySelector('.play-item')
const myEatStatus = document.querySelector('.my-eat-status')
const myEnergyStatus = document.querySelector('.my-energy-status')
const myMoodStatus = document.querySelector('.my-mood-status')

eatBtn.addEventListener('click', tama.getFood)
sleepBtn.addEventListener('click', tama.getSleep)
playBtn.addEventListener('click', tama.getPlay)
status.addEventListener('click', tama.getStatus)
tama.getValue();
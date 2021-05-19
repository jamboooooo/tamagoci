function createTamagochi() {
    const tamagochi = {
        name: 'jambo',
        energy: 3,
        food: 3,
        mood: 3,
        getStatus: function() {
            console.log(this.name);
            if (this.energy < 3) {
                console.log('Я хочу спать');
            } else {
                console.log('Я не хочу спать')
            }
            if (this.food < 3) {
                console.log('Я голоден');
            } else {
                console.log('Я не голоден')
            }
            if (this.mood < 3) {
                console.log('Мне скучно')
            } else {
                console.log('Мне весело')
            }
            if (this.mood === 0 || this.energy === 0 || this.food === 0) {
                console.log(this.name + ' умер :(')
            }
        },
        setName: function(name) {
            this.name = name;
        },
        getFood: function() {
            if (this.food < 5) {
                this.food += 1;
            }
            this.mood -= 1;
        },
        getSleep: function() {
            if (this.energy < 5) {
                this.energy += 1;
            }
            this.food -= 1;
        },
        getPlay: function() {
            if (this.mood < 5) {
                this.mood += 1;
            }
            this.energy -= 1;
        }
    }
}
let tamagochi = {
    name: 'jambo',
    energy: 3,
    food: 3,
    mood: 3,
    getStatus: function() {
        console.log(this.name);
        console.log(this.energy);
        console.log(this.food);
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
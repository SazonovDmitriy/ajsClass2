class Character {
    constructor(name, type, health, level, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = [
            {Bowman: 25},
            {Swordsman: 40},
            {Magician: 10},
            {Undead: 25},
            {Zombie: 40},
            {Daemon: 10}
        ];
        this.defence = [
            {Bowman: 25},
            {Swordsman: 10},
            {Magician: 40},
            {Undead: 25},
            {Zombie: 10},
            {Daemon: 40}
        ];
        function nameText (text) {
        if (text.length >= 2 || text.length <= 10) {
            return text
         } else {
            throw new Error("Ошибка")
         }
        };
    };
};

class Bowerman extends Character {

};

class Swordsman extends Character {

};

class Magician extends Character {

};

class Daemon extends Character {

};

class Undead extends Character {

};

class Zombie extends Character {

};
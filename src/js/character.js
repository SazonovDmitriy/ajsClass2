export default class Character {
    constructor(character, type) {
        if (character.length < 2 || character.length > 10) {
            throw new Error('Неверная длинна имени');
        } else {
            this.name = character;
        };
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!types.includes(type)) {
            throw new Error('Неверно указан тип');
        } else {
            this.type = type;
        }

        this.health = 100;
        this.level = 1;

        function levelUp () {
            if (health === 0) {
                return 'Нельзя повысить левел умершего';
            } else {
                this.level++;
                this.health = 100;
                let attack = this.attack / 100 * 20;
                let defence = this.defence / 100 * 20;
            };
        };
        function damage(points) {
            if (health >= 0) {
                health -= points * (1 - defence / 100)
            };
        };
    }
};
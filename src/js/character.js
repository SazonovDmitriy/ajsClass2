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
    }
};
import Character from "./character";

export default class Magician extends Character {
    constructor(Character, type) {
        super(Character, type);
        this.attack = 10;
        this.defence = 40;
    }
}
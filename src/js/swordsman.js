import Character from "./character";

export default class Swordsman extends Character {
    constructor(Character, type) {
        super(Character, type);
        this.attack = 40;
        this.defence = 10;
    }
}
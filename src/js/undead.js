import Character from "./character";

export default class Undead extends Character {
    constructor(Character, type) {
        super(Character, type);
        this.attack = 25;
        this.defence = 25;
    }
}
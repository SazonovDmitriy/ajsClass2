import Character from "./character";

export default class Daemon extends Character {
    constructor(Character, type) {
        super(Character, type);
        this.attack = 10;
        this.defence = 40;
    }
}
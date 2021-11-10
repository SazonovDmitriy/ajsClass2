import Bowerman from "../bowerman.js";
import Character from "../character.js";

test('Create Character', () => {
    const name = 'name';
    const type = 'Bowerman';

    const expected = {
        name,
        type,
        health: 100,
        level: 1,
    };

    const recevied = new Character(name, type);

    expect(recevied).toEqual(expected);
});

test('Error Character big length', () => {
    const name = '12345678910';
    const type = 'Bowerman';

    expect(() => new Character(name, type)).toThrow(new Error('Неверная длинна имени'));
});

test('Error Character small length', () => {
    const name = '1';
    const type = 'Bowerman';

    expect(() => new Character(name, type)).toThrow(new Error('Неверная длинна имени'));
});

test('Error Character type', () => {
    const name = 'name';
    const type = 'Bow';

    expect(() => new Character(name, type)).toThrow(new Error('Неверно указан тип'));
});

test('levelUp', () => {
    const character = new Bowerman('name', 'Bowerman');
    character.levelUp();
    expect(character.level).toEqual(2);
});

test('Error health = 0', () => {
    const character = new Bowerman('name', 'Bowerman');
    character.health = 0;
    expect(() => character.levelUp()).toThrow();
});

test('Проверка damage при health > 0', () => {
    const bowerman = new Bowerman('John', 'Bowerman');
    bowerman.damage(10);
    expect(92.5).toEqual(bowerman.health);
});

test('Проверка damage при health < 0', () => {
    const bowerman = new Bowerman('John', 'Bowerman');
    bowerman.health = -1;
    expect(() => bowerman.damage(10)).toThrow();
});


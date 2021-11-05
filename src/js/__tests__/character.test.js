import Character from "../character.js";

test('Create Character', () => {
    const character = 'character';
    const type = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    const expected = {
        name: character,
        type: type,
        health: 100,
        level: 1,
    };
    
    
    const recevied = new Character(character, type);

    expect(recevied).toEqual(expected);
});

test('Error Character length', () => {
    const character = '12345678910';
    const type = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    const expected = {
        name: character,
        type: type,
        health: 100,
        level: 1,
    };

    const recevied = new Character(character, type);

    expect(recevied).toThrow(new Error('Неверная длинна имени'));
});

test('Error Character length', () => {
    const character = '1';

    const expected = {
        name: character,
        type: type,
        health: 100,
        level: 1,
    };
    
    const recevied = new Character(character, type);

    expect(recevied).toThrow(new Error('Неверная длинна имени'));
});

test('Error Character type', () => {
    const character = 'character';
    const type = 'Bow';

    const expected = {
        name: character,
        type: type,
        health: 100,
        level: 1,
    };
  
    const recevied = new Character(character, type);

    expect(recevied).toThrow(new Error('Неверно указан тип'));
});
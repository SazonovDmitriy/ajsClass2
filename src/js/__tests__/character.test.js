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

test('Error levelUp', () => {
    const character = new Bowerman('name', 'Bowerman');
    character.health = 0;
    character.damage(65);
    
    const received = character.health;

    const expected = 0;

    expect(received).toBeCloseTo(expected);   
});
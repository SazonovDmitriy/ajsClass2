import Bowerman from "../bowerman.js";

test('Create Daemon', () => {
    const character = 'name';
    const type = 'Bowerman';

    const expected = {
        name: 'name',
        type: 'Bowerman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };

    const recevied = new Bowerman(character, type);

    expect(recevied).toEqual(expected);
});
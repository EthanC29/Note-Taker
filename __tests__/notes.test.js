const fs = require('fs');
const { findById, createNewNote, validateNote } = require('../lib/notes.js');

jest.mock('fs');

test('creates a new note object', () => {
  const note = createNewNote({ title: 'Finish Coding Project', text: 'It is due on Sunday at midnight' }, []);

  expect(note.title).toBe('Finish Coding Project');
  expect(note.text).toBe('It is due on Sunday at midnight');
});

test('finds note by id', () => {
  const startingNotes = [
    {
      title: 'Exam next week',
      text: 'Make sure to study chapters 10, 11 & 12',
      id: '3'
    },
    {
      title: 'Anniversary on the 23rd',
      text: 'Check back that the gift will be ready',
      id: '4'
    }
  ];

  const result = findById('3', startingNotes);

  expect(result.title).toBe('Exam next week');
  expect(result.text).toBe('Make sure to study chapters 10, 11 & 12');
});

test('validates notes to see if in proper format', () => {
  const valid = {
    title: 'Exam next week',
    text: 'Make sure to study chapters 10, 11 & 12',
    id: '3'
  };

  const invalid = {
    title: 'Anniversary on the 23rd',
    text: 'Check back that the gift will be ready'
  };

  const result = validateNote(valid);
  const result2 = validateNote(invalid);

  expect(result).toBe(true);
  expect(result2).toBe(false);
});
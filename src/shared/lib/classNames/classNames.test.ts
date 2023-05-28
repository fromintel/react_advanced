import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('should return class with only one first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('should return class with additional classes', () => {
    const expectedResult = 'someClass className1 className2';
    expect(classNames('someClass', {}, ['className1', 'className2']))
      .toBe(expectedResult);
  });

  test('should return class with additional classes and modifications', () => {
    const expectedResult = 'someClass className1 className2 hovered scrollable';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true },
      ['className1', 'className2'],
    )).toBe(expectedResult);
  });

  test(
    'should return classes and modifications where one of them has false',
    () => {
      const expectedResult = 'someClass className1 className2 hovered';
      expect(classNames(
        'someClass',
        { hovered: true, scrollable: false },
        ['className1', 'className2'],
      )).toBe(expectedResult);
    },
  );

  test(
    'should return class and modifications where one of them has undefined',
    () => {
      const expectedResult = 'someClass className1 className2 scrollable';
      expect(classNames(
        'someClass',
        { hovered: undefined, scrollable: true },
        ['className1', 'className2'],
      )).toBe(expectedResult);
    },
  );
});

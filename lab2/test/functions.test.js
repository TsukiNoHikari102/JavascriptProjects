require('../src/functions');

describe('Function.prototype.myCall', () => 
{
    function add(a, b) { return a + b; }
    test('binds context and arguments correctly', () => 
        {
        const obj = { x: 10 };
        function getXPlus(a, b) { return this.x + a + b; }
        expect(getXPlus.myCall(obj, 1, 2)).toBe(13);
    });

    test('handles null or undefined context as global object', () => 
    {
        global.value = 5;
        function getValue() { return this.value; }
        expect(getValue.myCall(null)).toBe(5);
        expect(getValue.myCall(undefined)).toBe(5);
        delete global.value;
    });

    test('returns correct result for no arguments', () => 
    {
        function sayHello() { return 'hello'; }
        expect(sayHello.myCall({})).toBe('hello');
    });
});

describe('Function.prototype.myApply', () => {
    test('binds context and array of arguments correctly', () => 
    {
        const obj = { x: 3 };
        function multiply(a, b) { return this.x * a * b; }
        expect(multiply.myApply(obj, [2, 4])).toBe(24);
    });

    test('handles null or undefined context and no args', () => 
    {
        global.msg = 'test';
        function getMsg() { return this.msg; }
        expect(getMsg.myApply(undefined)).toBe('test');
        expect(getMsg.myApply(null, [])).toBe('test');
        delete global.msg;
    });

    test('throws TypeError for non-array-like args', () => 
    {
        function fn() {}
        expect(() => fn.myApply({}, 123)).toThrow(TypeError);
    });
});

describe('Function.prototype.myBind', () => 
{
    const module = { x: 42 };
    function getXPlus(a, b) { return this.x + a + b; }

    test('creates a function with bound context and partial arguments', () => 
    {
        const bound = getXPlus.myBind(module, 1);
        expect(bound(2)).toBe(45);
    });

    test('ignores context when used as constructor', () => 
    {
        function Point(x, y) { this.x = x; this.y = y; }
        const BoundPoint = Point.myBind({});
        const p = new BoundPoint(5, 10);
        expect(p.x).toBe(5);
        expect(p.y).toBe(10);
        expect(p instanceof Point).toBe(true);
        expect(p instanceof BoundPoint).toBe(true);
    });

    test('bind without arguments still binds context', () => 
    {
        function getX() { return this.x; }
        const boundNoArgs = getX.myBind(module);
        expect(boundNoArgs()).toBe(42);
    });
});

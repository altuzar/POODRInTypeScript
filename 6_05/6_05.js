// class Bicycle
//   attr_reader :size, :tape_color
var Bicycle = /** @class */ (function () {
    function Bicycle(opts) {
        this._size = opts.size;
        this._tape_color = opts.tape_color;
    }
    Object.defineProperty(Bicycle.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle.prototype, "tape_color", {
        get: function () {
            return this._tape_color;
        },
        enumerable: true,
        configurable: true
    });
    // every bike has the same defaults for tire and chain size
    Bicycle.prototype.spares = function () {
        return {
            chain: '11-speed',
            tire_size: '23',
            tape_color: this.tape_color
        };
    };
    return Bicycle;
}());
var bike = new Bicycle({
    size: 'M',
    tape_color: 'red'
});
console.log(bike.size);
// => M
console.log(bike.spares());
// => { chain: '11-speed', tire_size: '23', tape_color: 'red' }

// class Bicycle
//   attr_reader :style, :size,
//               :tape_color,
//               :front_shock, :rear_shock
var Bicycle2 = /** @class */ (function () {
    function Bicycle2(opts) {
        if (opts === void 0) { opts = {}; }
        this._style = opts.style;
        this._size = opts.size;
        this._tape_color = opts.tape_color;
        this._front_shock = opts.front_shock;
        this._rear_shock = opts.rear_shock;
    }
    Object.defineProperty(Bicycle2.prototype, "style", {
        get: function () {
            return this._style;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle2.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle2.prototype, "tape_color", {
        get: function () {
            return this._tape_color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle2.prototype, "front_shock", {
        get: function () {
            return this._front_shock;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle2.prototype, "rear_shock", {
        get: function () {
            return this._rear_shock;
        },
        enumerable: true,
        configurable: true
    });
    // checking 'style' starts down a slippery slope
    Bicycle2.prototype.spares = function () {
        if (this.style === 'road') {
            return {
                chain: '11-speed',
                tire_size: '23',
                tape_color: this.tape_color
            };
        }
        else {
            return {
                chain: '11-speed',
                tire_size: '2.1',
                front_shock: this.front_shock
            };
        }
    };
    return Bicycle2;
}());
var bike2;
bike2 = new Bicycle2({
    style: 'mountain',
    size: 'S',
    front_shock: 'Manitou',
    rear_shock: 'Fox'
});
console.log(bike2.spares());
// => { chain: '11-speed', tire_size: '2.1', front_shock: 'Manitou' }
bike2 = new Bicycle2({
    style: 'road',
    size: 'M',
    tape_color: 'red'
});
console.log(bike2.spares());
// => { chain: '11-speed', tire_size: '23', tape_color: 'red' }

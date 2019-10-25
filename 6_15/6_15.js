// # Original Bicycle class
// class Bicycle
//   attr_reader :size, :tape_color
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bicycle3 = /** @class */ (function () {
    function Bicycle3(opts) {
        if (opts === void 0) { opts = {}; }
        this._size = opts.size;
        this._tape_color = opts.tape_color;
    }
    Object.defineProperty(Bicycle3.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle3.prototype, "tape_color", {
        get: function () {
            return this._tape_color;
        },
        enumerable: true,
        configurable: true
    });
    // every bike has the same defaults for tire and chain size
    Bicycle3.prototype.spares = function () {
        return {
            chain: '11-speed',
            tire_size: '23',
            tape_color: this.tape_color
        };
    };
    return Bicycle3;
}());
var MountainBike = /** @class */ (function (_super) {
    __extends(MountainBike, _super);
    function MountainBike(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, opts) || this;
        _this._front_shock = opts.front_shock;
        _this._rear_shock = opts.rear_shock;
        return _this;
    }
    Object.defineProperty(MountainBike.prototype, "front_shock", {
        get: function () {
            return this._front_shock;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MountainBike.prototype, "rear_shock", {
        get: function () {
            return this._rear_shock;
        },
        enumerable: true,
        configurable: true
    });
    MountainBike.prototype.spares = function () {
        return Object.assign({}, _super.prototype.spares.call(this), {
            front_shock: this.front_shock
        });
    };
    return MountainBike;
}(Bicycle3));
var mountain_bike = new MountainBike({
    size: 'S',
    front_shock: 'Manitou',
    rear_shock: 'Fox'
});
console.log(mountain_bike.size);
// => S
console.log(mountain_bike.spares());
// => { chain: '11-speed', tire_size: '23', tape_color: undefined, front_shock: 'Manitou' }
// This should be a copy of out2, duplicated because I want to spread it out and comment on it.
// => {
//   chain: '11-speed',
//   tire_size: '23',       <- wrong!
//   tape_color: undefined, <- not applicable!
//   front_shock: 'Manitou'
// }

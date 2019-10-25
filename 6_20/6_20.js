// class Bicycle
//   # This class is empty except for initialize.
//   # Code has been moved to RoadBike.
//   def initialize(**opts)
//   end
// end
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
var Bicycle4 = /** @class */ (function () {
    function Bicycle4(opts) {
        if (opts === void 0) { opts = {}; }
        this._size = opts.size;
        this._tape_color = opts.tape_color;
    }
    Object.defineProperty(Bicycle4.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle4.prototype, "tape_color", {
        get: function () {
            return this._tape_color;
        },
        enumerable: true,
        configurable: true
    });
    // every bike has the same defaults for tire and chain size
    Bicycle4.prototype.spares = function () {
        return {
            chain: '11-speed',
            tire_size: '23',
            tape_color: this.tape_color
        };
    };
    return Bicycle4;
}());
var MountainBike4 = /** @class */ (function (_super) {
    __extends(MountainBike4, _super);
    function MountainBike4(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, opts) || this;
        _this._front_shock = opts.front_shock;
        _this._rear_shock = opts.rear_shock;
        return _this;
    }
    Object.defineProperty(MountainBike4.prototype, "front_shock", {
        get: function () {
            return this._front_shock;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MountainBike4.prototype, "rear_shock", {
        get: function () {
            return this._rear_shock;
        },
        enumerable: true,
        configurable: true
    });
    MountainBike4.prototype.spares = function () {
        return Object.assign({}, _super.prototype.spares.call(this), {
            front_shock: this.front_shock
        });
    };
    return MountainBike4;
}(Bicycle4));
var mountain_bike4 = new MountainBike4({
    size: 'S',
    front_shock: 'Manitou',
    rear_shock: 'Fox'
});
console.log(mountain_bike4.size);
// => S
console.log(mountain_bike4.spares());
// => { chain: '11-speed', tire_size: '23', tape_color: undefined, front_shock: 'Manitou' }
// This should be a copy of out2, duplicated because I want to spread it out and comment on it.
// => {
//   chain: '11-speed',
//   tire_size: '23',       <- wrong!
//   tape_color: undefined, <- not applicable!
//   front_shock: 'Manitou'
// }

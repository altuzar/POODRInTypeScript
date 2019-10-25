// class Bicycle
//   attr_reader :size       # <- promoted from RoadBike
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
var Bicycle5 = /** @class */ (function () {
    function Bicycle5(opts) {
        if (opts === void 0) { opts = {}; }
        this._size = opts.size; // <- promoted from RoadBike
    }
    Object.defineProperty(Bicycle5.prototype, "size", {
        get: function () {
            return this._size;
        } // <- promoted from RoadBike
        ,
        enumerable: true,
        configurable: true
    });
    return Bicycle5;
}());
var RoadBike5 = /** @class */ (function (_super) {
    __extends(RoadBike5, _super);
    function RoadBike5(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, opts) || this;
        _this._tape_color = opts.tape_color;
        return _this;
    }
    Object.defineProperty(RoadBike5.prototype, "tape_color", {
        get: function () {
            return this._tape_color;
        },
        enumerable: true,
        configurable: true
    });
    RoadBike5.prototype.spares = function () {
        return {
            chain: '11-speed',
            tire_size: '23',
            tape_color: this.tape_color
        };
    };
    return RoadBike5;
}(Bicycle5));
var MountainBike5 = /** @class */ (function (_super) {
    __extends(MountainBike5, _super);
    function MountainBike5(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, opts) || this;
        _this._front_shock = opts.front_shock;
        _this._rear_shock = opts.rear_shock;
        return _this;
    }
    Object.defineProperty(MountainBike5.prototype, "front_shock", {
        get: function () {
            return this._front_shock;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MountainBike5.prototype, "rear_shock", {
        get: function () {
            return this._rear_shock;
        },
        enumerable: true,
        configurable: true
    });
    MountainBike5.prototype.spares = function () {
        return Object.assign({}, _super.prototype.spares.call(this), {
            front_shock: this.front_shock
        });
    };
    return MountainBike5;
}(Bicycle5));
var road_bike5 = new RoadBike5({
    size: 'M',
    tape_color: 'red'
});
var mountain_bike5 = new MountainBike5({
    size: 'S',
    front_shock: 'Manitou',
    rear_shock: 'Fox'
});
console.log(road_bike5.size);
// => M
console.log(mountain_bike5.size);
// => S
console.log(road_bike5.spares());
// => { chain: '11-speed', tire_size: '23', tape_color: 'red' }
console.log(mountain_bike5.spares());
// => TypeError: (intermediate value).spares is not a function
//      at MountainBike.spares ...

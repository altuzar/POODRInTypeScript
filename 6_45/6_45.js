// # ...
// class Bicycle
//   attr_reader :size, :chain, :tire_size
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
var Bicycle10 = /** @class */ (function () {
    function Bicycle10(opts) {
        if (opts === void 0) { opts = {}; }
        this._size = opts.size;
        this._chain = opts.chain || this.default_chain();
        this._tire_size = opts.tire_size || this.default_tire_size();
        this.post_initialize(opts); // Bicycle both sends
    }
    Object.defineProperty(Bicycle10.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle10.prototype, "chain", {
        get: function () {
            return this._chain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle10.prototype, "tire_size", {
        get: function () {
            return this._tire_size;
        },
        enumerable: true,
        configurable: true
    });
    Bicycle10.prototype.spares = function () {
        return Object.assign({}, {
            tire_size: this.tire_size,
            chain: this.chain
        }, this.local_spares());
    };
    Bicycle10.prototype.default_tire_size = function () {
        throw new Error('Not implemented');
    };
    Bicycle10.prototype.post_initialize = function (opts) {
        if (opts === void 0) { opts = {}; }
    }; // and implements this
    Bicycle10.prototype.default_chain = function () {
        return '11-speed';
    };
    return Bicycle10;
}());
var RoadBike10 = /** @class */ (function (_super) {
    __extends(RoadBike10, _super);
    function RoadBike10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoadBike10.prototype.post_initialize = function (opts) {
        if (opts === void 0) { opts = {}; }
        // RoadBike can optionally override it
        this._tape_color = opts.tape_color;
    };
    Object.defineProperty(RoadBike10.prototype, "tape_color", {
        get: function () {
            return this._tape_color;
        },
        enumerable: true,
        configurable: true
    });
    RoadBike10.prototype.local_spares = function () {
        return {
            tape_color: this.tape_color
        };
    };
    RoadBike10.prototype.default_tire_size = function () {
        return '23';
    };
    return RoadBike10;
}(Bicycle10));
var MountainBike10 = /** @class */ (function (_super) {
    __extends(MountainBike10, _super);
    function MountainBike10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MountainBike10.prototype.post_initialize = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._front_shock = opts.front_shock;
        this._rear_shock = opts.rear_shock;
    };
    Object.defineProperty(MountainBike10.prototype, "front_shock", {
        get: function () {
            return this._front_shock;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MountainBike10.prototype, "rear_shock", {
        get: function () {
            return this._rear_shock;
        },
        enumerable: true,
        configurable: true
    });
    MountainBike10.prototype.spares = function () {
        return {
            front_shock: this.front_shock
        };
    };
    MountainBike10.prototype.default_tire_size = function () {
        return '2.1';
    };
    return MountainBike10;
}(Bicycle10));
var road_bike10 = new RoadBike10({
    size: 'M',
    tape_color: 'red'
});
console.log(road_bike10.tire_size); // => 23
console.log(road_bike10.chain); // => 11-speed
var mountain_bike10 = new MountainBike10({
    size: 'S',
    front_shock: 'Manitou',
    rear_shock: 'Fox'
});
console.log(mountain_bike10.tire_size); // => 2.1
console.log(mountain_bike10.chain); // => 11-speed

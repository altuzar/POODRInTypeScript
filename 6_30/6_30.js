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
var Bicycle6 = /** @class */ (function () {
    function Bicycle6(opts) {
        if (opts === void 0) { opts = {}; }
        this._size = opts.size;
        this._chain = opts.chain || this.default_chain();
        this._tire_size = opts.tire_size || this.default_tire_size();
    }
    Object.defineProperty(Bicycle6.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle6.prototype, "chain", {
        get: function () {
            return this._chain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle6.prototype, "tire_size", {
        get: function () {
            return this._tire_size;
        },
        enumerable: true,
        configurable: true
    });
    Bicycle6.prototype.default_chain = function () {
        // <- common default
        return '11-speed';
    };
    return Bicycle6;
}());
var RoadBike6 = /** @class */ (function (_super) {
    __extends(RoadBike6, _super);
    function RoadBike6(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, opts) || this;
        _this._tape_color = opts.tape_color;
        return _this;
    }
    Object.defineProperty(RoadBike6.prototype, "tape_color", {
        get: function () {
            return this._tape_color;
        },
        enumerable: true,
        configurable: true
    });
    RoadBike6.prototype.spares = function () {
        return {
            chain: '11-speed',
            tire_size: '23',
            tape_color: this.tape_color
        };
    };
    RoadBike6.prototype.default_tire_size = function () {
        // <- subclass default
        return '23';
    };
    return RoadBike6;
}(Bicycle6));
var MountainBike6 = /** @class */ (function (_super) {
    __extends(MountainBike6, _super);
    function MountainBike6(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, opts) || this;
        _this._front_shock = opts.front_shock;
        _this._rear_shock = opts.rear_shock;
        return _this;
    }
    Object.defineProperty(MountainBike6.prototype, "front_shock", {
        get: function () {
            return this._front_shock;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MountainBike6.prototype, "rear_shock", {
        get: function () {
            return this._rear_shock;
        },
        enumerable: true,
        configurable: true
    });
    MountainBike6.prototype.spares = function () {
        return Object.assign({}, _super.prototype.spares.call(this), {
            front_shock: this.front_shock
        });
    };
    MountainBike6.prototype.default_tire_size = function () {
        // <- subclass default
        return '2.1';
    };
    return MountainBike6;
}(Bicycle6));
var road_bike = new RoadBike6({
    size: 'M',
    tape_color: 'red'
});
console.log(road_bike.tire_size); // => 23
console.log(road_bike.chain); // => 11-speed
var mountain_bike = new MountainBike6({
    size: 'S',
    front_shock: 'Manitou',
    rear_shock: 'Fox'
});
console.log(mountain_bike.tire_size); // => 2.1
console.log(mountain_bike.chain); // 11-speed
// Bicycle's constructor method sends 'default_tire_size'
// but the class itself does not provide an implementation.
var RecumbentBike6 = /** @class */ (function (_super) {
    __extends(RecumbentBike6, _super);
    function RecumbentBike6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecumbentBike6.prototype.default_chain = function () {
        return '10-speed';
    };
    return RecumbentBike6;
}(Bicycle6));
var bent = new RecumbentBike6({
    size: 'L'
});
// => TypeError: this.default_tire_size is not a function
//      at new Bicycle ...
//      at new RecumbentBike ...

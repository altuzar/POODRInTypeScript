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
var Bicycle = /** @class */ (function () {
    function Bicycle(opts) {
        if (opts === void 0) { opts = {}; }
        this._size = opts.size;
        this._chain = opts.chain || this.default_chain();
        this._tire_size = opts.tire_size || this.default_tire_size();
    }
    Object.defineProperty(Bicycle.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle.prototype, "chain", {
        get: function () {
            return this._chain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle.prototype, "tire_size", {
        get: function () {
            return this._tire_size;
        },
        enumerable: true,
        configurable: true
    });
    Bicycle.prototype.default_chain = function () {
        // <- common default
        return '11-speed';
    };
    // ...
    Bicycle.prototype.default_tire_size = function () {
        throw new Error('not implemented');
    };
    return Bicycle;
}());
var RoadBike = /** @class */ (function (_super) {
    __extends(RoadBike, _super);
    function RoadBike(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, opts) || this;
        _this._tape_color = opts.tape_color;
        return _this;
    }
    Object.defineProperty(RoadBike.prototype, "tape_color", {
        get: function () {
            return this._tape_color;
        },
        enumerable: true,
        configurable: true
    });
    RoadBike.prototype.spares = function () {
        return {
            chain: '11-speed',
            tire_size: '23',
            tape_color: this.tape_color
        };
    };
    RoadBike.prototype.default_tire_size = function () {
        // <- subclass default
        return '23';
    };
    return RoadBike;
}(Bicycle));
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
    MountainBike.prototype.default_tire_size = function () {
        // <- subclass default
        return '2.1';
    };
    return MountainBike;
}(Bicycle));
var RecumbentBike = /** @class */ (function (_super) {
    __extends(RecumbentBike, _super);
    function RecumbentBike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecumbentBike.prototype.default_chain = function () {
        return '10-speed';
    };
    return RecumbentBike;
}(Bicycle));
var bent7 = new RecumbentBike({
    size: 'L'
});
// => Error: not implemented
//      at RecumbentBike.default_tire_size ...
//      at new Bicycle ...
//      at new RecumbentBike ...

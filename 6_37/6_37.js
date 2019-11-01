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
var Bicycle8 = /** @class */ (function () {
    function Bicycle8(opts) {
        if (opts === void 0) { opts = {}; }
        this._size = opts.size;
        this._chain = opts.chain || this.default_chain();
        this._tire_size = opts.tire_size || this.default_tire_size();
    }
    Object.defineProperty(Bicycle8.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle8.prototype, "chain", {
        get: function () {
            return this._chain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle8.prototype, "tire_size", {
        get: function () {
            return this._tire_size;
        },
        enumerable: true,
        configurable: true
    });
    Bicycle8.prototype.default_chain = function () {
        // <- common default
        return '11-speed';
    };
    // ...
    Bicycle8.prototype.default_tire_size = function () {
        throw new Error("Not implemented: " + this.constructor.name + " should have implemented...");
    };
    return Bicycle8;
}());
var RoadBike8 = /** @class */ (function (_super) {
    __extends(RoadBike8, _super);
    function RoadBike8(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, opts) || this;
        _this._tape_color = opts.tape_color;
        return _this;
    }
    Object.defineProperty(RoadBike8.prototype, "tape_color", {
        get: function () {
            return this._tape_color;
        },
        enumerable: true,
        configurable: true
    });
    RoadBike8.prototype.spares = function () {
        return {
            chain: '11-speed',
            tire_size: '23',
            tape_color: this.tape_color
        };
    };
    RoadBike8.prototype.default_tire_size = function () {
        // <- subclass default
        return '23';
    };
    return RoadBike8;
}(Bicycle8));
var MountainBike8 = /** @class */ (function (_super) {
    __extends(MountainBike8, _super);
    function MountainBike8(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, opts) || this;
        _this._front_shock = opts.front_shock;
        _this._rear_shock = opts.rear_shock;
        return _this;
    }
    Object.defineProperty(MountainBike8.prototype, "front_shock", {
        get: function () {
            return this._front_shock;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MountainBike8.prototype, "rear_shock", {
        get: function () {
            return this._rear_shock;
        },
        enumerable: true,
        configurable: true
    });
    MountainBike8.prototype.spares = function () {
        return Object.assign({}, _super.prototype.spares.call(this), {
            front_shock: this.front_shock
        });
    };
    MountainBike8.prototype.default_tire_size = function () {
        // <- subclass default
        return '2.1';
    };
    return MountainBike8;
}(Bicycle8));
var RecumbentBike8 = /** @class */ (function (_super) {
    __extends(RecumbentBike8, _super);
    function RecumbentBike8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecumbentBike8.prototype.default_chain = function () {
        return '10-speed';
    };
    return RecumbentBike8;
}(Bicycle8));
var bent8 = new RecumbentBike8({
    size: 'L'
});
// => Error: Not implemented: RecumbentBike should have implemented...
//      at RecumbentBike.default_tire_size ...
//      at new Bicycle ...
//      at new RecumbentBike ...

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
var Bicycle9 = /** @class */ (function () {
    function Bicycle9(opts) {
        if (opts === void 0) { opts = {}; }
        this._size = opts.size;
        this._chain = opts.chain || this.default_chain();
        this._tire_size = opts.tire_size || this.default_tire_size();
    }
    Object.defineProperty(Bicycle9.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle9.prototype, "chain", {
        get: function () {
            return this._chain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle9.prototype, "tire_size", {
        get: function () {
            return this._tire_size;
        },
        enumerable: true,
        configurable: true
    });
    Bicycle9.prototype.spares = function () {
        return {
            tire_size: this.tire_size,
            chain: this.chain
        };
    };
    Bicycle9.prototype.default_chain = function () {
        return '11-speed';
    };
    Bicycle9.prototype.default_tire_size = function () {
        throw new Error('Not implemented');
    };
    return Bicycle9;
}());
var RoadBike9 = /** @class */ (function (_super) {
    __extends(RoadBike9, _super);
    function RoadBike9(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, opts) || this;
        _this._tape_color = opts.tape_color;
        return _this;
    }
    Object.defineProperty(RoadBike9.prototype, "tape_color", {
        get: function () {
            return this._tape_color;
        },
        enumerable: true,
        configurable: true
    });
    RoadBike9.prototype.spares = function () {
        return Object.assign({}, _super.prototype.spares.call(this), {
            tape_color: this.tape_color
        });
    };
    RoadBike9.prototype.default_tire_size = function () {
        return '23';
    };
    return RoadBike9;
}(Bicycle9));
var MountainBike9 = /** @class */ (function (_super) {
    __extends(MountainBike9, _super);
    function MountainBike9(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, opts) || this;
        _this._front_shock = opts.front_shock;
        _this._rear_shock = opts.rear_shock;
        return _this;
    }
    Object.defineProperty(MountainBike9.prototype, "front_shock", {
        get: function () {
            return this._front_shock;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MountainBike9.prototype, "rear_shock", {
        get: function () {
            return this._rear_shock;
        },
        enumerable: true,
        configurable: true
    });
    MountainBike9.prototype.spares = function () {
        return Object.assign({}, _super.prototype.spares.call(this), {
            front_shock: this.front_shock
        });
    };
    MountainBike9.prototype.default_tire_size = function () {
        return '2.1';
    };
    return MountainBike9;
}(Bicycle9));
var road_bike9 = new RoadBike9({
    size: 'M',
    tape_color: 'red'
});
console.log(road_bike9.tire_size); // => 23
console.log(road_bike9.chain); // => 11-speed
var mountain_bike9 = new MountainBike9({
    size: 'S',
    front_shock: 'Manitou',
    rear_shock: 'Fox'
});
console.log(mountain_bike9.tire_size); // => 2.1
console.log(mountain_bike9.chain); // => 11-speed
var RecumbentBike9 = /** @class */ (function (_super) {
    __extends(RecumbentBike9, _super);
    function RecumbentBike9(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = this;
        _this._flag = opts.flag; // forgot to send `super`
        return _this;
    }
    Object.defineProperty(RecumbentBike9.prototype, "flag", {
        get: function () {
            return this._flag;
        },
        enumerable: true,
        configurable: true
    });
    RecumbentBike9.prototype.spares = function () {
        return Object.assign({}, _super.prototype.spares.call(this), {
            flag: this.flag
        });
    };
    RecumbentBike9.prototype.default_chain = function () {
        return '10-speed';
    };
    RecumbentBike9.prototype.default_tire_size = function () {
        return '28';
    };
    return RecumbentBike9;
}(Bicycle9));
var bent9 = new RecumbentBike9({
    flag: 'tall and orange'
});
// => ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
//      at new RecumbentBike ...
console.log(bent9.spares());

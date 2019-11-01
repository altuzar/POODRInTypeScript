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
var Bicycle11 = /** @class */ (function () {
    function Bicycle11(opts) {
        if (opts === void 0) { opts = {}; }
        this._size = opts.size;
        this._chain = opts.chain || this.default_chain();
        this._tire_size = opts.tire_size || this.default_tire_size();
        this.post_initialize(opts);
    }
    Object.defineProperty(Bicycle11.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle11.prototype, "chain", {
        get: function () {
            return this._chain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bicycle11.prototype, "tire_size", {
        get: function () {
            return this._tire_size;
        },
        enumerable: true,
        configurable: true
    });
    Bicycle11.prototype.spares = function () {
        return Object.assign({}, {
            tire_size: this.tire_size,
            chain: this.chain
        }, this.local_spares());
    };
    Bicycle11.prototype.default_tire_size = function () {
        throw new Error('Not implemented');
    };
    // subclasses may override
    Bicycle11.prototype.post_initialize = function (opts) { };
    Bicycle11.prototype.local_spares = function () {
        return {};
    };
    Bicycle11.prototype.default_chain = function () {
        return '11-speed';
    };
    return Bicycle11;
}());
var RoadBike11 = /** @class */ (function (_super) {
    __extends(RoadBike11, _super);
    function RoadBike11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoadBike11.prototype.post_initialize = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._tape_color = opts.tape_color;
    };
    Object.defineProperty(RoadBike11.prototype, "tape_color", {
        get: function () {
            return this._tape_color;
        },
        enumerable: true,
        configurable: true
    });
    RoadBike11.prototype.local_spares = function () {
        return {
            tape_color: this.tape_color
        };
    };
    RoadBike11.prototype.default_tire_size = function () {
        return '23';
    };
    return RoadBike11;
}(Bicycle11));
var MountainBike11 = /** @class */ (function (_super) {
    __extends(MountainBike11, _super);
    function MountainBike11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MountainBike11.prototype.post_initialize = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._front_shock = opts.front_shock;
        this._rear_shock = opts.rear_shock;
    };
    Object.defineProperty(MountainBike11.prototype, "front_shock", {
        get: function () {
            return this._front_shock;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MountainBike11.prototype, "rear_shock", {
        get: function () {
            return this._rear_shock;
        },
        enumerable: true,
        configurable: true
    });
    MountainBike11.prototype.local_spares = function () {
        return {
            front_shock: this.front_shock
        };
    };
    MountainBike11.prototype.default_tire_size = function () {
        return '2.1';
    };
    return MountainBike11;
}(Bicycle11));
var road_bike11 = new RoadBike11({
    size: 'M',
    tape_color: 'red'
});
console.log(road_bike11.tire_size); // => 23
console.log(road_bike11.chain); // => 11-speed
console.log(road_bike11.spares());
// => { tire_size: '23', chain: '11-speed', tape_color: 'red' }
var mountain_bike11 = new MountainBike11({
    size: 'S',
    front_shock: 'Manitou',
    rear_shock: 'Fox'
});
console.log(mountain_bike11.tire_size); // => 2.1
console.log(mountain_bike11.chain); // => 11-speed
console.log(mountain_bike11.spares());
// => { tire_size: '2.1', chain: '11-speed', front_shock: 'Manitou' }
var RecumbentBike11 = /** @class */ (function (_super) {
    __extends(RecumbentBike11, _super);
    function RecumbentBike11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecumbentBike11.prototype.post_initialize = function (opts) {
        this._flag = opts.flag;
    };
    Object.defineProperty(RecumbentBike11.prototype, "flag", {
        get: function () {
            return this._flag;
        },
        enumerable: true,
        configurable: true
    });
    RecumbentBike11.prototype.local_spares = function () {
        return {
            flag: this.flag
        };
    };
    RecumbentBike11.prototype.default_chain = function () {
        return '10-speed';
    };
    RecumbentBike11.prototype.default_tire_size = function () {
        return '28';
    };
    return RecumbentBike11;
}(Bicycle11));
var bent11 = new RecumbentBike11({
    size: 'M',
    flag: 'tall and orange'
});
console.log(bent11.spares());
// => { tire_size: '28', chain: '10-speed', flag: 'tall and orange' }

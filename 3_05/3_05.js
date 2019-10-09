// # ...
//   # ...
//     # ...
// class Gear
//   attr_reader :chainring, :cog, :rim, :tire
//   def initialize(chainring, cog, rim, tire)
//     @chainring = chainring
//     @cog       = cog
//     @rim       = rim
//     @tire      = tire
//   end
//   def gear_inches
//     ratio * Wheel.new(rim, tire).diameter
//   end
//   def ratio
//     chainring / cog.to_f
//   end
// # ...
// end
// class Wheel
//   attr_reader :rim, :tire
//   def initialize(rim, tire)
//     @rim  = rim
//     @tire = tire
//   end
//   def diameter
//     rim + (tire * 2)
//   end
// # ...
// end
// puts Gear.new(52, 11, 26, 1.5).gear_inches
// # => 137.0909090909091
// ...
// ...
// ...
var Gear = /** @class */ (function () {
    function Gear(chainring, cog, rim, tire) {
        this._chainring = chainring;
        this._cog = cog;
        this._rim = rim;
        this._tire = tire;
    }
    Object.defineProperty(Gear.prototype, "chainring", {
        get: function () {
            return this._chainring;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gear.prototype, "cog", {
        get: function () {
            return this._cog;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gear.prototype, "rim", {
        get: function () {
            return this._rim;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gear.prototype, "tire", {
        get: function () {
            return this._tire;
        },
        enumerable: true,
        configurable: true
    });
    Gear.prototype.gear_inches = function () {
        return this.ratio() * new Wheel(this.rim, this.tire).diameter();
    };
    Gear.prototype.ratio = function () {
        return this.chainring / this.cog;
    };
    return Gear;
}());
var Wheel = /** @class */ (function () {
    function Wheel(rim, tire) {
        this._rim = rim;
        this._tire = tire;
    }
    Object.defineProperty(Wheel.prototype, "rim", {
        get: function () {
            return this._rim;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wheel.prototype, "tire", {
        get: function () {
            return this._tire;
        },
        enumerable: true,
        configurable: true
    });
    Wheel.prototype.diameter = function () {
        return this.rim + this.tire * 2;
    };
    return Wheel;
}());
console.log(new Gear(52, 11, 26, 1.5).gear_inches());
// => 137.0909090909091

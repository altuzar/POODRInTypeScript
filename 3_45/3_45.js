// # with keyword args
// class Gear
//   attr_reader :chainring, :cog
//   def initialize(chainring:, cog:)
//     @chainring = chainring
//     @cog       = cog
//   end
//   def gear_inches(diameter)
//     ratio * diameter
//   end
//   def ratio
//     chainring / cog.to_f
//   end
//   # ...
// end
// class Wheel
//   attr_reader :rim, :tire, :gear
//   def initialize(rim:, tire:, chainring:, cog:)
//     @rim  = rim
//     @tire = tire
//     @gear = Gear.new(chainring: chainring, cog: cog)
//   end
//   def diameter
//     rim + (tire * 2)
//   end
//   def gear_inches
//     gear.gear_inches(diameter)
//   end
//   # ...
// end
// puts Wheel.new(
//        rim:       26,
//        tire:      1.5,
//        chainring: 52,
//        cog:       11).gear_inches
// # => 137.0909090909091
// with keyword args
var Gear = /** @class */ (function () {
    function Gear(_a) {
        var chainring = _a.chainring, cog = _a.cog;
        this._chainring = chainring;
        this._cog = cog;
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
    Gear.prototype.gear_inches = function (diameter) {
        return this.ratio() * diameter;
    };
    Gear.prototype.ratio = function () {
        return this.chainring / this.cog;
    };
    return Gear;
}());
var Wheel = /** @class */ (function () {
    function Wheel(_a) {
        var rim = _a.rim, tire = _a.tire, chainring = _a.chainring, cog = _a.cog;
        this._rim = rim;
        this._tire = tire;
        this._gear = new Gear({ chainring: chainring, cog: cog });
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
    Object.defineProperty(Wheel.prototype, "gear", {
        get: function () {
            return this._gear;
        },
        enumerable: true,
        configurable: true
    });
    Wheel.prototype.diameter = function () {
        return this.rim + this.tire * 2;
    };
    Wheel.prototype.gear_inches = function () {
        return this.gear.gear_inches(this.diameter());
    };
    return Wheel;
}());
console.log(new Wheel({
    rim: 26,
    tire: 1.5,
    chainring: 52,
    cog: 11
}).gear_inches());
// 137.0909090909091

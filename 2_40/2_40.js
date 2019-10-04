// class Gear
//   attr_reader :chainring, :cog, :wheel
//   def initialize(chainring, cog, wheel=nil)
//     @chainring = chainring
//     @cog       = cog
//     @wheel     = wheel
//   end
//   def ratio
//     chainring / cog.to_f
//   end
//   def gear_inches
//     ratio * wheel.diameter
//   end
// end
// class Wheel
//   attr_reader :rim, :tire
//   def initialize(rim, tire)
//     @rim       = rim
//     @tire      = tire
//   end
//   def diameter
//     rim + (tire * 2)
//   end
//   def circumference
//     diameter * Math::PI
//   end
// end
// @wheel = Wheel.new(26, 1.5)
// puts @wheel.circumference
// # => 91.106186954104
// puts Gear.new(52, 11, @wheel).gear_inches
// # => 137.0909090909091
// puts Gear.new(52, 11).ratio
// # => 4.7272727272727275
var Gear = /** @class */ (function () {
    function Gear(chainring, cog, wheel) {
        if (wheel === void 0) { wheel = null; }
        this._chainring = chainring;
        this._cog = cog;
        this._wheel = wheel;
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
    Object.defineProperty(Gear.prototype, "wheel", {
        get: function () {
            return this._wheel;
        },
        enumerable: true,
        configurable: true
    });
    Gear.prototype.ratio = function () {
        return this.chainring / this.cog;
    };
    Gear.prototype.gear_inches = function () {
        return this.ratio() * this.wheel.diameter();
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
    Wheel.prototype.circumference = function () {
        return this.diameter() * Math.PI;
    };
    return Wheel;
}());
var wheel = new Wheel(26, 1.5);
console.log(wheel.circumference());
// => 91.106186954104
console.log(new Gear(52, 11, wheel).gear_inches());
// => 137.0909090909091
console.log(new Gear(52, 11).ratio());
// => 4.7272727272727275
console.log(new Gear(52, 11).gear_inches());
// => TypeError: Cannot read property 'diameter' of null

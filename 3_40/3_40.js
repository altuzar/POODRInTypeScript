// # When Gear is part of an external interface
// module SomeFramework
//   class Gear
//     attr_reader :chainring, :cog, :wheel
//     def initialize(chainring, cog, wheel)
//       @chainring = chainring
//       @cog       = cog
//       @wheel     = wheel
//     end
//     # ...
//     def gear_inches
//       ratio * wheel.diameter
//     end
//     def ratio
//       chainring / cog.to_f
//     end
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
// end
// # wrap the interface to protect yourself from changes
// module GearWrapper
//   def self.gear(chainring:, cog:, wheel:)
//     SomeFramework::Gear.new(chainring, cog, wheel)
//   end
// end
// # Now you can create a new Gear using keyword arguments
// puts GearWrapper.gear(
//   chainring: 52,
//   cog:       11,
//   wheel:     Wheel.new(26, 1.5)).gear_inches
// # => 137.0909090909091
// When Gear is part of some external interface
var SomeFramework = {
    Gear: /** @class */ (function () {
        function Gear(chainring, cog, wheel) {
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
        // ...
        Gear.prototype.gear_inches = function () {
            return this.ratio() * this.wheel.diameter();
        };
        Gear.prototype.ratio = function () {
            return this.chainring / this.cog;
        };
        return Gear;
    }())
};
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
// Wrap the interface to protect yourself from changes
var GearWrapper = /** @class */ (function () {
    function GearWrapper() {
    }
    GearWrapper.gear = function (_a) {
        var chainring = _a.chainring, cog = _a.cog, wheel = _a.wheel;
        return new SomeFramework.Gear(chainring, cog, wheel);
    };
    return GearWrapper;
}());
// Now you can create a new Gear using keyword arguments
console.log(GearWrapper.gear({
    chainring: 52,
    cog: 11,
    wheel: new Wheel(26, 1.5)
}).gear_inches());
// => 137.0909090909091

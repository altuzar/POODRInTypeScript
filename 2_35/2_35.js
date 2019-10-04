// class Gear
//   attr_reader :chainring, :cog, :wheel
//   def initialize(chainring, cog, rim, tire)
//     @chainring = chainring
//     @cog       = cog
//     @wheel     = Wheel.new(rim, tire)
//   end
//   def ratio
//     chainring / cog.to_f
//   end
//   def gear_inches
//     ratio * wheel.diameter
//   end
//   Wheel = Struct.new(:rim, :tire) do
//     def diameter
//       rim + (tire * 2)
//     end
//   end
// end
// puts "Gear gear_inches = #{Gear.new(54,11,622,20).gear_inches}"
var Gear = /** @class */ (function () {
    function Gear(chainring, cog, rim, tire) {
        this._chainring = chainring;
        this._cog = cog;
        this._wheel = {
            rim: rim,
            tire: tire,
            get diameter() {
                return this.rim + this.tire * 2;
            }
        };
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
        return this.ratio() * this.wheel.diameter;
    };
    return Gear;
}());
console.log("Gear gear_inches = " + new Gear(54, 11, 622, 20).gear_inches());

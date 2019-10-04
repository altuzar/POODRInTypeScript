// class RevealingReferences
//   attr_reader :wheels
//   def initialize(data)
//     @wheels = wheelify(data)
//   end
//   # first - iterate over the array
//   def diameters
//     wheels.collect {|wheel| diameter(wheel)}
//   end
//   # second - calculate diameter of ONE wheel
//   def diameter(wheel)
//     wheel.rim + (wheel.tire * 2)
//   end
//   # ... now everyone can send rim/tire to wheel
//   Wheel = Struct.new(:rim, :tire)
//   def wheelify(data)
//     data.collect {|cell|
//       Wheel.new(cell[0], cell[1])}
//   end
// end
// @data = [[622, 20], [622, 23], [559, 30], [559, 40]]
// puts "RevealingReferences diameters = #{RevealingReferences.new(@data).diameters}"
// # gear_inches does too much
// class Gear
//   attr_reader :chainring, :cog, :rim, :tire
//   def initialize(chainring, cog, rim, tire)
//     @chainring = chainring
//     @cog       = cog
//     @rim       = rim
//     @tire      = tire
//   end
//   def ratio
//     chainring / cog.to_f
//   end
//   def gear_inches
//       # tire goes around rim twice for diameter
//     ratio * (rim + (tire * 2))
//   end
// end
// puts "1st Gear gear_inches = #{Gear.new(54,11,622,20).gear_inches}"
// # diameter method doesn't belong in Gear, notice it
// # depends on rim and tire only
// class Gear
//   attr_reader :chainring, :cog, :rim, :tire
//   def initialize(chainring, cog, rim, tire)
//     @chainring = chainring
//     @cog       = cog
//     @rim       = rim
//     @tire      = tire
//   end
//   def ratio
//     chainring / cog.to_f
//   end
//   def gear_inches
//     ratio * diameter
//   end
//   def diameter
//     rim + (tire * 2)
//   end
// end
// puts "2nd Gear gear_inches = #{Gear.new(54,11,622,20).gear_inches}"
var RevealingReferences = /** @class */ (function () {
    function RevealingReferences(data) {
        this._wheels = this.wheelify(data);
    }
    Object.defineProperty(RevealingReferences.prototype, "wheels", {
        get: function () {
            return this._wheels;
        },
        enumerable: true,
        configurable: true
    });
    // first - iterate over the array
    RevealingReferences.prototype.diameters = function () {
        var _this = this;
        return this.wheels.map(function (wheel) { return _this.diameter(wheel); });
    };
    // second - calculate diameter of ONE wheel
    RevealingReferences.prototype.diameter = function (wheel) {
        return wheel.rim + wheel.tire * 2;
    };
    RevealingReferences.prototype.wheelify = function (data) {
        return data.map(function (cell) {
            return {
                rim: cell[0],
                tire: cell[1]
            };
        });
    };
    return RevealingReferences;
}());
var data = [[622, 20], [622, 23], [559, 30], [559, 40]];
console.log("RevealingReferences diameters = " + new RevealingReferences(data).diameters());
// gear_inches does too much
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
    Gear.prototype.ratio = function () {
        return this.chainring / this.cog;
    };
    Gear.prototype.gear_inches = function () {
        // tire goes around rim twice for diameter
        return this.ratio() * (this.rim + this.tire * 2);
    };
    return Gear;
}());
console.log("1st Gear gear_inches = " + new Gear(54, 11, 622, 20).gear_inches());
// diameter method doesn't belong in Gear, notice it depends on rim and tire only
var GearWithDiameter = /** @class */ (function () {
    function GearWithDiameter(chainring, cog, rim, tire) {
        this._chainring = chainring;
        this._cog = cog;
        this._rim = rim;
        this._tire = tire;
    }
    Object.defineProperty(GearWithDiameter.prototype, "chainring", {
        get: function () {
            return this._chainring;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GearWithDiameter.prototype, "cog", {
        get: function () {
            return this._cog;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GearWithDiameter.prototype, "rim", {
        get: function () {
            return this._rim;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GearWithDiameter.prototype, "tire", {
        get: function () {
            return this._tire;
        },
        enumerable: true,
        configurable: true
    });
    GearWithDiameter.prototype.ratio = function () {
        return this.chainring / this.cog;
    };
    GearWithDiameter.prototype.gear_inches = function () {
        return this.ratio() * this.diameter();
    };
    GearWithDiameter.prototype.diameter = function () {
        return this.rim + this.tire * 2;
    };
    return GearWithDiameter;
}());
console.log("2nd Gear gear_inches = " + new Gear(54, 11, 622, 20).gear_inches());

// class ObscuringReferences
//   attr_reader :data
//   def initialize(data)
//     @data = data
//   end
//   def diameters
//     # 0 is rim, 1 is tire
//     data.collect {|cell|
//       cell[0] + (cell[1] * 2)}
//   end
//   # ... many other methods that index into the array
// end
// # rim and tire sizes (now in milimeters!) in a 2d array
// @data = [[622, 20], [622, 23], [559, 30], [559, 40]]
// class RevealingReferences
//   attr_reader :wheels
//   def initialize(data)
//     @wheels = wheelify(data)
//   end
//   def diameters
//     wheels.collect {|wheel|
//       wheel.rim + (wheel.tire * 2)}
//   end
//   # now everyone can send rim/tire to wheel
//   Wheel = Struct.new(:rim, :tire)
//   def wheelify(data)
//     data.collect {|cell|
//       Wheel.new(cell[0], cell[1])}
//   end
// end
// # ensure the code compiles and executes
// puts "ObscuringReferences diameters = #{ObscuringReferences.new(@data).diameters}"
// puts "RevealingReferences diameters = #{RevealingReferences.new(@data).diameters}"
var ObscuringReferences = /** @class */ (function () {
    function ObscuringReferences(data) {
        this._data = data;
    }
    Object.defineProperty(ObscuringReferences.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    ObscuringReferences.prototype.diameters = function () {
        // 0 is rim, 1 is tire
        return this.data.map(function (cell) {
            return cell[0] + cell[1] * 2;
        });
    };
    return ObscuringReferences;
}());
// rim and tire sizes (now in millimeters!) in a 2d array
var data = [[622, 20], [622, 23], [559, 30], [559, 40]];
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
    RevealingReferences.prototype.diameters = function () {
        return this.wheels.map(function (wheel) {
            return wheel.rim + wheel.tire * 2;
        });
    };
    RevealingReferences.prototype.wheelify = function (data) {
        return data.map(function (cell) {
            // ADAPTATION: Using an object literal in place of a Ruby Struct
            // now everyone can send rim/tire to the wheel object literal
            return {
                rim: cell[0],
                tire: cell[1]
            };
        });
    };
    return RevealingReferences;
}());
console.log("ObscuringReferences diameters = " + new ObscuringReferences(data).diameters());
console.log("RevealingReferences diameters = " + new RevealingReferences(data).diameters());

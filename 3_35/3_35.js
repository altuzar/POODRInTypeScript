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
// ###########################
// # KEYWORD ARGS
// #    keyword arg with simple defaults
// ###########################
// class Gear
//   attr_reader :chainring, :cog, :wheel
//   def initialize(chainring: 40, cog: 18, wheel:)
//     @chainring = chainring
//     @cog       = cog
//     @wheel     = wheel
//   end
//   # ...
//   def gear_inches
//     ratio * wheel.diameter
//   end
//   def ratio
//     chainring / cog.to_f
//   end
// end
// puts Gear.new(wheel: Wheel.new(26, 1.5)).chainring
// # => 40
// ###########################
// # KEYWORD ARGS
// #    keyword arg with defaults
// ###########################
// class Gear
//   attr_reader :chainring, :cog, :wheel
//   def initialize(chainring: default_chainring, cog: 18, wheel:)
//     @chainring = chainring
//     @cog       = cog
//     @wheel     = wheel
//   end
//   def default_chainring
//     (100/2) - 10        # silly code, useful example
//   end
//   # ...
//   def gear_inches
//     ratio * wheel.diameter
//   end
//   def ratio
//     chainring / cog.to_f
//   end
// end
// puts Gear.new(wheel: Wheel.new(26, 1.5)).chainring
// # => 40
// puts Gear.new(chainring: 52, wheel: Wheel.new(26, 1.5)).chainring
// # => 52
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
/*
 * KEYWORD ARGS
 *     keyword arg with simple defaults
 *
 * NOTE: Here, we're combining destructuring with function defaults to
 * accomplish something similar to keyword args with default values.
 *
 * SEE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * SEE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
var Gear = /** @class */ (function () {
    function Gear(_a) {
        var _b = _a.chainring, chainring = _b === void 0 ? 40 : _b, _c = _a.cog, cog = _c === void 0 ? 18 : _c, wheel = _a.wheel;
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
}());
console.log(new Gear({
    wheel: new Wheel(26, 1.5)
}).chainring);
// => 40;
/*
 * KEYWORD ARGS
 *     keyword arg with defaults
 *
 * NOTE: Sandi's point here is that the `constructor` executes in the new
 * instance of Gear, so it should be able to send messages to itself.
 */
var GearWithDefaultMethod = /** @class */ (function () {
    function GearWithDefaultMethod(_a) {
        var _b = _a.chainring, chainring = _b === void 0 ? this.default_chainring() : _b, _c = _a.cog, cog = _c === void 0 ? 18 : _c, wheel = _a.wheel;
        this._chainring = chainring;
        this._cog = cog;
        this._wheel = wheel;
    }
    Object.defineProperty(GearWithDefaultMethod.prototype, "chainring", {
        get: function () {
            return this._chainring;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GearWithDefaultMethod.prototype, "cog", {
        get: function () {
            return this._cog;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GearWithDefaultMethod.prototype, "wheel", {
        get: function () {
            return this._wheel;
        },
        enumerable: true,
        configurable: true
    });
    GearWithDefaultMethod.prototype.default_chainring = function () {
        return 100 / 2 - 10;
    };
    // ...
    GearWithDefaultMethod.prototype.gear_inches = function () {
        return this.ratio() * this.wheel.diameter();
    };
    GearWithDefaultMethod.prototype.ratio = function () {
        return this.chainring / this.cog;
    };
    return GearWithDefaultMethod;
}());
console.log(new GearWithDefaultMethod({
    wheel: new Wheel(26, 1.5)
}).chainring);
// => 40
console.log(new GearWithDefaultMethod({
    chainring: 52,
    wheel: new Wheel(26, 1.5)
}).chainring);
// => 52

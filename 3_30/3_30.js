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
// ############################
// # using fixed args
// ############################
// class Gear
//   attr_reader :chainring, :cog, :wheel
//   def initialize(chainring, cog, wheel)
//     @chainring = chainring
//     @cog       = cog
//     @wheel     = wheel
//   end
//   # ...
//   def gear_inches
//     public ratio  * wheel.diameter
//   end
//   def ratio
//     chainring / cog.to_f
//   end
// end
// puts Gear.new(
//       52,
//       11,
//       Wheel.new(26, 1.5)).gear_inches
// # => 137.0909090909091
// ############################
// # using hash
// ############################
// class Gear
//   attr_reader :chainring, :cog, :wheel
//   def initialize(args)
//     @chainring = args[:chainring]
//     @cog       = args[:cog]
//     @wheel     = args[:wheel]
//   end
//   # ...
//   def gear_inches
//     public ratio  * wheel.diameter
//   end
//   def ratio
//     chainring / cog.to_f
//   end
// end
// puts Gear.new(
//       :chainring => 52,
//       :cog       => 11,
//       :wheel     => Wheel.new(26, 1.5)).gear_inches
// # => 137.0909090909091
// puts Gear.new(
//       :wheel     => Wheel.new(26, 1.5),
//       :chainring => 52,
//       :cog       => 11).gear_inches
// # => 137.0909090909091
// ############################
// # using keyword args
// ############################
// class Gear
//   attr_reader :chainring, :cog, :wheel
//   def initialize(chainring:, cog:, wheel:)
//     @chainring = chainring
//     @cog       = cog
//     @wheel     = wheel
//   end
//   # ...
//   def gear_inches
//     public ratio  * wheel.diameter
//   end
//   def ratio
//     chainring / cog.to_f
//   end
// end
// puts Gear.new(
//       :cog       => 11,
//       :chainring => 52,
//       :wheel     => Wheel.new(26, 1.5)).gear_inches
// # => 137.0909090909091
// puts Gear.new(
//       wheel:     Wheel.new(26, 1.5),
//       chainring: 52,
//       cog:       11).gear_inches
// # => 137.0909090909091
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
var GearUsingFixedArgs = /** @class */ (function () {
    function GearUsingFixedArgs(chainring, cog, wheel) {
        this._chainring = chainring;
        this._cog = cog;
        this._wheel = wheel;
    }
    Object.defineProperty(GearUsingFixedArgs.prototype, "chainring", {
        get: function () {
            return this._chainring;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GearUsingFixedArgs.prototype, "cog", {
        get: function () {
            return this._cog;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GearUsingFixedArgs.prototype, "wheel", {
        get: function () {
            return this._wheel;
        },
        enumerable: true,
        configurable: true
    });
    // ...
    GearUsingFixedArgs.prototype.gear_inches = function () {
        return this.ratio() * this.wheel.diameter();
    };
    GearUsingFixedArgs.prototype.ratio = function () {
        return this.chainring / this.cog;
    };
    return GearUsingFixedArgs;
}());
console.log(new GearUsingFixedArgs(52, 11, new Wheel(26, 1.5)).gear_inches());
// => 137.0909090909091
var GearUsingHash = /** @class */ (function () {
    function GearUsingHash(args) {
        this._chainring = args['chainring']; // NOTE: could instead be `args.chainring`
        this._cog = args['cog'];
        this._wheel = args['wheel'];
    }
    Object.defineProperty(GearUsingHash.prototype, "chainring", {
        get: function () {
            return this._chainring;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GearUsingHash.prototype, "cog", {
        get: function () {
            return this._cog;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GearUsingHash.prototype, "wheel", {
        get: function () {
            return this._wheel;
        },
        enumerable: true,
        configurable: true
    });
    // ...
    GearUsingHash.prototype.gear_inches = function () {
        return this.ratio() * this.wheel.diameter();
    };
    GearUsingHash.prototype.ratio = function () {
        return this.chainring / this.cog;
    };
    return GearUsingHash;
}());
console.log(new GearUsingHash({
    chainring: 52,
    cog: 11,
    wheel: new Wheel(26, 1.5)
}).gear_inches());
// => 137.0909090909091
var GearUsingKeywordArgs = /** @class */ (function () {
    function GearUsingKeywordArgs(_a) {
        var chainring = _a.chainring, cog = _a.cog, wheel = _a.wheel;
        this._chainring = chainring;
        this._cog = cog;
        this._wheel = wheel;
    }
    Object.defineProperty(GearUsingKeywordArgs.prototype, "chainring", {
        get: function () {
            return this._chainring;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GearUsingKeywordArgs.prototype, "cog", {
        get: function () {
            return this._cog;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GearUsingKeywordArgs.prototype, "wheel", {
        get: function () {
            return this._wheel;
        },
        enumerable: true,
        configurable: true
    });
    // ...
    GearUsingKeywordArgs.prototype.gear_inches = function () {
        return this.ratio() * this.wheel.diameter();
    };
    GearUsingKeywordArgs.prototype.ratio = function () {
        return this.chainring / this.cog;
    };
    return GearUsingKeywordArgs;
}());
console.log(new GearUsingKeywordArgs({
    cog: 11,
    chainring: 52,
    wheel: new Wheel(26, 1.5)
}).gear_inches());
// => 137.0909090909091
console.log(new GearUsingKeywordArgs({
    wheel: new Wheel(26, 1.5),
    chainring: 52,
    cog: 11
}).gear_inches());
// => 137.0909090909091

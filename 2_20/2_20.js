// class Gear
//   def initialize(chainring, cog)
//     @chainring = chainring
//     @cog       = cog
//   end
//   def ratio
//     @chainring / @cog.to_f      # <-- road to ruin
//   end
// end
// puts "1st ratio = #{Gear.new(54,11).ratio}"
// class Gear
//   attr_reader :chainring, :cog  # <-------
//   def initialize(chainring, cog)
//     @chainring = chainring
//     @cog       = cog
//   end
//   def ratio
//     chainring / cog.to_f        # <-------
//   end
// end
// puts "2st ratio = #{Gear.new(54,11).ratio}"
// # default-ish implementation via attr_reader
// def cog
//   @cog
// end
// # a simple reimplementation of cog
// def cog
//   @cog * unanticipated_adjustment_factor
// end
// # a more complex one
// def cog
//   @cog * (foo? ? bar_adjustment : baz_adjustment)
// end
// class Gear
//   private
//   attr_reader :chainring, :cog
//   public
//   def initialize(chainring, cog)
//     @chainring = chainring
//     @cog       = cog
//   end
//   # ...
//   def ratio
//     chainring / cog.to_f
//   end
// end
// class Blinkered
//   def cog(gear)
//     gear.cog
//   end
// end
// puts Blinkered.new.cog(Gear.new(54,11))
// # => private method `cog' called for #<Gear:0x00007fa4ef926120 @chainring=54, @cog=11>
var Gear = /** @class */ (function () {
    function Gear(chainring, cog) {
        this._chainring = chainring;
        this._cog = cog;
    }
    Gear.prototype.ratio = function () {
        return this._chainring / this._cog; // <-- road to ruin
    };
    return Gear;
}());
console.log("1st ratio = " + new Gear(54, 11).ratio());
var GearWithGetters = /** @class */ (function () {
    function GearWithGetters(chainring, cog) {
        this._chainring = chainring;
        this._cog = cog;
    }
    Object.defineProperty(GearWithGetters.prototype, "chainring", {
        get: function () {
            return this._chainring;
        } // <-------
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GearWithGetters.prototype, "cog", {
        get: function () {
            return this._cog;
        } // <-------
        ,
        enumerable: true,
        configurable: true
    });
    GearWithGetters.prototype.ratio = function () {
        return this.chainring / this.cog; // <-------
    };
    return GearWithGetters;
}());
console.log("2nd ratio = " + new GearWithGetters(54, 11).ratio());

// class Gear
//   attr_reader :chainring, :cog
//   def initialize(chainring, cog)
//     @chainring = chainring
//     @cog       = cog
//   end
//   def ratio
//     chainring / cog.to_f
//   end
// end
// puts Gear.new(52, 11).ratio
// # => 4.7272727272727275
// puts Gear.new(30, 27).ratio
// # => 1.1111111111111112
var Gear = /** @class */ (function () {
    function Gear(chainring, cog) {
        this.chainring = chainring;
        this.cog = cog;
    }
    Gear.prototype.ratio = function () {
        return this.chainring / this.cog;
    };
    return Gear;
}());
console.log(new Gear(52, 11).ratio()); // => 4.7272727272727275
console.log(new Gear(30, 27).ratio()); // => 1.1111111111111112

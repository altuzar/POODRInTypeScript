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

class Gear {
  private chainring: number;
  private cog: number;

  public constructor(chainring: number, cog: number) {
    this.chainring = chainring;
    this.cog = cog;
  }

  public ratio(): number {
    return this.chainring / this.cog;
  }
}

console.log(new Gear(52, 11).ratio()); // => 4.7272727272727275

console.log(new Gear(30, 27).ratio()); // => 1.1111111111111112

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

// puts Gear.new(52, 11, 26, 1.5).gear_inches
// # => 137.0909090909091

// puts Gear.new(52, 11, 24, 1.25).gear_inches
// # => 125.27272727272728

// puts Gear.new(52, 11).ratio # didn't this used to work?
// # => wrong number of arguments (given 2, expected 4)
// # => 2_15.rb:3:in `initialize'
// # => 2_15.rb:26:in `new'

class Gear {
  private chainring: number;
  private cog: number;
  private rim: number;
  private tire: number;

  public constructor(
    chainring: number,
    cog: number,
    rim: number,
    tire: number
  ) {
    this.chainring = chainring;
    this.cog = cog;
    this.rim = rim;
    this.tire = tire;
  }

  public ratio(): number {
    return this.chainring / this.cog;
  }

  public gearInches(): number {
    //# tire goes around rim twice for diameter
    return this.ratio() * (this.rim + this.tire * 2);
  }
}

console.log(new Gear(52, 11, 26, 1.5).gearInches()); // => 137.0909090909091

console.log(new Gear(52, 11, 24, 1.25).gearInches()); // => 125.27272727272728

console.log(new Gear(52, 11).gearInches()); // # didn't this used to work?

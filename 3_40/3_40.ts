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
const SomeFramework = {
  Gear: class Gear {
    private _chainring: number;
    private _cog: number;
    private _wheel: any;

    constructor(chainring, cog, wheel) {
      this._chainring = chainring;
      this._cog = cog;
      this._wheel = wheel;
    }

    get chainring() {
      return this._chainring;
    }
    get cog() {
      return this._cog;
    }
    get wheel() {
      return this._wheel;
    }
    // ...
    public gear_inches() {
      return this.ratio() * this.wheel.diameter();
    }

    public ratio() {
      return this.chainring / this.cog;
    }
  }
};

class Wheel {
  private _rim: number;
  private _tire: number;

  constructor(rim, tire) {
    this._rim = rim;
    this._tire = tire;
  }

  get rim() {
    return this._rim;
  }
  get tire() {
    return this._tire;
  }

  public diameter() {
    return this.rim + this.tire * 2;
  }
}

// Wrap the interface to protect yourself from changes
class GearWrapper {
  static gear({ chainring, cog, wheel }) {
    return new SomeFramework.Gear(chainring, cog, wheel);
  }
}

// Now you can create a new Gear using keyword arguments
console.log(
  GearWrapper.gear({
    chainring: 52,
    cog: 11,
    wheel: new Wheel(26, 1.5)
  }).gear_inches()
);
// => 137.0909090909091

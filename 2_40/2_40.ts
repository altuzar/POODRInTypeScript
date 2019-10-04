// class Gear
//   attr_reader :chainring, :cog, :wheel
//   def initialize(chainring, cog, wheel=nil)
//     @chainring = chainring
//     @cog       = cog
//     @wheel     = wheel
//   end

//   def ratio
//     chainring / cog.to_f
//   end

//   def gear_inches
//     ratio * wheel.diameter
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

//   def circumference
//     diameter * Math::PI
//   end
// end

// @wheel = Wheel.new(26, 1.5)
// puts @wheel.circumference
// # => 91.106186954104

// puts Gear.new(52, 11, @wheel).gear_inches
// # => 137.0909090909091

// puts Gear.new(52, 11).ratio
// # => 4.7272727272727275

class Gear {
  private _chainring: number;
  private _cog: number;
  private _wheel: any;

  public constructor(chainring, cog, wheel = null) {
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

  public ratio() {
    return this.chainring / this.cog;
  }

  public gear_inches() {
    return this.ratio() * this.wheel.diameter();
  }
}

class Wheel {
  private _rim: number;
  private _tire: number;

  public constructor(rim, tire) {
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

  public circumference() {
    return this.diameter() * Math.PI;
  }
}

const wheel = new Wheel(26, 1.5);
console.log(wheel.circumference());
// => 91.106186954104

console.log(new Gear(52, 11, wheel).gear_inches());
// => 137.0909090909091

console.log(new Gear(52, 11).ratio());
// => 4.7272727272727275

console.log(new Gear(52, 11).gear_inches());
// => TypeError: Cannot read property 'diameter' of null

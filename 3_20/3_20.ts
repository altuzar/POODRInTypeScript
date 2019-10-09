// class Gear
//   attr_reader :chainring, :cog, :rim, :tire
//   def initialize(chainring, cog, rim, tire)
//     @chainring = chainring
//     @cog       = cog
//     @rim       = rim
//     @tire      = tire
//   end

//   def gear_inches
//     ratio * wheel.diameter
//   end

//   def wheel
//     @wheel ||= Wheel.new(rim, tire)
//   end
//   # ...
//   def ratio
//     chainring / cog.to_f
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

// puts Gear.new(52, 11, 26, 1.5).gear_inches
// # => 137.0909090909091

class Gear {
  private _chainring: number;
  private _cog: number;
  private _rim: number;
  private _tire: number;

  public constructor(chainring, cog, rim, tire) {
    this._chainring = chainring;
    this._cog = cog;
    this._rim = rim;
    this._tire = tire;
  }

  get chainring() {
    return this._chainring;
  }
  get cog() {
    return this._cog;
  }
  get rim() {
    return this._rim;
  }
  get tire() {
    return this._tire;
  }

  public gear_inches() {
    return this.ratio() * this.wheel.diameter();
  }

  get wheel() {
    return new Wheel(this.rim, this.tire);
  }

  public ratio() {
    return this.chainring / this.cog;
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
}

console.log(new Gear(52, 11, 26, 1.5).gear_inches());
// => 137.0909090909091

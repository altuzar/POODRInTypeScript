// # with keyword args
// class Gear
//   attr_reader :chainring, :cog
//   def initialize(chainring:, cog:)
//     @chainring = chainring
//     @cog       = cog
//   end

//   def gear_inches(diameter)
//     ratio * diameter
//   end

//   def ratio
//     chainring / cog.to_f
//   end
//   # ...
// end

// class Wheel
//   attr_reader :rim, :tire, :gear
//   def initialize(rim:, tire:, chainring:, cog:)
//     @rim  = rim
//     @tire = tire
//     @gear = Gear.new(chainring: chainring, cog: cog)
//   end

//   def diameter
//     rim + (tire * 2)
//   end

//   def gear_inches
//     gear.gear_inches(diameter)
//   end
//   # ...
// end

// puts Wheel.new(
//        rim:       26,
//        tire:      1.5,
//        chainring: 52,
//        cog:       11).gear_inches
// # => 137.0909090909091

// with keyword args
class Gear {
  private _chainring: number;
  private _cog: number;

  constructor({ chainring, cog }) {
    this._chainring = chainring;
    this._cog = cog;
  }

  get chainring() {
    return this._chainring;
  }
  get cog() {
    return this._cog;
  }

  public gear_inches(diameter) {
    return this.ratio() * diameter;
  }

  public ratio() {
    return this.chainring / this.cog;
  }
}

class Wheel {
  private _rim: number;
  private _tire: number;
  private _gear: any;

  constructor({ rim, tire, chainring, cog }) {
    this._rim = rim;
    this._tire = tire;
    this._gear = new Gear({ chainring, cog });
  }

  get rim() {
    return this._rim;
  }
  get tire() {
    return this._tire;
  }
  get gear() {
    return this._gear;
  }

  public diameter() {
    return this.rim + this.tire * 2;
  }

  public gear_inches() {
    return this.gear.gear_inches(this.diameter());
  }
  //
}

console.log(
  new Wheel({
    rim: 26,
    tire: 1.5,
    chainring: 52,
    cog: 11
  }).gear_inches()
);
// 137.0909090909091

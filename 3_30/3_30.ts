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

  diameter() {
    return this.rim + this.tire * 2;
  }
}

class GearUsingFixedArgs {
  private _chainring: number;
  private _cog: number;
  private _wheel: any;

  public constructor(chainring, cog, wheel) {
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

console.log(new GearUsingFixedArgs(52, 11, new Wheel(26, 1.5)).gear_inches());
// => 137.0909090909091

class GearUsingHash {
  private _chainring: number;
  private _cog: number;
  private _wheel: any;

  public constructor(args) {
    this._chainring = args['chainring']; // NOTE: could instead be `args.chainring`
    this._cog = args['cog'];
    this._wheel = args['wheel'];
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

console.log(
  new GearUsingHash({
    chainring: 52,
    cog: 11,
    wheel: new Wheel(26, 1.5)
  }).gear_inches()
);
// => 137.0909090909091

class GearUsingKeywordArgs {
  private _chainring: number;
  private _cog: number;
  private _wheel: any;

  public constructor({ chainring, cog, wheel }) {
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

console.log(
  new GearUsingKeywordArgs({
    cog: 11,
    chainring: 52,
    wheel: new Wheel(26, 1.5)
  }).gear_inches()
);
// => 137.0909090909091

console.log(
  new GearUsingKeywordArgs({
    wheel: new Wheel(26, 1.5),
    chainring: 52,
    cog: 11
  }).gear_inches()
);
// => 137.0909090909091

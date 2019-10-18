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

// ###########################
// # KEYWORD ARGS
// #    keyword arg with simple defaults
// ###########################
// class Gear
//   attr_reader :chainring, :cog, :wheel
//   def initialize(chainring: 40, cog: 18, wheel:)
//     @chainring = chainring
//     @cog       = cog
//     @wheel     = wheel
//   end
//   # ...
//   def gear_inches
//     ratio * wheel.diameter
//   end

//   def ratio
//     chainring / cog.to_f
//   end
// end

// puts Gear.new(wheel: Wheel.new(26, 1.5)).chainring
// # => 40

// ###########################
// # KEYWORD ARGS
// #    keyword arg with defaults
// ###########################
// class Gear
//   attr_reader :chainring, :cog, :wheel
//   def initialize(chainring: default_chainring, cog: 18, wheel:)
//     @chainring = chainring
//     @cog       = cog
//     @wheel     = wheel
//   end

//   def default_chainring
//     (100/2) - 10        # silly code, useful example
//   end
//   # ...
//   def gear_inches
//     ratio * wheel.diameter
//   end

//   def ratio
//     chainring / cog.to_f
//   end
// end

// puts Gear.new(wheel: Wheel.new(26, 1.5)).chainring
// # => 40

// puts Gear.new(chainring: 52, wheel: Wheel.new(26, 1.5)).chainring
// # => 52

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

/*
 * KEYWORD ARGS
 *     keyword arg with simple defaults
 *
 * NOTE: Here, we're combining destructuring with function defaults to
 * accomplish something similar to keyword args with default values.
 *
 * SEE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * SEE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
class Gear {
  private _chainring: number;
  private _cog: number;
  private _wheel: any;

  public constructor({ chainring = 40, cog = 18, wheel }) {
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
  new Gear({
    wheel: new Wheel(26, 1.5)
  }).chainring
);
// => 40;

/*
 * KEYWORD ARGS
 *     keyword arg with defaults
 *
 * NOTE: Sandi's point here is that the `constructor` executes in the new
 * instance of Gear, so it should be able to send messages to itself.
 */

class GearWithDefaultMethod {
  private _chainring: number;
  private _cog: number;
  private _wheel: any;

  constructor({ chainring = this.default_chainring(), cog = 18, wheel }) {
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

  public default_chainring() {
    return 100 / 2 - 10;
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
  new GearWithDefaultMethod({
    wheel: new Wheel(26, 1.5)
  }).chainring
);
// => 40

console.log(
  new GearWithDefaultMethod({
    chainring: 52,
    wheel: new Wheel(26, 1.5)
  }).chainring
);
// => 52

// class RevealingReferences
//   attr_reader :wheels
//   def initialize(data)
//     @wheels = wheelify(data)
//   end

//   # first - iterate over the array
//   def diameters
//     wheels.collect {|wheel| diameter(wheel)}
//   end

//   # second - calculate diameter of ONE wheel
//   def diameter(wheel)
//     wheel.rim + (wheel.tire * 2)
//   end

//   # ... now everyone can send rim/tire to wheel
//   Wheel = Struct.new(:rim, :tire)
//   def wheelify(data)
//     data.collect {|cell|
//       Wheel.new(cell[0], cell[1])}
//   end
// end

// @data = [[622, 20], [622, 23], [559, 30], [559, 40]]
// puts "RevealingReferences diameters = #{RevealingReferences.new(@data).diameters}"

// # gear_inches does too much
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

// puts "1st Gear gear_inches = #{Gear.new(54,11,622,20).gear_inches}"

// # diameter method doesn't belong in Gear, notice it
// # depends on rim and tire only
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
//     ratio * diameter
//   end

//   def diameter
//     rim + (tire * 2)
//   end
// end

// puts "2nd Gear gear_inches = #{Gear.new(54,11,622,20).gear_inches}"

class RevealingReferences {
  private _wheels: any;

  public constructor(data) {
    this._wheels = this.wheelify(data);
  }

  get wheels() {
    return this._wheels;
  }

  // first - iterate over the array
  public diameters() {
    return this.wheels.map(wheel => this.diameter(wheel));
  }

  // second - calculate diameter of ONE wheel
  private diameter(wheel) {
    return wheel.rim + wheel.tire * 2;
  }

  private wheelify(data) {
    return data.map(cell => {
      return {
        rim: cell[0],
        tire: cell[1]
      };
    });
  }
}

const data = [[622, 20], [622, 23], [559, 30], [559, 40]];
console.log(
  `RevealingReferences diameters = ${new RevealingReferences(data).diameters()}`
);

// gear_inches does too much
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

  public ratio() {
    return this.chainring / this.cog;
  }

  public gear_inches() {
    // tire goes around rim twice for diameter
    return this.ratio() * (this.rim + this.tire * 2);
  }
}

console.log(
  `1st Gear gear_inches = ${new Gear(54, 11, 622, 20).gear_inches()}`
);

// diameter method doesn't belong in Gear, notice it depends on rim and tire only
class GearWithDiameter {
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

  public ratio() {
    return this.chainring / this.cog;
  }

  public gear_inches() {
    return this.ratio() * this.diameter();
  }

  public diameter() {
    return this.rim + this.tire * 2;
  }
}

console.log(
  `2nd Gear gear_inches = ${new Gear(54, 11, 622, 20).gear_inches()}`
);

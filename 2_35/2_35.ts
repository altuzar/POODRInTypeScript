// class Gear
//   attr_reader :chainring, :cog, :wheel
//   def initialize(chainring, cog, rim, tire)
//     @chainring = chainring
//     @cog       = cog
//     @wheel     = Wheel.new(rim, tire)
//   end

//   def ratio
//     chainring / cog.to_f
//   end

//   def gear_inches
//     ratio * wheel.diameter
//   end

//   Wheel = Struct.new(:rim, :tire) do
//     def diameter
//       rim + (tire * 2)
//     end
//   end
// end

// puts "Gear gear_inches = #{Gear.new(54,11,622,20).gear_inches}"

class Gear {
  private _chainring: number;
  private _cog: number;
  private _wheel: any;

  public constructor(chainring, cog, rim, tire) {
    this._chainring = chainring;
    this._cog = cog;
    this._wheel = {
      rim,
      tire,
      get diameter() {
        return this.rim + this.tire * 2;
      }
    };
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
    return this.ratio() * this.wheel.diameter;
  }
}

console.log(`Gear gear_inches = ${new Gear(54, 11, 622, 20).gear_inches()}`);

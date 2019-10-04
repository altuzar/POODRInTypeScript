// class ObscuringReferences
//   attr_reader :data
//   def initialize(data)
//     @data = data
//   end

//   def diameters
//     # 0 is rim, 1 is tire
//     data.collect {|cell|
//       cell[0] + (cell[1] * 2)}
//   end
//   # ... many other methods that index into the array
// end

// # rim and tire sizes (now in milimeters!) in a 2d array
// @data = [[622, 20], [622, 23], [559, 30], [559, 40]]

// class RevealingReferences
//   attr_reader :wheels
//   def initialize(data)
//     @wheels = wheelify(data)
//   end

//   def diameters
//     wheels.collect {|wheel|
//       wheel.rim + (wheel.tire * 2)}
//   end

//   # now everyone can send rim/tire to wheel
//   Wheel = Struct.new(:rim, :tire)
//   def wheelify(data)
//     data.collect {|cell|
//       Wheel.new(cell[0], cell[1])}
//   end
// end

// # ensure the code compiles and executes
// puts "ObscuringReferences diameters = #{ObscuringReferences.new(@data).diameters}"
// puts "RevealingReferences diameters = #{RevealingReferences.new(@data).diameters}"

class ObscuringReferences {
  private _data: any;

  public constructor(data) {
    this._data = data;
  }

  get data() {
    return this._data;
  }

  diameters() {
    // 0 is rim, 1 is tire
    return this.data.map(cell => {
      return cell[0] + cell[1] * 2;
    });
  }
  // ... many other methods that index into the array
}

// rim and tire sizes (now in millimeters!) in a 2d array
const data = [[622, 20], [622, 23], [559, 30], [559, 40]];

class RevealingReferences {
  private _wheels: any;

  public constructor(data) {
    this._wheels = this.wheelify(data);
  }

  get wheels() {
    return this._wheels;
  }

  public diameters() {
    return this.wheels.map(wheel => {
      return wheel.rim + wheel.tire * 2;
    });
  }

  private wheelify(data) {
    return data.map(cell => {
      // ADAPTATION: Using an object literal in place of a Ruby Struct
      // now everyone can send rim/tire to the wheel object literal
      return {
        rim: cell[0],
        tire: cell[1]
      };
    });
  }
}

console.log(
  `ObscuringReferences diameters = ${new ObscuringReferences(data).diameters()}`
);
console.log(
  `RevealingReferences diameters = ${new RevealingReferences(data).diameters()}`
);

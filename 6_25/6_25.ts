// class Bicycle
//   attr_reader :size       # <- promoted from RoadBike

//   def initialize(**opts)
//     @size = opts[:size]  # <- promoted from RoadBike
//   end
// end

// class RoadBike < Bicycle
//   attr_reader :tape_color

//   def initialize(**opts)
//     @tape_color = opts[:tape_color]
//     super               # <- RoadBike MUST send `super`
//   end

//   def spares
//     { chain:      '11-speed',
//       tire_size:  '23',
//       tape_color: tape_color}
//   end
//   # ...
// end

// class MountainBike < Bicycle
//   attr_reader :front_shock, :rear_shock

//   def initialize(**opts)
//     @front_shock = opts[:front_shock]
//     @rear_shock  = opts[:rear_shock]
//     super
//   end

//   def spares
//     super.merge(front_shock: front_shock)
//   end
// end

// road_bike = RoadBike.new(
//               size:       'M',
//               tape_color: 'red' )

// mountain_bike = MountainBike.new(
//                   size:         'S',
//                   front_shock:  'Manitou',
//                   rear_shock:   'Fox')

// puts road_bike.size
// # => M

// puts mountain_bike.size
// # => S

// puts road_bike.spares
// # => {:chain=>"11-speed", :tire_size=>"23", :tape_color=>"red"}

// puts mountain_bike.spares
// # => super: no superclass method `spares' for #<MountainBike:0x00007f8eaf1474a0>

interface IOpts5 {
  style?: any;
  size?: any;
  tape_color?: any;
  front_shock?: any;
  rear_shock?: any;
}

class Bicycle5 {
  private _size: any;

  public constructor(opts: IOpts5 = {}) {
    this._size = opts.size; // <- promoted from RoadBike
  }

  get size() {
    return this._size;
  } // <- promoted from RoadBike
}

class RoadBike5 extends Bicycle5 {
  private _tape_color: any;

  public constructor(opts: IOpts5 = {}) {
    super(opts);
    this._tape_color = opts.tape_color;
  }

  get tape_color() {
    return this._tape_color;
  }

  public spares() {
    return {
      chain: '11-speed',
      tire_size: '23',
      tape_color: this.tape_color
    };
  }
  // ...
}

class MountainBike5 extends Bicycle5 {
  private _front_shock: any;
  private _rear_shock: any;

  public constructor(opts: IOpts5 = {}) {
    super(opts);
    this._front_shock = opts.front_shock;
    this._rear_shock = opts.rear_shock;
  }

  get front_shock() {
    return this._front_shock;
  }
  get rear_shock() {
    return this._rear_shock;
  }

  public spares() {
    return Object.assign({}, super.spares(), {
      front_shock: this.front_shock
    });
  }
}

const road_bike5 = new RoadBike5({
  size: 'M',
  tape_color: 'red'
});

const mountain_bike5 = new MountainBike5({
  size: 'S',
  front_shock: 'Manitou',
  rear_shock: 'Fox'
});

console.log(road_bike5.size);
// => M

console.log(mountain_bike5.size);
// => S

console.log(road_bike5.spares());
// => { chain: '11-speed', tire_size: '23', tape_color: 'red' }

console.log(mountain_bike5.spares());
// => TypeError: (intermediate value).spares is not a function
//      at MountainBike.spares ...

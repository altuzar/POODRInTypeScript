// # Original Bicycle class
// class Bicycle
//   attr_reader :size, :tape_color

//   def initialize(**opts)
//     @size       = opts[:size]
//     @tape_color = opts[:tape_color]
//   end

//   # every bike has the same defaults for
//   # tire and chain size
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

// mountain_bike = MountainBike.new(
//                   size:        'S',
//                   front_shock: 'Manitou',
//                   rear_shock:  'Fox')

// puts mountain_bike.size
// # => S

// puts mountain_bike.spares
// # => {:chain=>"11-speed", :tire_size=>"23", :tape_color=>nil, :front_shock=>"Manitou"}
// # This should be a copy of out2, dup'd because I want to spread it out and comment on it.
// # => {:chain        =>"11-speed",
// #     :tire_size    =>"23",         <- wrong!
// #     :tape_color   =>nil,          <- not applicable!
// #     :front_shock  =>"Manitou"}

interface IOpts3 {
  style?: any;
  size?: any;
  tape_color?: any;
  front_shock?: any;
  rear_shock?: any;
}

class Bicycle3 {
  private _size: any;
  private _tape_color: any;

  public constructor(opts: IOpts3 = {}) {
    this._size = opts.size;
    this._tape_color = opts.tape_color;
  }

  get size() {
    return this._size;
  }
  get tape_color() {
    return this._tape_color;
  }

  // every bike has the same defaults for tire and chain size
  public spares() {
    return {
      chain: '11-speed',
      tire_size: '23',
      tape_color: this.tape_color
    };
  }
  // ...
}

class MountainBike extends Bicycle3 {
  private _front_shock: any;
  private _rear_shock: any;

  public constructor(opts: IOpts3 = {}) {
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

const mountain_bike = new MountainBike({
  size: 'S',
  front_shock: 'Manitou',
  rear_shock: 'Fox'
});

console.log(mountain_bike.size);
// => S

console.log(mountain_bike.spares());
// => { chain: '11-speed', tire_size: '23', tape_color: undefined, front_shock: 'Manitou' }
// This should be a copy of out2, duplicated because I want to spread it out and comment on it.
// => {
//   chain: '11-speed',
//   tire_size: '23',       <- wrong!
//   tape_color: undefined, <- not applicable!
//   front_shock: 'Manitou'
// }

// class Bicycle
//   attr_reader :size, :chain, :tire_size

//   def initialize(**opts)
//     @size       = opts[:size]
//     @chain      = opts[:chain]      || default_chain
//     @tire_size  = opts[:tire_size]  || default_tire_size
//   end

//   def default_chain         # <- common default
//     "11-speed"
//   end
//   # ...
//   def default_tire_size
//     raise NotImplementedError,
//           "#{self.class} should have implemented..."
//   end
// end

// class RoadBike < Bicycle
//   attr_reader :tape_color

//   def initialize(**opts)
//     @tape_color = opts[:tape_color]
//     super
//   end

//   def spares
//     { chain:      '11-speed',
//       tire_size:  '23',
//       tape_color: tape_color}
//   end

//   def default_tire_size     # <- subclass default
//     "23"
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

//   def default_tire_size     # <- subclass default
//     "2.1"
//   end
//    # ...
// end

// class RecumbentBike < Bicycle
//   def default_chain
//     '10-speed'
//   end
// end

// bent = RecumbentBike.new(size: "L")
// # => RecumbentBike should have implemented...
// # => .../some_file.rb:15:in `default_tire_size'
// # => /Users/skm/Projects/books/poodr2code/raw/6_37.rb:15:in `default_tire_size'

interface IOpts6 {
  style?: any;
  size?: any;
  chain?: any;
  tape_color?: any;
  front_shock?: any;
  rear_shock?: any;
  tire_size?: any;
}

class Bicycle8 {
  private _size: any;
  private _chain: any;
  private _tire_size: any;

  public constructor(opts: IOpts6 = {}) {
    this._size = opts.size;
    this._chain = opts.chain || this.default_chain();
    this._tire_size = opts.tire_size || this.default_tire_size();
  }

  get size() {
    return this._size;
  }
  get chain() {
    return this._chain;
  }
  get tire_size() {
    return this._tire_size;
  }

  public default_chain() {
    // <- common default
    return '11-speed';
  }
  // ...
  public default_tire_size() {
    throw new Error(
      `Not implemented: ${this.constructor.name} should have implemented...`
    );
  }
}

class RoadBike8 extends Bicycle8 {
  private _tape_color: any;

  public constructor(opts: IOpts6 = {}) {
    super(opts);
    this._tape_color = opts.tape_color;
  }

  get tape_color() {
    return this._tape_color;
  }

  spares() {
    return {
      chain: '11-speed',
      tire_size: '23',
      tape_color: this.tape_color
    };
  }

  public default_tire_size() {
    // <- subclass default
    return '23';
  }
  // ...
}

class MountainBike8 extends Bicycle8 {
  private _front_shock: any;
  private _rear_shock: any;

  public constructor(opts: IOpts6 = {}) {
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

  public default_tire_size() {
    // <- subclass default
    return '2.1';
  }
  // ...
}

class RecumbentBike8 extends Bicycle8 {
  public default_chain() {
    return '10-speed';
  }
}

const bent8 = new RecumbentBike8({
  size: 'L'
});
// => Error: Not implemented: RecumbentBike should have implemented...
//      at RecumbentBike.default_tire_size ...
//      at new Bicycle ...
//      at new RecumbentBike ...

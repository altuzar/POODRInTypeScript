// class Bicycle
//   attr_reader :size, :tape_color

//   def initialize(**opts)
//     @size       = opts[:size]
//     @tape_color = opts[:tape_color]
//   end

//   # every bike has the same defaults for
//   # tire and chain size
//   def spares
//     { chain:        '11-speed',
//       tire_size:    '23',
//       tape_color:   tape_color}
//   end

//   # Many other methods...
// end

// bike = Bicycle.new(
//         size:       'M',
//         tape_color: 'red' )

// puts bike.size
// # => M

// puts bike.spares
// # => {:chain=>"11-speed", :tire_size=>"23", :tape_color=>"red"}

interface IOpts {
  size?: any;
  tape_color?: any;
}

class Bicycle {
  private _size: any;
  private _tape_color: any;

  public constructor(opts: IOpts = {}) {
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

  // many other methods...
}

const bike = new Bicycle({
  size: 'M',
  tape_color: 'red'
});

console.log(bike.size);
// => M

console.log(bike.spares());
// => { chain: '11-speed', tire_size: '23', tape_color: 'red' }

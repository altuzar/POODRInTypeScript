// chainring = 52                    # number of teeth
// cog       = 11
// ratio     = chainring / cog.to_f
// puts ratio                        # => 4.7272727272727275

// chainring = 30
// cog       = 27
// ratio     = chainring / cog.to_f
// puts ratio                        # => 1.1111111111111112

let chainring = 52; // number of teeth
let cog = 11;
let ratio = chainring / Number(cog);
console.log(ratio); // => 4.7272727272727275

chainring = 30;
cog = 27;
ratio = chainring / Number(cog);
console.log(ratio); // => 1.1111111111111112

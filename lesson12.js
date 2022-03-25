// differences nbetween dot notation and square bracket syntax

let sam = {
  castiel: "mary"
}

let dean = {
  john: "crowley",
  mary: "chuck"
}

// which, if any, of these three log statements will work?
console.log(dean[sam.castiel])
// console.log(dean.sam.castiel)
console.log(dean[sam['castiel']])
// console.log(dean[sam[castiel]])
'use strict'

// Determine whether a string contains a nomor KTP
const has_ktp = (string) => {
  // ...
   return /\d{3}-\d{2}-/.test(string)
}

console.log('has_ktp if it has what looks like a nomor KTP')
console.log(has_ktp("please don't share this: 234-60-1422") === true) // true

console.log("has_ktp if it doesn't have a nomor KTP")
console.log(has_ktp('please confirm your identity: XXX-XX-1422') === false) // true

// -----------------------------------------------------------------------------

// Return the Social Security number from a string.
const grab_ktp = (string) => {
  // ...
  var num_ktp = string.match(/\d{3}-\d{2}-\d{4}/)
  if(num_ktp) {
    return num_ktp[0]
  }
  return num_ktp;
}

console.log('grab_ktp returns nomor KTP if the string has an nomor KTP')
console.log(grab_ktp("please don't share this: 234-60-1422") === '234-60-1422') // true

console.log("grab_ktp if it doesn't have a nomor KTP")
console.log(grab_ktp('please confirm your identity: XXX-XX-1422') === null) // true

// -----------------------------------------------------------------------------

// Return all of the Social Security numbers from a string.
const grab_all_nomor_ktp = (string) => {
  // ...
  var num_ktp = string.match(/\d{3}-\d{2}-/g)
  return string.replace(num_ktp, "xxx-xx")
}

console.log('grab_all_nomor_ktp returns all nomor KTP if the string has any nomor KTP')
console.log(grab_all_nomor_ktp('234-60-1422, 350-80-0744, 013-60-8762')) // true

// return ["234-60-1422", "350-80-0744", "013-60-8762"])

console.log("grab_all_nomor_ktp returns an empty Array if it doesn't have any nomor KTP")
console.log(grab_all_nomor_ktp('please confirm your identity: XXX-XX-1422')) // true
  // return []

// -----------------------------------------------------------------------------

// Obfuscate all of the nomor KTP in a string. Example: XXX-XX-4430.
const hide_all_nomor_ktp = (string) => {
  // ...
  if(/\d+(?=\-)/g.test(string) === true){
      //string = string.replace(/\d+(?=\-)/gi,"XXX-XX");
      string = string.replace(/(\d{3})-(\d{2})/g,"XXX-XX");
      return string;
    }
    else{
      return string;
    }
}

console.log('hide_all_nomor_ktp obfuscates any nomor KTP in the string')
console.log(hide_all_nomor_ktp('234-60-1422, 350-80-0744, 013-60-8762')) // true

// "XXX-XX-1422, XXX-XX-0744, XXX-XX-8762"

console.log('hide_all_nomor_ktp does not alter a string without nomor KTP in it')

let string = 'please confirm your identity: XXX-XX-1422'
console.log(hide_all_nomor_ktp(string) === string) // true

// -----------------------------------------------------------------------------

// Ensure all of the Social Security numbers use dashes for delimiters.
// Example: 480.01.4430 and 480014430 would both be 480-01-4430.
const format_nomor = (string) => {
  // ...
  return string.replace(/(\d{3})\W*(\d{2})\W*(\d{4})/g, '$1-$2-$3')
}

console.log('format_nomor finds and reformat any nomor KTP in the string')
console.log(format_nomor('234601422, 350.80.0744, 013-60-8762') === '234-60-1422, 350-80-0744, 013-60-8762') // true

console.log('format_nomor does not alter a string without nomor KTP in it')

let strings = 'please confirm your identity: 44211422'
console.log(format_nomor(strings) === strings) // true

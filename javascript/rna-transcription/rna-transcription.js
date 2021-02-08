//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = arg => arg == '' ? '' :
  arg.split('').map(e => ['C', 'G', 'A', 'U'][['G', 'C', 'T', 'A'].indexOf(e)]).join('')

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
]

function findMutantByPower(mutants, power) {
  let powers = 0
  for (const mutant of mutants) {
    if (mutant.power === power) {
      powers++
    }
  }
  if (powers > 0) {
    return `Existen ${powers} mutantes con el poder ${power}.`
  } else {
    return `No se encontraron mutantes con el poder ${power}.`
  }
}
console.log(findMutantByPower(mutants, 'telepathy'))
console.log(findMutantByPower(mutants, 'invisibility'))

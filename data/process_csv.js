const fs = require('fs')
const path = require('path')
const parse = require('csv-parse/lib/sync')

const dropYearsAfter = '1992'

function range (end) {
  return [...Array(end).keys()]
}

function colFromTable (table, colNum) {
  return table.map(row => row[colNum])
}

function transpose (table) {
  return range(table[0].length).map(colNum => colFromTable(table, colNum))
}

function coerceToNumber (val) {
  return parseInt(val.replace(/,/g, '')) || val
}

// load data from csv
const csv = 'us_pres_results_by_state_1828-2016_overall.csv'
const csvPath = path.join(__dirname, csv)
const raw = fs.readFileSync(csvPath)
let table = parse(raw)

// transpose table
let cols = transpose(table)
// find the index of the first column with all empty cells
const firstEmptyCol = cols.map(col => col.map(Boolean).reduce((a, b) => a || b)).findIndex(i => !i)
// drop all cols between state names col and including first empty col
cols = [cols[0]].concat(cols.slice(firstEmptyCol + 1))
table = transpose(cols)

// extend all Year columns into empty cells to the right
const header = table[0]
for (let i = 1; i < header.length; i++) {
  if (!header[i]) header[i] = header[i - 1]
}
cols = transpose(table)

// drop all cols at and after the years we don't care about
const dropYearCol = cols.findIndex(c => c[0] === dropYearsAfter)
cols = cols.slice(0, dropYearCol)
// drop all Total columns
const colsToDrop = cols
  .map(col => col[1] === 'Total')
  .map((val, index) => val && index)
  .filter(Boolean)
colsToDrop.reverse()
colsToDrop.forEach(colNum => { cols = cols.slice(0, colNum).concat(cols.slice(colNum + 1)) })
table = transpose(cols)

// drop rows with regions - states and regions are separated by a blank row
const dropRegionsRow = cols[0].findIndex(cell => cell === '')
table = table.slice(0, dropRegionsRow)

// drop nationwide row
const dropNationwideRow = cols[0].findIndex(cell => cell === 'Nationwide')
table = table.slice(0, dropNationwideRow).concat(table.slice(dropNationwideRow + 1))

// coerce all table values to numbers if they're probably numbers (year, votes, etc.)
table.forEach(row => {
  row.forEach((cell, i) => {
    row[i] = coerceToNumber(cell)
  })
})

// group all state data
const stateData = {}
table.slice(2).forEach(row => {
  const stateName = row[0]
  stateData[stateName] = stateData[stateName] || {}
  row.slice(1).forEach((votes, i) => {
    i++  // fix lookup error since we're starting at col 1
    const year = table[0][i]
    const [candidate, party] = table[1][i].split(' - ')
    stateData[stateName][year] = stateData[stateName][year] || []
    stateData[stateName][year].push({ candidate, party, votes })
  })
})

// write to json
const jsonOut = path.join(__dirname, '..', 'src', 'fixtures', 'voting_data.json')
const data = JSON.stringify(stateData, null, 2)
fs.writeFileSync(jsonOut, data)

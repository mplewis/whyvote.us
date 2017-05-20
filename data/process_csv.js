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
// drop all cols at and after the years we don't care about
const dropYearCol = cols.findIndex(c => c[0] === dropYearsAfter)
cols = cols.slice(0, dropYearCol)

// transpose back into a row-based table
table = transpose(cols)

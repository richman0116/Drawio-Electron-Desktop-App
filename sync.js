const fs = require('fs')
const path = require('path')
const child_process = require('child_process')

const electronAppDir = path.resolve(__dirname, 'draw.io', 'war')
const appjsonpath = path.resolve(__dirname, 'draw.io', 'war', 'package.json')

// let ver = fs.readFileSync(path.resolve(__dirname, 'draw.io', 'VERSION'), 'utf8')
let ver = '6.4.1' // just to test autoupdate

let pj = require(appjsonpath)

pj.version = ver

fs.writeFileSync(appjsonpath, JSON.stringify(pj, null, 2), 'utf8')

child_process.spawnSync('yarn', ['install', '--production'], {cwd: electronAppDir})

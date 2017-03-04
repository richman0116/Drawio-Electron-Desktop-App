const fs = require('fs')
const path = require('path')
const child_process = require('child_process')

const wardir = path.resolve(__dirname, 'draw.io', 'war')
const appjsonpath = path.resolve(wardir, 'package.json')

let ver = fs.readFileSync(path.resolve(__dirname, 'draw.io', 'VERSION'), 'utf8')

let pj = require(appjsonpath)

pj.version = ver

fs.writeFileSync(appjsonpath, JSON.stringify(pj), 'utf8')

child_process.spawnSync('yarn', ['install'], {cwd: wardir})

/*
 "postinstall": "cd draw.io/war && yarn install --production",
 */

const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Eliminar Pelicula', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Eliminar Pelicula', async function() {
    await driver.get("http://localhost:5001/")
    await driver.manage().window().setRect(1366, 720)
    await driver.findElement(By.linkText("Generadas")).click()
    await driver.findElement(By.css(".bg-secondary .btn-danger")).click()
  })
})



const assert = require('assert')
const mocha = require('mocha')
const { create } = require('mochawesome')

describe('Eliminar Pelicula', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Eliminar Pelicula', async function() {
    await driver.get("http://localhost:5001/")
    await driver.manage().window().setRect(1366, 720)
    await driver.findElement(By.linkText("Generadas")).click()
    await driver.findElement(By.css(".bg-secondary .btn-danger")).click()
  })
  after(async function() {
    const report = await create({ inlineAssets: true })
  })
})

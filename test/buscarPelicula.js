const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const { addContext } = require('mochawesome/addContext')

describe('Buscar Pelicula', function() {
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
  it('Buscar Pelicula de Accion', async function() {
    await driver.get("http://localhost:5001/")
    await driver.manage().window().setRect(1366, 720)
    await driver.findElement(By.id("genero")).click()
    {
      const dropdown = await driver.findElement(By.id("genero"))
      await dropdown.findElement(By.xpath("//option[. = 'Accion']")).click()
    }
    await driver.findElement(By.css(".btn:nth-child(2)")).click()
    const title = await driver.findElement(By.css(".card-title")).getText()
    assert.strictEqual(title, "Películas de Accion")
    await addContext(this, { title: "Buscar Pelicula de Accion", value: "Titulo de la pelicula: " + title })
    await driver.close()
  })
  it('Buscar Pelicula de Suspenso', async function() {
    await driver.get("http://localhost:5001/")
    await driver.manage().window().setRect(1366, 720)
    await driver.findElement(By.id("genero")).click()
    {
      const dropdown = await driver.findElement(By.id("genero"))
      await dropdown.findElement(By.xpath("//option[. = 'Suspenso']")).click()
    }
    await driver.findElement(By.css(".btn")).click()
    const title = await driver.findElement(By.css(".card-title")).getText()
    assert.strictEqual(title, "Películas de Suspenso")
    await addContext(this, { title: "Buscar Pelicula de Suspenso", value: "Titulo de la pelicula: " + title })
    await driver.close()
  })
})

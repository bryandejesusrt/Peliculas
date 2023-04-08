const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Editar Pelicula', function() {
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
  it('Editar Pelicula', async function() {
    await driver.get("http://localhost:5001/")
    await driver.manage().window().setRect(1366, 720)
    await driver.findElement(By.linkText("Generadas")).click()
    await driver.findElement(By.linkText("Editar")).click()
    await driver.findElement(By.id("titulo")).click()
    await driver.findElement(By.id("titulo")).sendKeys("Black Adam")
    await driver.findElement(By.id("descripcion")).click()
    await driver.findElement(By.id("descripcion")).sendKeys("Black Adam es una película estadounidense de superhéroes basada en el personaje homónimo de DC Comics.")
    await driver.findElement(By.css(".mb-3 > #genero")).click()
    {
      const dropdown = await driver.findElement(By.css(".mb-3 > #genero"))
      await dropdown.findElement(By.xpath("//option[. = 'Accion']")).click()
    }
    await driver.findElement(By.css(".form-check:nth-child(2) > .form-check-label")).click()
    await driver.findElement(By.id("enviar")).click()
  })
})

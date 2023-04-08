
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Guardar Pelicula', function() {
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
  it('Guardar Pelicula', async function() {
    await driver.get("http://localhost:5001/")
    await driver.manage().window().setRect(1366, 720)
    await driver.findElement(By.linkText("Añadir nuevas Peliculas!!")).click()
    await driver.findElement(By.id("titulo")).click()
    await driver.findElement(By.id("titulo")).sendKeys("Aquaman")
    await driver.findElement(By.id("urlImg")).click()
    await driver.findElement(By.id("urlImg")).sendKeys("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQUExYUExMXFxYYGBgaGRkZGRsZFhkbIBgZHBkZGBgZHikhGR4mHBkZIjIjJyosLy8vGSA1PTUuOSkuLy4BCgoKDg0OGxAQHC4mIScuLi4uLi4sLC4uLjkvLi4uLi4uLi4uLjAuLi4uLi4uLi4uLi4uLi4wLi4uLi4uLi4uLv/AABEIAREAuAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAMEBQcCAQj/xABEEAACAQIEBAMFBgUDAgMJAAABAhEDIQAEEjEFIkFRBhNhMkJxgZEHI1KhsfAUYsHR4RUzclPxQ4KSFyQ0RGSTssLD/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EADIRAAICAQMDAgMHAwUAAAAAAAABAhEDBBIhMUFREyKBscEFFDJhcaHwI0KRJDNS0eH/2gAMAwEAAhEDEQA/AGCMckYdK45K46BzBorjwph7TjzTgiiMVw2yYllccFMQEhOmGHp4sGp4aaliyWVtSnhlkxd/wv3LN/OoHyVtX/5LiA9HFKSdlvgkCgBkC0e1mlA/8lFj/wD0OKU08GnGMl5fC8t3etUc/QqPyGBVsmXBUEibSNx3jGHBl92S+z+hplibUUu6KXP8QSnY8zfhHT49sVVTjbT7Cx8ST9cSuJ8Eejd6LidhpJHcSf3tigqC/wCxifeHLlM0fdow4aLihxkE86x6i/1GLBGDCQQR3GBeosEj1/dsScjnChn3TuP6/HDIZn/cLngX9oQAfv8Apjk/E+n+flh0QQCLg3H98cMMajLY1pwj3/rjsrjmD+v79MWWNxhOR3v/AF7fv4Y7C48bEouxph8cLHenCxCWacUx5oxI04WjCrJRH0Y98vEgJj3Ri7Boi+Xjw0cS/Lx4aeLsqiGaGF/CT1GJRp45NPEtg8Eqpw4CggkczM2/wXt/LiKnBgxA1qPicSeMZlWOX")
    await driver.findElement(By.id("descripcion")).click()
    await driver.findElement(By.id("descripcion")).sendKeys("Aquaman es un superhéroe de DC Comics creado en 1941 por Mort Weisinger y Paul Norris. También conocido como Arthur Curry, es el rey de Atlantis y tiene la habilidad de comunicarse con los animales marinos, además de tener una gran fuerza y resistencia debido a que es parte atlante y parte humano. Tiene un tridente mágico que lo ayuda en sus batallas, y es miembro fundador de la Liga de la Justicia en los cómics de DC. En la adaptación cinematográfica de DC, Aquaman es interpretado por el actor Jason Momoa.")
    await driver.findElement(By.css(".mb-3 > #genero")).click()
    {
      const dropdown = await driver.findElement(By.css(".mb-3 > #genero"))
      await dropdown.findElement(By.xpath("//option[. = 'Accion']")).click()
    }
    await driver.findElement(By.id("enviar")).click()
  })
})

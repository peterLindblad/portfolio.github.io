from selenium.webdriver.common.by import By
import time
import functions

# configuration variables
headless = False


##main##
print('Starting up Webscraper...')
driver = functions.initDriver(headless)

print('Allowing Cookies...')
functions.allowCookies(driver)

print('Locating Albums...')
albumElements = functions.getAlbumElements(driver)
albums = []

print('Collecting Album Meta Data...')
for album in albumElements:
    albumInfo = functions.getAlbumInfo(album)
    albums.append(albumInfo)

print('Scaning Images...')
for album in albums:
    albumElement = driver.find_element(
        By.XPATH, f"//*[text()='{album['name']}']")
    driver.execute_script("arguments[0].click();", albumElement)
    images = functions.getImages(driver)
    albumInfo['urls'] = images
    driver.back()

functions.save(albums)
driver.quit()

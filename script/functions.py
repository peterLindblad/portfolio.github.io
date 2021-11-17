
import config
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import json
import config
import time


def initDriver(headless):
    chrome_options = webdriver.ChromeOptions()
    # This is how you can make the browser headless
    if headless:
        chrome_options.add_argument("--headless")
    chrome_options.add_argument('log-level=3')
    prefs = {"profile.default_content_setting_values.notifications": 2}
    chrome_options.add_experimental_option("prefs", prefs)
    driver = webdriver.Chrome(options=chrome_options)
    driver.implicitly_wait(10)
    driver.get(config.url)
    return driver


def scrollPage(driver):
    reached_page_end = False
    last_height = driver.execute_script("return document.body.scrollHeight")
    while not reached_page_end:
        driver.find_element(By.XPATH, '//body').send_keys(Keys.END)
        time.sleep(2)
        new_height = driver.execute_script("return document.body.scrollHeight")
        if last_height == new_height:
            reached_page_end = True
        else:
            last_height = new_height


def allowCookies(driver):
    allowCookies = driver.find_element(By.CSS_SELECTOR, config.cookies)
    allowCookies.click()


def getAlbumElements(driver):
    # scrollPage(driver)
    albumPage = driver.find_element(By.XPATH, config.albumContainer)
    return albumPage.find_elements(By.TAG_NAME, 'a')


def nextImage(driver):
    try:
        next = driver.find_element(By.XPATH, config.nextImage)
        driver.execute_script("arguments[0].click();", next)
        return False
    except:
        return True


def getImages(driver):
    # scrollPage(driver)
    print("enter get Images")
    images = driver.find_element(By.XPATH, config.imagesContainer)
    firstImgage = images.find_element(By.TAG_NAME, 'img')
    driver.execute_script("arguments[0].click();", firstImgage)

    urlList = []
    #image = driver.find_element(By.XPATH, config.imageViewer)
    #urlList.append({"id": 1, "url": image.get_attribute("src")})
    index = 0
    endOfAlbum = False
    while not endOfAlbum:
        index += 1
        print(index)
        time.sleep(.3)
        image = driver.find_element(
            By.XPATH, config.imageViewer).get_attribute("src")
        if len(urlList) and image == urlList[-1]['url']:
            endOfAlbum = True
        else:
            urlList.append({"id": index, "url": image})
            nextImage(driver)

    print('Done')
    print(len(urlList))
    driver.find_element(By.XPATH, '//body').send_keys(Keys.ESCAPE)
    return urlList


def getAlbumInfo(album):
    text = album.find_element(By.TAG_NAME, 'span').text
    return {"name": text}


def save(data):
    print(f'\n\nsaving: {len(data)} Objects\n\n')
    with open(config.saveLocation, 'w') as outfile:
        json.dump(data, outfile)

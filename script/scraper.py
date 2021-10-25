from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import json
import config
import time

# configuration variables
url = config.url
saveLocation = config.saveLocation
cookieSelector = config.cookies


def initDriver():
    chrome_options = webdriver.ChromeOptions()
    # This is how you can make the browser headless
    chrome_options.add_argument("--headless")
    prefs = {"profile.default_content_setting_values.notifications": 2}
    chrome_options.add_experimental_option("prefs", prefs)
    driver = webdriver.Chrome(options=chrome_options)
    driver.get(url)
    return driver


def scrollPage(driver):
    reached_page_end = False
    last_height = driver.execute_script("return document.body.scrollHeight")
    while not reached_page_end:
        driver.find_element_by_xpath('//body').send_keys(Keys.END)
        time.sleep(2)
        new_height = driver.execute_script("return document.body.scrollHeight")
        if last_height == new_height:
            reached_page_end = True
        else:
            last_height = new_height
    time.sleep(1)


def allowCookies(driver):
    allowCookies = driver.find_element_by_css_selector(cookieSelector)
    allowCookies.click()


def getImgUrls(driver):
    imgElements = driver.find_elements_by_tag_name('img')
    urlList = []
    for index, elem in enumerate(imgElements):
        urlList.append({"id": index+1, "url": elem.get_attribute("src")})
    return urlList


def save(urlList):
    print(f'\n\nsaving: {len(urlList)} urls\n\n')
    with open(saveLocation, 'w') as outfile:
        json.dump(urlList, outfile)


##main##
driver = initDriver()
allowCookies(driver)
scrollPage(driver)
urls = getImgUrls(driver)
save(urls)
driver.quit()

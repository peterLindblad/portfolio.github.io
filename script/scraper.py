from selenium import webdriver
from selenium.webdriver.chrome import options
from selenium.webdriver.common.keys import Keys
import json
import config

# configuration variables
url = config.url
saveLocation = config.saveLocation

chrome_options = webdriver.ChromeOptions()
# This is how you can make the browser headless
chrome_options.add_argument("--headless")


# The following line controls the notification popping up right after login
#prefs = {"profile.default_content_setting_values.notifications": 2}
#chrome_options.add_experimental_option("prefs", prefs)
driver = webdriver.Chrome(options=chrome_options)
#driver = webdriver.Chrome()
driver.get(url)
# driver.find_element_by_id("email").send_keys("your_username")
# driver.find_element_by_id("pass").send_keys("your_password", Keys.RETURN)
# driver.get(url)
#soup = BeautifulSoup(driver.page_source, "lxml")

imgElements = driver.find_elements_by_tag_name('img')
# imgElements = driver.find_elements_by_class_name('wXeWr islib nfEiy')
print('\n\n\n')
print(len(imgElements))
imagesSRC = []


'''
imgElements[1].click()
thing = driver.find_element_by_css_selector(
    '#Sva75c > div > div > div.pxAole > div.tvh9oe.BIB1wf > c-wiz > div > div.OUZ5W > div.zjoqD > div.qdnLaf.isv-id > div > a > img')
imagesSRC.append({"id": 1, "url": thing.get_attribute("src")})
'''


for index, elem in enumerate(imgElements):
    imagesSRC.append({"id": index+1, "url": elem.get_attribute("src")})
imagesSRC.pop()
print('\n\n\n')
with open(saveLocation, 'w') as outfile:
    json.dump(imagesSRC, outfile)
driver.quit()

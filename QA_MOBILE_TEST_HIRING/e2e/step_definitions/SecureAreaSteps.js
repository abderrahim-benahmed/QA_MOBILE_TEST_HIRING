import { When, Then } from '@cucumber/cucumber'
import SecureAreaPage from '../pageObjects/SecureAreaPage.js'
import messages from '../data/messages.json'

When('I log out', async () => {
  await SecureAreaPage.waitToLoad()
  await SecureAreaPage.logout()
})

Then('I should see the Secure Area heading', async () => {
  await SecureAreaPage.verifyHeading(messages.secureArea.heading)
})

Then('I should see the Secure Area welcome message', async () => {
  await SecureAreaPage.verifyBody(messages.secureArea.bodyText)
})

Then('I should see the logout button', async () => {
  await SecureAreaPage.verifyLogoutButtonVisible()
})


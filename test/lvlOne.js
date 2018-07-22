const gimmeLoginData = require('../page/dataBlaster5000.js');



let BrowseCards = null;

module.exports = {
    before: browser => {
        BrowseCards = browser.page.dataI()
        BrowseCards.navigate()
    },
    after: browser => {
        browser.end()
    },

    'login': browser => {
        BrowseCards
            //fill-out username & password
            .setValue('@emailInput', gimmeLoginData.loginData.email)
            .api.pause(1000)
        BrowseCards
            .setValue('@passwordInput', gimmeLoginData.loginData.pass)
            .api.pause(1000)
        BrowseCards
            .click('@loginStandardBtn')
            .api.pause(2000)
            .assert.urlEquals('https://cards.devclock.com/')
    },

    'Decks': browser => {
        //test decks link 
        BrowseCards
            .verify.elementPresent('@cardsHeader')
            .click('@decks')
            .api.pause(1000)
        BrowseCards
            .verify.urlEquals('https://cards.devclock.com/decks')
            .api.pause(2000)
            .waitForElementVisible('@dkPlusAgain', 1000)
            .click('@dkPlusAgain')
            //tested selector, NOT visible, par for the course


    }


}
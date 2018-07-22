module.exports = {
    url: 'https://cards.devclock.com/',
    elements: {
        //Login Page
        emailInput: {
            selector: '//input[@placeholder="Email"]',
            locateStrategy: 'xpath'
        },

        passwordInput: {
            selector: '//input[@placeholder="Password"]',
            locateStrategy: 'xpath'
        },

        loginGoogleBtn: {
            selector: '(//button)[4]',
            locateStrategy: 'xpath'
        },

        loginStandardBtn: {
            selector: '//button[text()="Login"]',
            locateStrategy: 'xpath'
        },

        // googleIsVeryComplicated: '(li.C5uAFc.w6VTHd)[0]',

        //Cards HomePage
        cardsHeader: {
            selector: '(//label)[1]',
            locateStrategy: 'xpath'
        },

        decks: 'i.fa.fa-lg.fa-tasks',
        reverse: 'button.left',
        subscription: 'i.fa.fa-lg.fa-credit-card',
        reverseII: {
            selector: '//button[@data-bind="click: clickBack, disable: backDisabled"]',
            locateStrategy: 'xpath'
        },

        alternateReverse: {
            selector: '//i[@data-bind="css: strings.backIcon"]', 
            locateStrategy: 'xpath'
        },
        
        thirdReverseBtn: 'button.left', 
        contactUs: '(div.col-4)[2]',
        settings: '(div.col-4)[3]',
        logout: '(div.col-4)[4]',

        //Decks level II 
        decksHeader: {
            selector: '(//label)[1]',
            locateStrategy: 'xpath'
        },
        plusBtn1: 'button.primary.study',
        //Decks level III
        deckNameInput: 'textarea',
        greenSave: 'button.primary',
        blueCancel: '(button)[3]',
        //Decks level IV
        nameInputIV: 'textarea',
        saveIV: 'button.primary',
        cancelIV: '(button)[3]',
        delete: '(button)[4]',

        //Contact Us
        

        //Settings level II
        bluePencil: 'label.icon',

        //Sunday Automation 
        dkPlus: 'button.right', 
        dkPlusAgain: 'i[data-bind="css: strings.addIcon"]'










    }
}

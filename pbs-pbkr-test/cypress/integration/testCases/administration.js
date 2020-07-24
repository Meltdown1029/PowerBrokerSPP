/* eslint-disable cypress/no-unnecessary-waiting */
context('PowerManager-Test', () => {
  beforeEach(() => {
    /* cy.visit('http:/pbsppim.integec.com/') */
  })
  describe('Admin Screen Test', () => {
    /* it('Login', () => {
      cy.visit('http://pbsppim.integec.com/')
      cy.get('input[id="normal_login_username"]').type('admin')
      cy.get('input[id="normal_login_password"]').type('test123')
      cy.get('button[type="submit"]').click()
    })
*/
    context('Security Access', () => {

      it('Security Access', () => {
        cy.get('div[class="ant-menu-submenu-title"]')
          .contains('Administration')
          .click()
        cy.get('div[title="Security Access"]').click()
        cy.contains('Users').click()

        // insert John Doe
        cy.contains('New [+]').click()
        cy.get('input[id="user_details_userName"]').type('JDoe')
        cy.get('input[id="user_details_email"]').type('JDoe@abcde.com')
        cy.get('input[id="user_details_password"]').type('Abc1234')
        cy.get('input[id="user_details_confirmPassword"]').type('Abc1234')
        cy.get('input[name="firstName"]').type('John')
        cy.get('input[name="lastName"]').type('Doe')
        cy.contains('save').click()

        // check John Doe
        cy.get('input[class="ant-input"]').clear()
        cy.get('input[class="ant-input"]').type('JDoe')

      })

      it('User Groups', () => {
        cy.get('div[class="ant-menu-submenu-title"]')
          .contains('Administration')
          .click()
        cy.get('div[title="Security Access"]').click()
        cy.contains('User Groups').click()

        // insert test group
        cy.contains('New [+]').click()
        cy.get('input[title="Group Name"]').type('Test Group')
        cy.get('div[class="ant-modal-body"]').find('input[class="ant-input"]').type('JDoe')
        cy.get('input[type="checkbox"]').click()
        cy.contains('save').click()

      })
    })

    context('Remove test records', () => {
      it('Remove user JDoe', () => {
        cy.get('div[class="ant-menu-submenu-title"]')
          .contains('Administration')
          .click()
        cy.get('div[title="Security Access"]').click()
        cy.get('div[class="ant-menu-submenu ant-menu-submenu-popup ant-menu-dark ant-menu-submenu-placement-rightTop  ant-menu-submenu-hidden"]').contains('Users').click()

        cy.get('input[class="ant-input"]').type('JDoe')
        cy.contains('Remove').click()
        cy.contains('Yes').click()
      })

    })



    context('Unit Management', () => {

      it('Unit*', () => {
        // not done yet, problem with the nav bar
        // cy.get('div[class="ant-menu-submenu-title"]')
        // .contains('Administration')
        // .click()
        // cy.get('div[title="Unit Management"]').click()
        // cy.contains('Unit').next().click()

        // cy.contains('New [+]').click()
      })

      it('Unit Type', () => {
        // need it to get to Unit Management page
        cy.get('div[class="ant-menu-submenu-title"]')
          .contains('Administration')
          .click()
        cy.get('div[title="Unit Management"]').click()

        cy.get('div[class="ant-menu-submenu-title"]')
          .contains('Administration')
          .click()
        cy.get('div[title="Unit Management"]').click()
        cy.contains('Unit Type').click()

        cy.contains('Add New').click()
        cy.get('input[name="unitTypeCode"]').type('AA')
        cy.get('input[name="unitType"]').type('TestType')
        cy.contains('Add & Hide').click()

        cy.get('input[class="ant-input"]').type('TestType')
        cy.contains('AA').click()
        cy.contains('Remove').click()
        cy.contains('Yes').click()
      })


      it('Unit Ownershare*', () => {
        // grid come back later
        cy.get('div[class="ant-menu-submenu-title"]')
          .contains('Administration')
          .click()
        cy.get('div[title="Unit Management"]').click()
        cy.contains('Unit Ownershare').click()
      })

      it('Fuel Type', () => {
        cy.get('div[class="ant-menu-submenu-title"]')
          .contains('Administration')
          .click()
        cy.get('div[title="Unit Management"]').click()
        cy.contains('Fuel Type').click()

        cy.contains('Add New').click()
        cy.get('input[name="fuelTypeCode"]').type('99')
        cy.get('input[name="fuelType"]').type('Test')
        cy.contains('Add & Hide').click()

        cy.get('input[class="ant-input"]').type('Test')
        cy.contains('99').click()
        cy.contains('Remove').click()
        cy.contains('Yes').click()
      })

    })



    context('Market Configuration', () => {

      it('Company', () => {

        // need it to get to Company page
        cy.get('div[class="ant-menu-submenu-title"]')
          .contains('Administration')
          .click()
        cy.get('div[title="Market Configuration"]').click()

        cy.get('div[class="ant-menu-submenu-title"]')
          .contains('Administration')
          .click()
        cy.get('div[title="Market Configuration"]').click()
        cy.contains('Company').click()

        cy.contains('Add New').click()
        cy.get('input[name="companyId"]').type('T000')
        cy.get('input[name="companyName"]').type('Test')
        cy.get('div[class="ant-select-selection__rendered"]').click()
        cy.get('li[class="ant-select-dropdown-menu-item"]').contains('UTILITY').click()
        cy.contains('Add & Hide').click()

        cy.get('input[class="ant-input"]').type('Test')
        cy.contains('T000').click()
        cy.contains('Remove').click()
        cy.contains('Yes').click()
      })



      it('Market Timeline', () => {

        // need it to get to Market Timeline page
        cy.get('div[class="ant-menu-submenu-title"]')
          .contains('Administration')
          .click()
        cy.get('div[title="Market Configuration"]').click()

        cy.get('div[class="ant-menu-submenu-title"]')
          .contains('Administration')
          .click()
        cy.get('div[title="Market Configuration"]').click()
        cy.contains('Market Timeline').click()

        cy.contains('Add New').click()
        cy.get('div[class="ant-select-selection__rendered"]').click()
        cy.get('li[class="ant-select-dropdown-menu-item"]').contains('RTBM').click()
        cy.get('input[class="ant-calendar-picker-input ant-input"][placeholder="Market Date"]').click()
        cy.contains('Today').click()
        cy.wait(300)
        cy.get('input[class="ant-calendar-picker-input ant-input"][placeholder="Dead Line"]').click()
        cy.contains('Now').click()
        cy.contains('Add & Hide').click()

        cy.get('input[class="ant-input"]').type(Cypress.moment().format('MM/DD/YYYY'))
        cy.contains(Cypress.moment().format('MM/DD/YYYY')).click()
        cy.contains('Remove').click()
        cy.contains('Yes').click()
      })

      it('Error Management', () => {
        // need it to get to Market Configuration page
        cy.get('div[class="ant-menu-submenu-title"]')
          .contains('Administration')
          .click()
        cy.get('div[title="Market Configuration"]').click()

        cy.get('div[class="ant-menu-submenu-title"]')
          .contains('Administration')
          .click()
        cy.get('div[title="Market Configuration"]').click()
        cy.wait(300)
        cy.contains('Error Management').click()
      })

      it('WebService Access', () => {
        cy.get('div[class="ant-menu-submenu-title"]')
          .contains('Administration')
          .click()
        cy.get('div[title="Market Configuration"]').click()
        cy.contains('WebService Access').click()
      })

      it('Market Log Files', () => {
        cy.get('div[class="ant-menu-submenu-title"]')
          .contains('Administration')
          .click()
        cy.get('div[title="Market Configuration"]').click()
        cy.contains('Market Log Files').click()
      })


    })

    context('System Configuration', () => {

      it('System Configuration', () => {
        cy.get('div[class="ant-menu-submenu-title"]')
          .contains('Administration')
          .click()
        cy.contains('System Configuration').click()

        cy.contains('Add New').click()
        cy.get('input[name="key"]').type('TESTTEST')
        cy.get('input[name="value"]').type('T000')
        cy.contains('Add & Hide').click()

        cy.get('input[class="ant-input"]').type('TESTTEST')
        cy.contains('T000').click()
        cy.contains('Remove').click()
        cy.contains('Yes').click()
      })
    })

    context('Log Off', () => {
      it('Log off', () => {
        cy.get('div[class="ant-dropdown-trigger css-1pt4xtm"]').click()
        cy.contains('Log out').click()
      })

    })
  })
})
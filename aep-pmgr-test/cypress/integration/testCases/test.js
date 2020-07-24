context('PowerManager-Test', () => {
  beforeEach(() => {
    /* cy.visit('http://pmgr.integec.com/') */
  })
  context('Screen Test', () => {
    it('Login', () => {
      cy.visit('http://pmgr.integec.com/')
      cy.get('input[id="normal_login_username"]').type('admin')
      cy.get('input[id="normal_login_password"]').type('test123')
      cy.get('button[type="submit"]').click()
    })

    it('Dashboards', () => {
      cy.get('div[class="ant-menu-submenu-title"]')
        .contains('Dashboards')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Task Monitor')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Unit Monitor')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Workflow History')
        .click()
      cy.get('div[class="ant-menu-submenu-title"]')
        .contains('Dashboards')
        .click()
    })
    /*
    it('Events', () => {
      cy.get('li[class="ant-menu-item"]')
        .contains('Events')
        .click()
    })

    it('Operator Log', () => {
      cy.get('div[class="ant-menu-submenu-title"]')
        .contains('Operator Log')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Log Monitor')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Log History')
        .click()
      cy.get('div[class="ant-menu-submenu-title"]')
        .contains('Operator Log')
        .click()
    })
*/
    it('Parameters', () => {
      cy.get('div[class="ant-menu-submenu-title"]')
        .contains('Parameters')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Capability')
        .click()

      cy.contains('Select Units').click()

      cy.get(
        ':nth-child(48) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
      ).click()

      cy.get('button[data-testid="item-select-modal-save"]').click()

      cy.contains('Retrieve').click()

      cy.get('input[class="ant-input"]').type('MAX_EXTENDED')

      /* cy.get('li[role="menuitem"]')
        .contains('Ramp Rate')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Mill Rate')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('AGC Data')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Startup Profile')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Cycling')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Operation Mode')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Peak Parameters')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Peak Fire')
        .click()
      cy.get('div[class="ant-menu-submenu-title"]')
        .contains('Parameters')
        .click() */
    })
    /* 
    it('Wind Limits', () => {
      cy.get('div[class="ant-menu-submenu-title"]')
        .contains('Wind Limits')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Tier Access')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Wind Import Log')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Wind Import Data')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Default Wind Select')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('3Tier Wind Forecast')
        .click()
      cy.get('div[class="ant-menu-submenu-title"]')
        .contains('Wind Limits')
        .click()
    })

    it('Configuration', () => {
      cy.get('div[class="ant-menu-submenu-title"]')
        .contains('Configuration')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Checklist Templates')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Custom Log Types')
        .click()
      cy.get('div[class="ant-menu-submenu-title"]')
        .contains('Configuration')
        .click()
    })

    it('Versions', () => {
      cy.get('li[class="ant-menu-item"]')
        .contains('Versions')
        .click()
    })

    it('DART', () => {
      cy.get('div[class="ant-menu-submenu-title"]')
        .contains('DART')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('ISO Access')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('ISO Validations')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Dart Logs')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Sub Account')
        .click()
      cy.get('li[role="menuitem"]')
        .contains('Unit Account')
        .click()
      cy.get('div[class="ant-menu-submenu-title"]')
        .contains('DART')
        .click()
    })

    it('Logoff', () => {
      cy.get(
        'span[class="ant-avatar ant-avatar-circle ant-avatar-icon"]'
      ).click()
      cy.get('li[class="ant-dropdown-menu-item"]')
        .contains('Account settings')
        .click()
      cy.get('button[class="ant-drawer-close"]').click()
      cy.get(
        'span[class="ant-avatar ant-avatar-circle ant-avatar-icon"]'
      ).click()
      cy.get('li[class="ant-dropdown-menu-item"]')
        .contains('Error Log')
        .click()
      cy.get(
        'span[class="ant-avatar ant-avatar-circle ant-avatar-icon"]'
      ).click()
      cy.get('li[class="ant-dropdown-menu-item"]')
        .contains('Log out')
        .click()
    }) */
  })
})

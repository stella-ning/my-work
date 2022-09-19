/// <reference types="Cypress" />

describe('route2', () => {
  context('matches order', () => {
    it('uses the first found route matcher that responds', () => {
      cy.route2('*-fruits').as('fruits') // does not reply
      cy.route2('favorite-*', ['Lemons 🍋']).as('favorite') // replies with a fruit
      cy.route2('favorite-fruits').as('favorite-fruits') // does not reply

      cy.visit('/')
      cy.wait('@fruits') // first route matches
      cy.wait('@favorite') // second route matches
      // but the third route never gets the request
      // since the second route has replied
      cy.contains('li', 'Lemons 🍋').should('be.visible')
    })

    describe('when starts with a slash', () => {
      // seems minimatch fails if the matcher URL starts with a /
      // and includes * character

      it('matches using minimatch', () => {
        // our application issues GET "/favorite-fruits"
        // which matches all these wildcards
        // NOTE: we are matching full url
        const URL = `${Cypress.config('baseUrl')}/favorite-fruits`

        expect(Cypress.minimatch(URL, '**/*-fruits'), '**/*-fruits').to.be.true
        expect(Cypress.minimatch(URL, '**/favorite-*'), '**/favorite-*').to.be.true
        expect(Cypress.minimatch(URL, '**/favorite-fruits'), '**/favorite-fruits').to.be.true
      })

      it('matches *-fruits', () => {
        cy.route2('**/*-fruits').as('fruits')
        cy.visit('/')
        cy.wait('@fruits')
      })

      it('matches favorite-*', () => {
        cy.route2('**/favorite-*').as('favorite')
        cy.visit('/')
        cy.wait('@favorite')
      })

      it('matches favorite-fruits', () => {
        cy.route2('**/favorite-fruits').as('favorite-fruits')
        cy.visit('/')
        cy.wait('@favorite-fruits')
      })

      it('matches all routes that do not respond', () => {
        cy.route2('**/*-fruits').as('fruits')
        cy.route2('**/favorite-*').as('favorite')
        cy.route2('**/favorite-fruits').as('favorite-fruits')

        cy.visit('/')
        // matches all 3 routes
        cy.wait('@fruits')
        cy.wait('@favorite')
        cy.wait('@favorite-fruits')
      })

      it('uses the first found route matcher (2)', () => {
        cy.route2('**/*-fruits-does-not-exist').as('fruits') // this does not match
        cy.route2('**/favorite-*').as('favorite')
        cy.route2('**/favorite-fruits').as('favorite-fruits')

        cy.visit('/')
        // matches last two routes
        cy.wait('@favorite')
        cy.wait('@favorite-fruits')
      })
    })

    describe('without minimatch, just wildcards', () => {
      it('matches *-fruits', () => {
        cy.route2('*-fruits').as('fruits')
        cy.visit('/')
        cy.wait('@fruits')
      })

      it('matches favorite-*', () => {
        cy.route2('favorite-*').as('favorite')
        cy.visit('/')
        cy.wait('@favorite')
      })

      it('matches favorite-fruits', () => {
        cy.route2('favorite-fruits').as('favorite-fruits')
        cy.visit('/')
        cy.wait('@favorite-fruits')
      })

      it('matches all routes that do not respond', () => {
        cy.route2('*-fruits').as('fruits')
        cy.route2('favorite-*').as('favorite')
        cy.route2('favorite-fruits').as('favorite-fruits')

        cy.visit('/')
        // all 3 routes match
        cy.wait('@fruits')
        cy.wait('@favorite')
        cy.wait('@favorite-fruits')
      })
    })
  })
})

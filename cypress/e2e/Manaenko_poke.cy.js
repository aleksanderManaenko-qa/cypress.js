describe('Тестирование сайта https://pokemonbattle.me/login/', function () {


    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.me/login/');
         cy.get(':nth-child(1) > .auth__input').type('hoyihed192@mahmul.com ');
         cy.get('#password').type('igyNu3UREeu4Zhz');
         cy.get('.auth__button').click();
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get(':nth-child(6) > .shop__button').click();
         cy.get('.payment__info-button-v2').click();
         cy.get('.payment__info-button-v2').click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4267598533143395');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1023');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ALEKSANDR POOSHKIN');
         cy.get('.pay-btn').click();
         cy.get('.payment__submit-button').should('be.disabled');
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').should('be.enabled');
         cy.get('.payment__submit-button').click();
         cy.get('.success__image').should('be.visible');
         cy.get('.payment__font-for-success').should('have.text', 'Покупка прошла успешно').should('be.visible');
         cy.get('.payment__adv').should('be.visible');
         cy.get('.payment__adv').click();


})

})



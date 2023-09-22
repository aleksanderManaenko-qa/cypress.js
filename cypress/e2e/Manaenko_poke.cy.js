describe('Тестирование сайта https://pokemonbattle.me/login/', function () {


    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.me/login/');
         cy.get(':nth-child(1) > .auth__input').type('ВВЕДИТЕ ВАШ ЛОГИН');
         cy.get('#password').type('ВВЕДИТЕ ВАШ ПАРОЛЬ');
         cy.get('.auth__button').click();
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get(':nth-child(6) > .shop__button').click();
         cy.get('.payment__info-button-v2').click();
         cy.get('.payment__info-button-v2').click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('ВВЕДИТЕ НОМЕР КАРТЫ');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('ВВЕДИТЕ СРОК ДЕЙСТВИЯ КАРТЫ В ФОРМАТЕ XX/YY');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('ВВЕДИТЕ CVC');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ВВЕДИТЕ ИМЯ И ФПМИЛИЮ ВЛАДЕЛЬЦА КАРТЫ');
         cy.get('.pay-btn').click();
         cy.get('.payment__submit-button').should('be.disabled');
         cy.get('#cardnumber').type('ВВЕДИТЕ КОД ИЗ СМС');
         cy.get('.payment__submit-button').should('be.enabled');
         cy.get('.payment__submit-button').click();
         cy.get('.success__image').should('be.visible');
         cy.get('.payment__font-for-success').should('have.text', 'Покупка прошла успешно').should('be.visible');
         cy.get('.payment__adv').should('be.visible');
         cy.get('.payment__adv').click();


})

})




describe('Тестирование сайта login.qa.studio', function () {


   it('Верный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');           // перехожу на сайт
        cy.get('#loginButton').should('be.disabled');    // проверка, что кнопка "Войти" неактивна
        cy.get('#mail').type('german@dolnikov.ru');    // в поле логин ввожу верный логин
        cy.get('#pass').type('iLoveqastudio1');     // в поле пароль ввожу верный пароль
        cy.get('#loginButton').should('be.enabled');     // проверяю что кнопка "Войти" стала активна для нажатия
        cy.get('#loginButton').click();   // нажимаю кнопку "Войти"
        cy.get('#messageHeader').should('have.text', 'Авторизация прошла успешно').should('be.visible'); // проверяю, выводится блок с текстом, что авторизация успешна
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю наличие крестика и его видимость
        
   
    })

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');           // перехожу на сайт
        cy.get('#loginButton').should('be.disabled');    // проверка, что кнопка "Войти" неактивна
        cy.get('#forgotEmailButton').click(); // жму "Забыли пароль"
        cy.get('#forgotForm > .header').should('have.text', 'Восстановите пароль'); // проверяю наличие подсказки о дальнейших действиях
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввожу почту
        cy.get('#restoreEmailButton').click(); // жму "Отправить код"
        cy.get('#messageHeader').should('have.text', 'Успешно отправили пароль на e-mail').should('be.visible'); // проверка вывода текста об успешности отправки пароля на почту
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю наличие крестика и его видимость

    })



    it('Верный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');           // перехожу на сайт
        cy.get('#loginButton').should('be.disabled');    // проверка, что кнопка "Войти" неактивна
        cy.get('#mail').type('german@dolnikov.ru');    // в поле логин ввожу верный логин
        cy.get('#pass').type('IlovePoest');     // в поле пароль ввожу неверный пароль
        cy.get('#loginButton').should('be.enabled');     // проверяю что кнопка "Войти" стала активна для нажатия
        cy.get('#loginButton').click();   // нажимаю кнопку "Войти"
        cy.get('#messageHeader').should('have.text', 'Такого логина или пароля нет').should('be.visible'); // проверяю, выводится блок с текстом
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю наличие крестика и его видимость

   
    })


    it('Неправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');           // перехожу на сайт
        cy.get('#loginButton').should('be.disabled');    // проверка, что кнопка "Войти" неактивна
        cy.get('#mail').type('german@petrov.ru');    // в поле логин ввожу неправильный логин
        cy.get('#pass').type('iLoveqastudio1');     // в поле пароль ввожу правильный пароль
        cy.get('#loginButton').should('be.enabled');     // проверяю что кнопка "Войти" стала активна для нажатия
        cy.get('#loginButton').click();   // нажимаю кнопку "Войти"
        cy.get('#messageHeader').should('have.text', 'Такого логина или пароля нет').should('be.visible'); // проверяю, выводится блок с текстом
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю наличие крестика и его видимость

   
    })

    it('Ошибка валидации emaill', function () {
        cy.visit('https://login.qa.studio/');           // перехожу на сайт
        cy.get('#loginButton').should('be.disabled');    // проверка, что кнопка "Войти" неактивна
        cy.get('#mail').type('germandolnikov.ru');    // в поле логин ввожу логин без @
        cy.get('#pass').type('iLoveqastudio1');     // в поле пароль ввожу правильный пароль
        cy.get('#loginButton').should('be.enabled');     // проверяю что кнопка "Войти" стала активна для нажатия
        cy.get('#loginButton').click();   // нажимаю кнопку "Войти"
        cy.get('#messageHeader').should('have.text', 'Нужно исправить проблему валидации').should('be.visible'); // проверяю, выводится блок с текстом
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю наличие крестика и его видимость

   
    })


    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');           // перехожу на сайт
        cy.get('#loginButton').should('be.disabled');    // проверка, что кнопка "Войти" неактивна
        cy.get('#mail').type('GerMan@Dolnikov.ru');    // в поле логин ввожу логин   
        cy.get('#pass').type('iLoveqastudio1');     // в поле пароль ввожу правильный пароль
        cy.get('#loginButton').should('be.enabled');     // проверяю что кнопка "Войти" стала активна для нажатия
        cy.get('#loginButton').click();   // нажимаю кнопку "Войти"
        cy.get('#messageHeader').should('have.text', 'Авторизация прошла успешно').should('be.visible'); // проверяю, выводится блок с текстом, что авторизация успешна
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю наличие крестика и его видимость

   
    })
    
})
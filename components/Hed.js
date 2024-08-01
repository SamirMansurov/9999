export function header(item) {
    const header = document.createElement('header');
    header.classList.add('header');

    const header_box = document.createElement('div');
    header_box.classList.add('header_box');

    const left = document.createElement('nav');
    left.classList.add('left');

    const right = document.createElement('nav');
    right.classList.add('right');

    // Создаем элементы текстов и изображений
    const main_text = document.createElement('a');
    main_text.classList.add('header_text');
    main_text.innerHTML = 'Главная';

    const text_card = document.createElement('a');
    text_card.classList.add('header_text');
    text_card.innerHTML = 'Мои кошельки';

    const transaction = document.createElement('a');
    transaction.classList.add('header_text');
    transaction.innerHTML = 'Мои транзакции';

    const email_text = document.createElement('a');
    email_text.classList.add('header_text');
    email_text.innerHTML = 'alexadams@google.com';

    const header_img = document.createElement('a');
    header_img.classList.add('header_img');

    const img = document.createElement('img');
    img.src = '/exit.svg';


    right.append(email_text, header_img);
    left.append(main_text, text_card, transaction);

    header_img.append(img);

    header_box.append(left, right);
    header.append(header_box); // Вставляем header_box в header

    return header;
}
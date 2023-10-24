"use strict";

console.log(`Требования к функционалу тз
Этап 1: Пользователь не зарегистрирован
Ограниченная карусель в блоке About
Карусель реагирует на нажатие кнопок (кнопки под каруселью и стрелочки слева и справа в мобильной версии) и происходит анимация перелистывания. +15
На экране шириной 1440px проверяем, чтобы было доступно 2 других скрытых картинки. При каждом нажатии выезжает следующая, и так до границ справа и слева. +2
Выделенная кнопка под каруселью (имеется ввиду кнопка соответствующая активному слайду и которая имеет коричневый цвет) - неактивная. +2
Если анимация карусели не успела завершиться, при этом нажата была следующая кнопка, то картинка не должна зависнуть в промежуточном состоянии. +2
На экране шириной 768px проверяем, чтобы было доступно 4 других скрытых картинки. Для этого меняем разрешение и перезагружаем страницу. Теперь доступных перемещений становится 5. +2
Неактивными становятся не только выделенные кнопки, но и стрелочки на границах карусели. +2
Слайдер в блоке Favorites
"Слайдер" реагирует на нажатие кнопок панели навигации и происходит анимация затухания и проявления. +15
На любой ширине экрана все 4 карточки с книгами одновременно будут плавно затухать, а затем плавно проявляться следующие. +2
Анимация может быть прервана следующим нажатием на кнопку выбора поры года, но при этом анимация не должна застывать в промежуточном состоянии. Если анимация не была прервана следующим нажатием кнопки, то она должна отрабатывать до конца. +2
Во время анимаций высота блока Favorites не должна меняться. +2
Панель навигации "слайдера" сделана по технологии "sticky" для разрешений с одним рядом книг (768px и меньше), т.е. опускается вниз вместе со скроллом страницы, прилипая к верхней части экрана, в рамках блока Favorites. +2
До регистрации
Нажатие на кнопку Check the card ни к чему не приведёт.
До авторизации
Иконка юзера в хедере отображается в виде силуэта.
В блоке Favorites все кнопки должны иметь имя Buy, а не Own. +2`);
console.log("Этап 2: Пользователь на этапе регистрации\n"+
"Меню авторизации при нажатии на иконку пользователя\n"+
"Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2\n\n"+
"На разрешении 768px, при открытом бургер-меню, оно закрывается и открывается меню авторизации. +2\n\n"+
"То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна при открытом меню авторизации. +2\n\n"+
"Нажатие на любую область или элемент вне меню приводят к закрытию меню авторизации. +2\n\n"+
"Модальное окно REGISTER\n"+
"Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).\n\n"+
"При нажатии на кнопку Register в открытом меню авторизации появляется модальное окно REGISTER, где есть поля First name, Last name, E-mail и Password. +2\n\n"+
"При нажатии кнопки Sign Up в блоке Digital Library Cards также появляется модальное окно REGISTER. +2\n\n"+
"Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2\n\n"+
"При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2\n\n"+
"В данном случае, ограничения по полям - все поля должны быть не пустыми. +2\n\n"+
"Пароль должен быть не короче 8 символов. +2\n\n"+
"В поле E-mail должна быть валидация типа email. +2\n\n"+
"Окончание регистрации\n"+
"Данные сохраняются в хранилище localStorage, в том числе и пароль, хотя в реальной жизни так делать нельзя. +2\n\n"+
"Иконка пользователя меняется на заглавные буквы имени. +2\n\n"+
"Отображение страницы приходит в состояние после авторизации (этап 4). +2\n\n"+
"Будет сгенерирован девятизначный Card Number случайным образом в формате 16-ричного числа. +2\n\n"+
"При наличии регистрации, но будучи не авторизованным\n"+
"Блок Digital Library Cards. Если введённые имя и номер карты совпадают с данными пользователя, то отображается панель с информацией, вместо кнопки Check the card на 10 секунд. +2\n\n"+
"Там же после отображения информации, кнопка возвращается в прежнее состояние, а поля в форме сбрасываются. +2");
console.log("Этап 3: Пользователь на этапе входа в учётную запись после регистрации.\n"+
"Модальное окно LOGIN\n"+
"Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).\n\n"+
"При нажатии на кнопку Log In появляется модальное окно LOGIN, где есть поля E-mail or readers card и Password. +2\n\n"+
"При нажатии кнопки Log In в блоке Digital Library Cards также появляется модальное окно LOGIN. +2\n\n"+
"Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2\n\n"+
"При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2\n\n"+
"Для авторизации все поля должны быть не пустыми. +2\n\n"+
"Пароль должен быть не короче 8 символов. +2\n\n"+
"Блок Favorites\n"+
"Если пользователь ещё не вошёл в учётную запись, то при нажатии на любую кнопку Buy открывается модальное окно LOGIN. +2");
console.log("Этап 4: Пользователь после входа в учётную запись\n"+
"Меню профиля при нажатии на иконку с инициалами пользователя\n"+
"При наведении курсором на иконку пользователя должно отображаться полное имя пользователя (атрибут title). +2\n\n"+
"Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2\n\n"+
"На разрешении 768px при открытом бургер-меню, оно закрывается и открывается меню авторизации. +2\n\n"+
"То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна. +2\n\n"+
"Нажатие на любую область или элемент вне меню приводят к закрытию меню профиля. +2\n\n"+
"Вместо надписи Profile отображается девятизначный Card Number. Для Card Number можно использовать меньший шрифт чтобы надпись вметилась в контейнер, +2\n\n"+
"Нажатие на кнопку My Profile открывает модальное окно MY PROFILE. +2\n\n"+
"Нажатие на кнопку Log Out приводит к выходу пользователю из состояния авторизации, возвращаемся к этапу #1. +2\n\n"+
"Модальное окно MY PROFILE\n"+
"Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).\n\n"+
"В случае если имя и фамилия слишком длинные и не влазят в блок то должен произойти перенос фамилии на следующую строку.\n\n"+
"Счетчик для Visits отображает, сколько раз пользователь проходил процесс авторизации, включая самый первый - регистрацию. +2\n\n"+
"Счетчик для Books отображает, сколько у пользователя книг находятся в состоянии Own. Значение варьируется 0-16. +2\n\n"+
"Рядом с Card Number есть кнопка, нажатие на которую копирует код карты клиента в буфер обмена. +2\n\n"+
"Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2\n\n"+
"При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается. +2\n\n"+
"Блок Favorites\n"+
"При нажатии на любую кнопку Buy, еще до покупки абонемента, открывается модальное окно BUY A LIBRARY CARD. +2\n\n"+
"При нажатии на любую кнопку Buy, после покупки абонемента, меняет вид кнопки на неактивную Own, добавляя единицу к счетчику книг в профиле. +2\n\n"+
"Кроме того после нажатия обновляется не только счетчик, но и название книги должно отобразится в разделе Rented Books. Название формируется по принципу <название книги>, <автор книги>. В случае если название книги слишком длинное или список стал слишком большой список книг в блоке Rented Books становится скроллируемым (по необходимости горизонтально/ вертикально или оба скролла сразу) Тайтл Rented Books скроллироваться не должен +2\n\n"+
"Модальное окно BUY A LIBRARY CARD\n"+
"Модальное окно нужно сделать шириной 640px. Будет это обрезка по 5px по бокам, или просто уменьшение длины с сохранением сетки - значения не имеет, хотя при правильной сеточной структуре, сделать это будет намного проще. +2\n\n"+
"Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).\n\n"+
"При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2\n\n"+
"Для того, чтобы кнопка Buy была активна, все поля должны быть не пустыми. +2\n\n"+
"Bank card number должен содержать 16 цифр. С пробелами каждые 4 символа или нет - значения не имеет. +2\n\n"+
"Expiration code содержит 2 поля с ограничением в 2 цифры. +2\n\n"+
"CVC должен содержать 3 цифры. +2\n\n"+
"После удачного нажатия на кнопку Buy, окно закрывается, и больше мы к нему не возвращаемся.\n\n"+
"Блок Digital Library Cards\n"+
"При наличии авторизации вместо кнопки Check the Card будут отображаться данные пользователя и бейджи, как на дизайне LibraryCard after login in account. +2");
console.log('Итого: 200');


// ___________________________________ Burger menu _________________________________

const burger = document?.getElementById('burger-button');
const menu = document?.querySelector('.navigate-list');
const menuLinks = document.querySelectorAll('.navigate-list a');


burger.addEventListener('click', () => {
  burger?.classList.toggle('bur-button--active');
  menu?.classList.toggle('navigate-list--visible');
});

// Закрываем меню при клике вне его области
document.addEventListener("click", function(event) {
  if (!menu.contains(event.target) && event.target !== burger) {
    menu?.classList.replace('navigate-list--visible', 'navigate-list');
    burger?.classList.replace('bur-button--active', 'bur-button')
  }
});
// Закрываем меню при клике на ссылки
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('navigate-list--visible');
    burger.classList.remove('bur-button--active');
  });
});


//---------------------------- Слайдер ABOUT -----------------------------------

let position = 0;
const container = document.querySelector('.about-items');
const track = document.querySelector('.slider-track');
const item = document.querySelector('.slider-item');

const btnPrev = document.getElementById('btn_prev');
const btnNext = document.getElementById('btn_next');

const circkles = document.querySelectorAll('.about-pagination-circle')
const circ1 = document.getElementById('circle1');
const circ2 = document.getElementById('circle2');
const circ3 = document.getElementById('circle3');
const circ4 = document.getElementById('circle4');
const circ5 = document.getElementById('circle5');

// кнопка вперед

btnNext.addEventListener('click', function(){
 position = position + 480;
 if (position > 1920) {
  position = 1920;
 }
 track.style.left = -position + 'px';
 checkBtn(); 
 colorChanger(); 

});

// кнопка назад

btnPrev.addEventListener('click', function(){
  position = position - 480;
  if (position < 0) {
   position = 0;
  }
  track.style.left = -position + 'px';
  checkBtn();
  colorChanger(); 
});

const checkBtn = () => {
  const carretLeft = document.querySelector('.carret-left');
  const carretRight = document.querySelector('.carret-right');
  switch (position) {
    case 0:
      carretLeft.classList.add('disabled');
      break;
    case 1920:
      carretRight.classList.add('disabled');
      break;
    default:
      carretRight.classList.remove('disabled');
      carretLeft.classList.remove('disabled');
      break;
  }
};


// меняем изображения по переключению с нижних кнопок 
  circkles.forEach((circkle, index) => {
    circkle.addEventListener('click', () => {
      position = index * 480; // Пересчитываем позицию в зависимости от индекса кружка
      track.style.left = -position + 'px';
      checkBtn();
      colorChanger();
    });
  });


// меняем цвет кнопок 
let colorChanger = () => {
  const circles = [circ1, circ2, circ3, circ4, circ5];
  for (let i = 0; i < circles.length; i++) {
    if (position === i * 480) {
      circles[i].style.backgroundColor = 'rgba(187, 148, 95, 1)';
      circles[i].classList.add('disabled');
    } else {
      circles[i].style.backgroundColor = 'rgba(12, 12, 14, 1)';
      circles[i].classList.remove('disabled');
    }
  }
};

// при загрузке страницы обнуление
colorChanger();
checkBtn(); 

// ------------------------Секция FAVORITES --------------------------


document.addEventListener('DOMContentLoaded', async function() {
  const booksContainer = document.querySelector('.books-container');
  const radioButtons = document.querySelectorAll('input[name="options"]');
  const books = booksContainer.querySelectorAll('.book');

  // Функция для анимации блока с книгами
  let animationOfBookContainer = () => {
    booksContainer.classList.add('invisible');
    setTimeout(() => {
      booksContainer.classList.remove('invisible');
    }, 1000);
  };

  // Асинхронная функция для задержки
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Итерация по радиокнопкам
  for (const radioButton of radioButtons) {
    radioButton.addEventListener('change', async function() {
      const selectedValue = parseInt(this.value);

      await animationOfBookContainer(); // Ждем выполнения анимации

      // Задержка в 2 секунды
      await delay(1000);

      // Продолжаем выполнение кода

      books.forEach(function(book, index) {
        if (index >= selectedValue && index < selectedValue + 4) {
          book.style.display = 'block';
        } else {
          book.style.display = 'none';
        }
      });
    });
  }
});


document.addEventListener('DOMContentLoaded', async function() {
  const radioButtons = document.querySelectorAll('input[name="options"]');
  const totalRadioButtons = radioButtons.length;
  let autoCycleInterval; // Переменная для хранения идентификатора интервала

  // Функция для автоматического переключения радиокнопок
  let currentIndex = 0;
  function autoCycleRadioButtons() {
    const changeEvent = new Event('change', { bubbles: true });
    radioButtons[currentIndex].dispatchEvent(changeEvent);
    currentIndex = (currentIndex + 1) % totalRadioButtons;
  }

  // Запускаем автоматическое переключение радиокнопок
  autoCycleInterval = setInterval(autoCycleRadioButtons, 4000); // Интервал 4 секунды

  // Добавляем обработчик события "change" для радиокнопок
  for (const radioButton of radioButtons) {
    radioButton.addEventListener('change', function() {
      if (this.checked) {
        clearInterval(autoCycleInterval); // Останавливаем автоматическое переключение
      }
    });
  }
});



// ИНИЦИАЛИЗАЦИЯ ______________________________
document.addEventListener('DOMContentLoaded', inicializePage);

function inicializePage () {
  clickOnIconBeforeLogIn ();
};

// Малые окна log in -------------------------------------------------------

// привязка окна log in к иконке пользователя

const profileIcon = document.getElementById('profile_icon');
const profile = document.getElementById('not-autorized');
const profileLogged = document.getElementById('autorized')
const modalProfileUserInfo = document.getElementById('modal_profile_information')
const dropMenu = document.querySelector('.drop-menu');

const positioningDiv = document.getElementById('positioning');

document.addEventListener('DOMContentLoaded', function() {
  function updateProfilePosition() {
      const iconRect = positioningDiv.getBoundingClientRect();
      profile.style.left = (iconRect.left + window.scrollX - 12) + 'px';
      profile.style.top = (iconRect.bottom + window.scrollY + 25) + 'px';
      profileLogged.style.left = (iconRect.left + window.scrollX - 12) + 'px';
      profileLogged.style.top = (iconRect.bottom + window.scrollY + 25) + 'px';
  }
  updateProfilePosition();
  window.addEventListener('resize', updateProfilePosition);
}, { passive: true });

// ативация модального окна log in при нажатии на иконку

function clickOnIconBeforeLogIn () {
    const profileIcon = document.getElementById('profile_icon');
    const dropMenu = document.querySelector('.drop-menu');

    profileIcon.addEventListener('click', function() {
    dropMenu.classList.add('open');
  });
}

function clickOnIconAfterLogIn () {
  const dropMenu = document.querySelector('.drop-menu');
  const profileNotAutorized = document.getElementById('not-autorized')
  const profileAutorized = document.getElementById('autorized')

  dropMenu.classList.add('open');
  profileNotAutorized.style.display = 'none';
  profileAutorized.style.display = 'block';
}



// Кнопка ESC для всех !!!!!!
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    dropMenu.classList.remove('open');
    modalLoginContainer.classList.remove('open');
    modalRegisterContainer.classList.remove('open');
    modalProfileInfoWindow.classList.remove('open');
    bueCardModal.classList.remove('open');
  }
})

// Закрывание модального окна при клике вне его

const profileElements = document.querySelectorAll('.profile');
const dropMenuElements = document.querySelectorAll('.drop-menu');

profileElements.forEach(profileElement => {
  profileElement.addEventListener('click', event => {
    event.isClickInsideModal = true;
  });
});

dropMenuElements.forEach(dropMenuElement => {
  dropMenuElement.addEventListener('click', event => {
    if (event.isClickInsideModal) {
      return;
    } else {
      dropMenu.classList.remove('open');
    }
  });
});


// модальное окно log in большое ----------------------------------------


const profileUpperTextField = document.getElementById('profileTextLog');
const modalLoginContainer = document.querySelector('.modal-login');
const modalLoginSubContainer = document.getElementById('modalLoginContainer')
const closeCrossButton2 = document.getElementById('myProfileClose2');
const logInButtonFromLibrCard = document.getElementById('log_in_button');
const buyButtonBtn = document.querySelectorAll('.book .buy-button');

// открываем при нажатии на log in в малом окне
profileUpperTextField.addEventListener('click', () => {
  modalLoginContainer.classList.add('open');
  dropMenu.classList.remove('open');
});

// открываем кнопками из library Card Section
logInButtonFromLibrCard.addEventListener('click', () => {
  modalLoginContainer.classList.add('open');
})

// закрытие крестом
closeCrossButton2.addEventListener('click', () => {
 modalLoginContainer.classList.remove('open');
});

// закрытие при нажатии вне поля модала
modalLoginSubContainer.addEventListener('click', event => {
  event.isClickInsideModal = true;
});
modalLoginContainer.addEventListener('click', event => {
  if (event.isClickInsideModal) {
    return;
  }
  else {
    modalLoginContainer.classList.remove('open');
  }
})

// модальное окно Register in большое ----------------------------------------


const profileLowerTextField = document.getElementById('profileTextRegister');
const modalRegisterContainer = document.querySelector('.modal-register');
const modalRegisterSubContainer = document.getElementById('modalRegisterContainer')
const closeCrossButton3 = document.getElementById('myProfileClose3');
const signUpButtonFromLibrCard = document.getElementById('sign_up_button');
// открываем при нажатии на log in в малом окне
profileLowerTextField.addEventListener('click', () => {
  modalRegisterContainer.classList.add('open');
  dropMenu.classList.remove('open');
});
// открываем кнопками из library Card Section
signUpButtonFromLibrCard.addEventListener('click', () => {
  modalRegisterContainer.classList.add('open');
})
// закрытие крестом
closeCrossButton3.addEventListener('click', () => {
  modalRegisterContainer.classList.remove('open');
});
// закрытие при нажатии вне поля модала
modalRegisterSubContainer.addEventListener('click', event => {
  event.isClickInsideModal = true;
});
modalRegisterContainer.addEventListener('click', event => {
  if (event.isClickInsideModal) {
    return;
  }
  else {
    modalRegisterContainer.classList.remove('open');
  }
})

// Логика переключения при нажатии Log || Register внутри модального окна 

const modalQuesstionLogin = document.getElementById('modal_Quession_Login');
const modalQuesstionRegister = document.getElementById('modal_Quession_Register')

modalQuesstionLogin.addEventListener('click', () => {
  modalRegisterContainer.classList.remove('open');
  modalLoginContainer.classList.add('open')
});

modalQuesstionRegister.addEventListener('click', () => {
  modalLoginContainer.classList.remove('open')
  modalRegisterContainer.classList.add('open');
});

// custom Alert modal-----------------------------------------------
const customModal = document.getElementById('customModal');
const modalMessage = document.getElementById('modalMessage');
const closeModal = document.getElementById('closeModal');

function openCustomModal(message) {
  modalMessage.textContent = message;
  customModal.style.display = 'flex';
}
closeModal.addEventListener('click', () => {
  customModal.style.display = 'none';
});

// custom TempMessageModal -------------------------------------------
const customModalTemp = document.getElementById('customModalTemp');
const modalMessageTemp = document.getElementById('modalMessageTemp');

function openCustomModalTemp(message) {
  modalMessageTemp.textContent = message;
  customModalTemp.style.display = 'flex';
  // Закрыть модальное окно через 3 секунды
  setTimeout(() => {
    customModalTemp.style.display = 'none';
  }, 500); 
}

// Генератор случайных чисел при (формирует данные карты Card Number)
 
function generateRandomNumber(firstLeterForCardNumber) {
  const randomNumber = Math.floor(Math.random() * 100000000); 
  const formattedNumber = randomNumber.toString().padStart(8, '0'); 
  return `${firstLeterForCardNumber}${formattedNumber}`;
}

// РЕГИСТРАЦИЯ
// Собираем данные из формы register (всех ее input) -------------------------------

const registerFirstNameInput = document.getElementById('register_name');
const registerLastNameInput = document.getElementById('register_lastname');
const registerEmailInput = document.getElementById('register_email');
const registerPassInput = document.getElementById('register_password');
const registerSignButton = document.getElementById('register_sign_btn');


registerSignButton.addEventListener('click', () => {
  const usersDataKey = 'Users-Data'; 
  const existingData = JSON.parse(localStorage.getItem(usersDataKey)) || [];

const registerFirstNameContent = registerFirstNameInput.value;
const firstLeterForCardNumber = registerFirstNameContent[0].toUpperCase();
const registerLastNameContent = registerLastNameInput.value;
const registerEmailContent = registerEmailInput.value;
const registerPassContent = registerPassInput.value;
const randomFormattedNumber = generateRandomNumber(firstLeterForCardNumber);
  const userData = {
    firstName: registerFirstNameContent,
    lastName: registerLastNameContent,
    email: registerEmailContent,
    password: registerPassContent,
    isRegistred: 'true',
    isLoggedIn: 'false',
    visitCounter: 1,
    bookCounter: 0,
    cardNumber: randomFormattedNumber,
    rentedBookName: [],
    rentedBookNameID: [],
    bankCardNumber: '',
    monthOfExpiration: '',
    yearOfExpiration: '',
    cvcCardCode: '',
    cardHolder: '',
    postalCode: '',
    city: '',
    isLabraryCardActive : 'false',
    libraryCardNumber: randomFormattedNumber,
    }
  existingData.push(userData);
    //save
  const userDataJSON = JSON.stringify(existingData);
  localStorage.setItem(usersDataKey, userDataJSON);

  registerFirstNameInput.value = '';
  registerLastNameInput.value = '';
  registerEmailInput.value = '';
  registerPassInput.value = '';
  modalRegisterContainer.classList.remove('open');
  openCustomModal('Registratin was sucscessfull');

  //get from local storage для одновременного логина при первой регистрации 
  const updatedExistingData = JSON.parse(localStorage.getItem(usersDataKey)) || [];
  const currentIndex = updatedExistingData.length - 1;
  updatedExistingData[currentIndex].isLoggedIn = 'true';
  userIconPersonilize(currentIndex);
  // save
  const updatedDataString = JSON.stringify(updatedExistingData);
  localStorage.setItem('Users-Data', updatedDataString);
  
    RightPartOfLibrCardLogged();
    onloadCheckLogIn();
    DisplayVisitInfo();
})

//LOG IN -------------------------------------------------------------------

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);  // для преобразования в загдавные 
}

function userIconPersonilize(indexOfUser) {
  const localStorString = localStorage.getItem('Users-Data');
  const ArrOfRegistredDataObj = JSON.parse(localStorString);
  
  if (ArrOfRegistredDataObj.length > 0) {
    const userFirstLetter = ArrOfRegistredDataObj[indexOfUser].firstName[0];
    const userSecondLetter = ArrOfRegistredDataObj[indexOfUser].lastName[0];
    const userNameforTitle = capitalize(ArrOfRegistredDataObj[indexOfUser].firstName);
    const userLastNameforTitle = capitalize(ArrOfRegistredDataObj[indexOfUser].lastName);
    const textContentForTitle = `${userNameforTitle} ${userLastNameforTitle}`;
    const textContentForiconID = (userFirstLetter + userSecondLetter).toUpperCase();
    const userIconContainer = document.getElementById('profile_icon_personalized');
    // profile adn libr card const
    const profCardClientIdIcon = document.getElementById('client-init');
    const profCardClientName = document.getElementById('client-name');
    const profCardLibraryCardNumber = document.getElementById('visitor_card_number');
    const profCardVisitsCounter = document.getElementById('mp_visits_counter');
    const profCardBooksCounter = document.getElementById('mp_book_counter');
    const librCardVisitsCounter = document.getElementById('lk_visits counter');
    const librCardBooksCounter = document.getElementById('lk_books_counter');
    const generatedNumberOfCardForClient = ArrOfRegistredDataObj[indexOfUser].cardNumber;
    //drop menu content (change title)
    const loginIconTitle = document.getElementById('autorized_profile_field');
    loginIconTitle.innerHTML = generatedNumberOfCardForClient;
    // icon
    userIconContainer.innerHTML = textContentForiconID; 
    userIconContainer.title = textContentForTitle;
    userIconContainer.style.display = 'flex';
    profileIcon.style.display = 'none';
    // profile card
    profCardClientIdIcon.innerHTML = textContentForiconID;
    profCardClientName.innerHTML = textContentForTitle;
    profCardLibraryCardNumber.innerHTML = generatedNumberOfCardForClient;
    profCardVisitsCounter.innerHTML = ArrOfRegistredDataObj[indexOfUser].visitCounter;
    profCardBooksCounter.innerHTML = ArrOfRegistredDataObj[indexOfUser].bookCounter;
    changeListOfBooksInsideProfileModal();
    //library card
    librCardVisitsCounter.innerHTML = ArrOfRegistredDataObj[indexOfUser].visitCounter;
    librCardBooksCounter.innerHTML = ArrOfRegistredDataObj[indexOfUser].bookCounter;
    // copy Icon
    const copyIconButton = document.getElementById('copyIcon');
    copyIconButton.addEventListener('click', () => {
      const textToCopy = generatedNumberOfCardForClient;
      const tempInput = document.createElement('input');
      tempInput.value = textToCopy;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      openCustomModalTemp('Copied to clipboard');
    })
  }
}


const loginButton = document.getElementById('login_btn');
loginButton.addEventListener('click', CheckLoginInformation);

function CheckLoginInformation() {
  const loginEmailInput = document.getElementById('login_email');
  const loginPassInput = document.getElementById('login_password');
  const loginEmailContent = loginEmailInput.value;
  const loginPassContent = loginPassInput.value;
 
  const localStorString = localStorage.getItem('Users-Data');
  const ArrOfRegistredDataObj = JSON.parse(localStorString) || [];
  
  const indexOfUser = ArrOfRegistredDataObj.findIndex(user => 
    (user.email === loginEmailContent || user.cardNumber === loginEmailContent) && user.password === loginPassContent 
  );

  if (indexOfUser !== -1) {
    ArrOfRegistredDataObj[indexOfUser].visitCounter += 1; // увеличиваем счетчик посещений на 1
    userIconPersonilize(indexOfUser); // текст в иконке + информация профиля в соответствии с индексом User функция выше
    modalLoginContainer.classList.remove('open');
    ArrOfRegistredDataObj[indexOfUser].isLoggedIn = 'true';// меняем статус пользователя isLoggedIn в базе c false na true
    // save
    const updatedDataString = JSON.stringify(ArrOfRegistredDataObj);
    localStorage.setItem('Users-Data', updatedDataString);
  
  } else {
    modalLoginContainer.classList.remove('open');
    openCustomModal('User is not registered - please try to register');
  }
  // чистим input
  loginEmailInput.value = '';
  loginPassInput.value = '';

  onloadCheckLogIn();
  // DisplayVisitInfo();
  RightPartOfLibrCardLogged()
};

// AFTER Log In - modal profile info ------------------------------[


// клик по именной иконке
const userIconContainer = document.getElementById('profile_icon_personalized');
userIconContainer.addEventListener('click', () => {
  clickOnIconAfterLogIn();
})

// Profile Info Modal позиция и вкл выкл (наполнение в log in)

const myProfileInfoLink = document.getElementById('my_profile');
const modalProfileInfoWindow = document.querySelector('.modal-profile');
const closeCrossButton1 = document.getElementById('myProfileClose1');
const LibrCardProfileButton = document.getElementById('button_of_autorized_libr');


myProfileInfoLink.addEventListener('click', openCloseProfileInfoModal);
LibrCardProfileButton.addEventListener('click', openCloseProfileInfoModal);

function openCloseProfileInfoModal() {
  const modalProfileInfoWindow = document.querySelector('.modal-profile')
  modalProfileInfoWindow.classList.add('open');
  dropMenu.classList.remove('open');
  // закрытие крестом
closeCrossButton1.addEventListener('click', () => {
modalProfileInfoWindow.classList.remove('open');
});
// закрытие при нажатии вне поля модала
modalProfileUserInfo.addEventListener('click', event => {
  event.isClickInsideModal = 'true';
});
modalProfileInfoWindow.addEventListener('click', event => {
  if (event.isClickInsideModal) {
    return;
  }
  else {
    modalProfileInfoWindow.classList.remove('open');
  }
})
}

// проверка на статус LOGGED IN or LOGGED OUT при перезагрузке и не только (формирует интерфейс страницы при перезагрузке в зависимости от юзера что имеет статус логгед ин)
let loggedUserDataIndex;
let isUserLogged;
function onloadCheckLogIn() {
  const localStorString = localStorage.getItem('Users-Data');
  const ArrOfRegistredDataObj = JSON.parse(localStorString) || [];
  for (let i=0; i < ArrOfRegistredDataObj.length; i++ ) {
    if (ArrOfRegistredDataObj[i].isLoggedIn === 'true') {
      loggedUserDataIndex = i;
      isUserLogged = 'true';
      userIconPersonilize(i);
      buyButtonMadeOwnPersonilize();
      DisplayVisitInfo();
      RightPartOfLibrCardLogged()
      break;
    }
    else {
      isUserLogged = 'false';
      loggedUserDataIndex = undefined;
      HideVisitInfo();
      RightPartOfLibrCardUnlogged()
    }
  }
}
onloadCheckLogIn();


// Кнопка Logged out 
const profileNotAutorized = document.getElementById('not-autorized')
const profileAutorized = document.getElementById('autorized')
const loggedOutLink = document.getElementById('log_out');
loggedOutLink.addEventListener('click', loggedOut);

function loggedOut() {
  const localStorString = localStorage.getItem('Users-Data');
  const ArrOfRegistredDataObj = JSON.parse(localStorString) || [];
  for (let i=0; i < ArrOfRegistredDataObj.length; i++ ) {
    if (ArrOfRegistredDataObj[i].isLoggedIn === 'true') {
    ArrOfRegistredDataObj[i].isLoggedIn = 'false';
    const updatedDataString = JSON.stringify(ArrOfRegistredDataObj);
    localStorage.setItem('Users-Data', updatedDataString);
    userIconContainer.style.display = 'none';
    profileIcon.style.display = 'flex';
    dropMenu.classList.remove('open');
    profileNotAutorized.style.display = 'block';
    profileAutorized.style.display = 'none';
    buyButtonReset();
    deleteChangeListOfBooksInsideProfileModal();
    // disablelibraryCardCheckBtn();
    HideVisitInfo();
    RightPartOfLibrCardUnlogged()
    }
  }

  onloadCheckLogIn();
}

// MODAL Bye a library card логика появления и скрытия 

const bueCardModal = document.querySelector('.buy-a-card');
const closeCrossButton4 = document.getElementById('myProfileClose4');
const bueCardModalContainer = document.querySelector('.buy-a-card-container');
// закрытие крестом
closeCrossButton4.addEventListener('click', () => {
bueCardModal.classList.remove('open');
})
// закрытие при нажатии вне поля модала
bueCardModalContainer.addEventListener('click', event => {
  event.isClickInsideModal = 'true';
});
bueCardModal.addEventListener('click', event => {
  if (event.isClickInsideModal) {
    return;
  }
  else {
    bueCardModal.classList.remove('open');
  }
});


// проверка на наличие купленной Library Card
function isLibraryCard() {
  const localStorString = localStorage.getItem('Users-Data');
  const ArrOfRegistredDataObj = JSON.parse(localStorString) || [];
    if (ArrOfRegistredDataObj[loggedUserDataIndex].isLabraryCardActive === 'true') {
      return 'true';
    }
    else {
      return 'false';
    }
  };

   // закрыть modal Bye A Libr Card после покупки
   function closeModalBueALibraryCardMessage() {
    bueCardModal.classList.remove('open');
    openCustomModal('Thank you! The library card has been purchased - now you can buy books.')
   }

// открываем при нажатинн на buy-button по условию через проверку onloadCheck
let clickOnBooksBuybuttId;
  const booksContainer = document.querySelector('.books-container');
  booksContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('buy-button')) {
      if (isUserLogged === 'false' || isUserLogged === undefined) {
        modalLoginContainer.classList.add('open');
      } else {
        const haslibraryCard = isLibraryCard();
        if (isUserLogged === 'true' && haslibraryCard === 'true') {
          clickOnBooksBuybuttId = event.target.id;
          addBookToUserCreeds();
          buyButtonMadeOwn();
          deleteChangeListOfBooksInsideProfileModal();
          changeListOfBooksInsideProfileModal();
          updateBookCounter();
        } else {
          bueCardModal.classList.add('open');
        }
      }
    }
  });  

// собираем данные input of library card
function saveBueCardInputdataToUserCreeds() {
  const CardNumber = document.getElementById('bank_card_number');
  const monthOfExp = document.getElementById('month');
  const yearOfExp = document.getElementById('year');
  const cvcCode = document.getElementById('cvc');
  const cardHolderName = document.getElementById('cardholder_name');
  const postalCode = document.getElementById('postal_code');
  const cityTown = document.getElementById('city');

  const CardNumberValue = CardNumber.value;
  const monthOfExpValue = monthOfExp.value;
  const yearOfExpValue = yearOfExp.value;
  const cvcCodeValue = cvcCode.value;
  const cardHolderNameValue = cardHolderName.value;
  const postalCodeValue = postalCode.value;
  const cityTownValue = cityTown.value;
  // read 
  const localStorString = localStorage.getItem('Users-Data');
  const ArrOfRegistredDataObj = JSON.parse(localStorString) || [];
  onloadCheckLogIn();
  //change
  ArrOfRegistredDataObj[loggedUserDataIndex].bankCardNumber = CardNumberValue;
  ArrOfRegistredDataObj[loggedUserDataIndex].monthOfExpiration = monthOfExpValue; 
  ArrOfRegistredDataObj[loggedUserDataIndex].yearOfExpiration = yearOfExpValue;
  ArrOfRegistredDataObj[loggedUserDataIndex].cvcCardCode = cvcCodeValue;
  ArrOfRegistredDataObj[loggedUserDataIndex].cardHolder = cardHolderNameValue;
  ArrOfRegistredDataObj[loggedUserDataIndex].postalCode = postalCodeValue;
  ArrOfRegistredDataObj[loggedUserDataIndex].city = cityTownValue;
  ArrOfRegistredDataObj[loggedUserDataIndex].isLabraryCardActive = 'true'
  //save 
  const updatedDataString = JSON.stringify(ArrOfRegistredDataObj);
  localStorage.setItem('Users-Data', updatedDataString);
  // clean inputs
  CardNumber.value = '';
  monthOfExp.value = '';
  yearOfExp.value = '';
  cvcCode.value = '';
  cardHolderName.value = '';
  postalCode.value = '';
  cityTown.value = '';
};

// нажатие на кнопку покупки карты
const libraryCardBueBotton = document.getElementById('library_card_bue_botton');
libraryCardBueBotton.addEventListener('click', () => {
  saveBueCardInputdataToUserCreeds();
  closeModalBueALibraryCardMessage();
  onloadCheckLogIn();
});


// Покупка книги ------------------------------------------------------
function addBookToUserCreeds() {
const buyButton = document.getElementById(clickOnBooksBuybuttId);
const bookParentContainer = buyButton.parentElement;
const bookNameElement = bookParentContainer.querySelector('.book-name');
const bookAutorElement = bookParentContainer.querySelector('.autor-name');
const bookName = bookNameElement.textContent;
const bookAutor = bookAutorElement.textContent.slice(2);
const resultBookItem = `${bookName},${bookAutor}`;
// read 
const localStorString = localStorage.getItem('Users-Data');
const ArrOfRegistredDataObj = JSON.parse(localStorString) || [];

if (!ArrOfRegistredDataObj[loggedUserDataIndex].rentedBookName) {
  ArrOfRegistredDataObj[loggedUserDataIndex].rentedBookName = [];
}
else if (!ArrOfRegistredDataObj[loggedUserDataIndex].rentedBookNameID) {
  ArrOfRegistredDataObj[loggedUserDataIndex].rentedBookNameID = [];
}
// insert
ArrOfRegistredDataObj[loggedUserDataIndex].rentedBookName.push(resultBookItem);
ArrOfRegistredDataObj[loggedUserDataIndex].rentedBookNameID.push(clickOnBooksBuybuttId);
// save 
const updatedDataString = JSON.stringify(ArrOfRegistredDataObj);
localStorage.setItem('Users-Data', updatedDataString);

}

function updateBookCounter() {
  // read 
const localStorString = localStorage.getItem('Users-Data');
const ArrOfRegistredDataObj = JSON.parse(localStorString) || [];
// set up
ArrOfRegistredDataObj[loggedUserDataIndex].bookCounter += 1;
// save 
const updatedDataString = JSON.stringify(ArrOfRegistredDataObj);
localStorage.setItem('Users-Data', updatedDataString);
// меняем в html
const librCardBooksCounter = document.getElementById('lk_books_counter');
const profCardBooksCounter = document.getElementById('mp_book_counter');
librCardBooksCounter.innerHTML = ArrOfRegistredDataObj[loggedUserDataIndex].bookCounter;
profCardBooksCounter.innerHTML = ArrOfRegistredDataObj[loggedUserDataIndex].bookCounter;
}

// Выключение конкретной кнопки при покупке книги
function buyButtonMadeOwn() {
  const ownedButton = document.getElementById(clickOnBooksBuybuttId);
  ownedButton.disabled = true;
  ownedButton.innerHTML = 'Own';
};

// Сброс кнопок к стандартному состоянию
function buyButtonReset() {
const buyButtons = document.querySelectorAll('.cloumn1 .buy-button');
buyButtons.forEach(button => {
  button.removeAttribute('disabled');
  button.innerHTML = 'Bue';
});
}

// Персонализация кнопок при Log in при перезагрузке 
function buyButtonMadeOwnPersonilize() {
  //read
  const localStorString = localStorage.getItem('Users-Data');
  const ArrOfRegistredDataObj = JSON.parse(localStorString) || [];
  
  const ArrOfButtonId = ArrOfRegistredDataObj[loggedUserDataIndex].rentedBookNameID;
  for (let i = 0; i < ArrOfButtonId.length; i++) {
    const buttonToCange = document.getElementById(ArrOfButtonId[i]);
    buttonToCange.disabled = true;
    buttonToCange.innerHTML = 'Own';
  }
}

// создание списка из книг (функция запускается выше) 
function changeListOfBooksInsideProfileModal() {
  const booksListContainer = document.querySelector('.rented-books-list');
  // read 
  const localStorString = localStorage.getItem('Users-Data');
  const ArrOfRegistredDataObj = JSON.parse(localStorString) || [];
  // Проверяем, существует ли ArrOfBooksNames
  if (ArrOfRegistredDataObj[loggedUserDataIndex] && ArrOfRegistredDataObj[loggedUserDataIndex].rentedBookName) {
    const ArrOfBooksNames = ArrOfRegistredDataObj[loggedUserDataIndex].rentedBookName;

    for (let i = 0; i < ArrOfBooksNames.length; i++) {
      const bookName = ArrOfBooksNames[i];
      const liElement = document.createElement('li');
      liElement.textContent = bookName;
      booksListContainer.appendChild(liElement);
    }
  }
}

// очистка HTML списка книг
function deleteChangeListOfBooksInsideProfileModal() {
  const booksListContainer = document.querySelector('.rented-books-list');
  while (booksListContainer.firstChild) {
    booksListContainer.removeChild(booksListContainer.firstChild);
  }
}


// LIBRARY CARD _____________________________________________________________________________

// отключение кнопки Check The Card в Library Card Section
function disablelibraryCardCheckBtn () {
  const libraryCardCheckBtn = document.querySelector('.check-button');
libraryCardCheckBtn.disabled = true;
}

// включение кнопки Check The Card в Library Card Section
function enablelibraryCardCheckBtn () {
  const libraryCardCheckBtn = document.querySelector('.check-button');
libraryCardCheckBtn.disabled = false;
}

// включение инфо на 10 секунд при нажатии на кнопку Check The Card в Library Card Section
function TimedDisplayVisitInfo() {
  const librCardNameInput = document.getElementById('lk_name_input');
  const librCardCardNumberInput = document.getElementById('lk_card_input');
  const libraryCardCheckBtn = document.querySelector('.check-button');
  const visitInfoBlock = document.getElementById('visitsInfoCard');
  const librCardVisitsCounter = document.getElementById('lk_visits counter');
  const librCardBooksCounter = document.getElementById('lk_books_counter');
  // read 
  const localStorString = localStorage.getItem('Users-Data');
  const ArrOfRegistredDataObj = JSON.parse(localStorString) || [];
  //set
  const checkVisitsCounterValue = ArrOfRegistredDataObj[indexOfRegistredUser].visitCounter;
  const checkBookCounterValue = ArrOfRegistredDataObj[indexOfRegistredUser].bookCounter;
  librCardVisitsCounter.innerHTML = checkVisitsCounterValue;
  librCardBooksCounter.innerHTML = checkBookCounterValue;
  //appear
  visitInfoBlock.style.display = 'grid';
  libraryCardCheckBtn.style.display = 'none';
  //disappear
  setTimeout(() => {
    visitInfoBlock.style.display = 'none';
    libraryCardCheckBtn.style.display = 'block';
    librCardNameInput.value = '';
    librCardCardNumberInput.value = '';
  }, 10000);
}


// включить инфо 
function DisplayVisitInfo() {
  const libraryCardCheckBtn = document.querySelector('.check-button');
  const visitInfoBlock = document.getElementById('visitsInfoCard');
  visitInfoBlock.style.display = 'grid';
  libraryCardCheckBtn.style.display = 'none';
  setPersonilizeInput();
}

// вЫлючить инфо 
function HideVisitInfo() {
  const libraryCardCheckBtn = document.querySelector('.check-button');
  const visitInfoBlock = document.getElementById('visitsInfoCard');
  visitInfoBlock.style.display = 'none';
  libraryCardCheckBtn.style.display = 'block';
  resetPersonilizeInput();
}

// заполнение полей Input после Log in
function setPersonilizeInput() {
  const librCardNameInput = document.getElementById('lk_name_input');
  const librCardCardNumberInput = document.getElementById('lk_card_input');

  // read
  const localStorString = localStorage.getItem('Users-Data');
  const ArrOfRegistredDataObj = JSON.parse(localStorString) || [];

  // set
  const numberForPlaceholder = ArrOfRegistredDataObj[loggedUserDataIndex].cardNumber;
  const userNameforPlaceholder = capitalize(ArrOfRegistredDataObj[loggedUserDataIndex].firstName);
  const userLastNameforPlaceholder = capitalize(ArrOfRegistredDataObj[loggedUserDataIndex].lastName);
  const textContentForPlaceholder = `${userNameforPlaceholder} ${userLastNameforPlaceholder}`;
  
  librCardNameInput.placeholder = textContentForPlaceholder;
  librCardCardNumberInput.placeholder = numberForPlaceholder;
}

// сброс к полям input of Libr Card по дефолту 
function resetPersonilizeInput() {
    const librCardNameInput = document.getElementById('lk_name_input');
    const librCardCardNumberInput = document.getElementById('lk_card_input');
    
    librCardNameInput.placeholder = "Reader's name";
    librCardCardNumberInput.placeholder = "Card number";
  }
  

// замена блока правой стороны когда пользователь имеет статус isLoggedIn
function RightPartOfLibrCardLogged() {
  const UnloggedRightPartOfLibrCard = document.getElementById('card2');
  const LoggedRightPartOfLibrCard = document.getElementById('card3');
  UnloggedRightPartOfLibrCard.style.display = 'none';
  LoggedRightPartOfLibrCard.style.display = 'flex'
}
function RightPartOfLibrCardUnlogged() {
  const UnloggedRightPartOfLibrCard = document.getElementById('card2');
  const LoggedRightPartOfLibrCard = document.getElementById('card3');
  UnloggedRightPartOfLibrCard.style.display = 'flex';
  LoggedRightPartOfLibrCard.style.display = 'none'
}

// работа с Input проверка карты и имени если имя и карта соответствуют Is Registred то включаем инфо на 10 сек
const libraryCardCheckBtn = document.querySelector('.check-button');
let indexOfRegistredUser; // индекс пользователя проверяемой карты CheckLibr

libraryCardCheckBtn.addEventListener('click', () => {
  const librCardNameInput = document.getElementById('lk_name_input');
  const librCardCardNumberInput = document.getElementById('lk_card_input');
  const librCardNameInputValue = librCardNameInput.value;
  const librCardCardNumberInputValue = librCardCardNumberInput.value;

  const parts = librCardNameInputValue.split(' ');

  if (parts.length === 2) {
    const firstNameFromInput = parts[0];
    const secondNameFromInput = parts[1];

    // read
    const localStorString = localStorage.getItem('Users-Data');
    const ArrOfRegistredDataObj = JSON.parse(localStorString) || [];

    // Проверка введенных данных с данными в localStorage
    const isMatched = ArrOfRegistredDataObj.some(dataObj => {
      return (
        dataObj.firstName === firstNameFromInput &&
        dataObj.lastName === secondNameFromInput &&
        dataObj.cardNumber === librCardCardNumberInputValue
      );
    });

    // ищем индекс
    indexOfRegistredUser = ArrOfRegistredDataObj.findIndex(dataObj => {
      return (
        dataObj.firstName === firstNameFromInput &&
        dataObj.lastName === secondNameFromInput &&
       dataObj.cardNumber === librCardCardNumberInputValue
      );
    });



    if (isMatched) {
      TimedDisplayVisitInfo();
    } else {
      openCustomModal('Неверные данные');
    }
  } else {
    openCustomModal('Для проверки введите имя и фамилию через пробел и укажите номер Library Card');
  }
});

// ВАЛИДАЦИЯ форм --------------------------- ВАЛИДАЦИЯ ____________

function validation(form) {

  function removeError(input) {
    const parent = input.parentNode;
    if (input.classList.contains('error')){
      parent.querySelector('.error-label').remove();
      input.classList.remove('error');
    }
  } 

  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label');

    errorLabel.classList.add('error-label');
    errorLabel.textContent = text;

    input.classList.add('error');
    parent.append(errorLabel);
  }


  let result = true;

  form.querySelectorAll('input').forEach(input => {
    removeError(input);

    if (input.dataset.minLength) {
      if (input.value.length < input.dataset.minLength){
        removeError(input);
        createError(input, `* Минимальное количество символов ${input.dataset.minLength}`);
        result = false;
      }
    }


    if (input.dataset.maxLength) {
      if (input.value.length > input.dataset.maxLength){
        removeError(input);
        createError(input, `* Максимальное количество символов ${input.dataset.maxLength}`);
        result = false;
      }
    }

    if (input.dataset.required === 'true') {
      if (input.value === ''){
        removeError(input);
        createError(input, '* Поле не заполнено');
        result = false;
      }
    }

    if (input.dataset.email === 'true') {
      if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(input.value)){
        removeError(input);
        createError(input, '* Неверный формат email');
        result = false;
      }
    }
    
  })

  return result;
}

// валидация модала Register
document.getElementById('add-form').addEventListener('input', function(event) {
  event.preventDefault();

  const signUpButton = this.querySelector('button');

  if (validation(this) === true) {
    signUpButton.removeAttribute('disabled');
  }
  else {
    signUpButton.disabled = true;
  }
});

// валидация модала Log In
document.getElementById('add-form-login').addEventListener('input', function(event) {
  event.preventDefault();

  const signUpButton = this.querySelector('button');

  if (validation(this) === true) {
    signUpButton.removeAttribute('disabled');
  }
  else {
    signUpButton.disabled = true;
  }
});

// валидация модала buy-a-card
document.getElementById('buy-a-card-form').addEventListener('input', function(event) {
  event.preventDefault();

  const signUpButton = this.querySelector('button');

  if (validation(this) === true) {
    signUpButton.removeAttribute('disabled');
  }
  else {
    signUpButton.disabled = true;
  }
});
import LocalizedStrings from 'react-localization';
export const errorMesages = new LocalizedStrings({
    ua:{
        erUsername: "Це поле не може бути пустим!",
        erEmail: "Це поле не може бути пустим!",
        erPassword: "Це поле не може бути пустим!",
        erPassword_confirmation_empty: "Це поле не може бути пустим!",
        erPassword_confirmation_different: "Паролі не співпадають!"
    },
    ru:{
        erUsername: "Это поле не может быть пустым!",
        erEmail: "Это поле не может быть пустым!",
        erPassword: "Это поле не может быть пустым!",
        erPassword_confirmation_empty: "Это поле не может быть пустым!",
        erPassword_confirmation_different: "Пароли не совпадают!"
    },
    en:{
        erUsername: "Can't be empty!",
        erEmail: "Can't be empty!",
        erPassword: "Can't be empty!",
        erPassword_confirmation_empty: "Can't be empty!",
        erPassword_confirmation_different: "Password do not match!"
    }
});
export const registerItems = new LocalizedStrings({
    ua:{
        sign_upHeader: "Реєстрація",
        username: "Ім'я користувача",
        email: "Електронна пошта",
        password: "Пароль",
        confirm_password: "Підтвердження паролю",
        sign_upBtn: "Зареєструватись",
    },
    ru:{
        sign_upHeader: "Регистрация",
        username: "Имя пользователя",
        email: "Электронная почта",
        password: "Пароль",
        confirm_password: "Подтвердите пароль",
        sign_upBtn: "Зарегистрироваться",
    },
    en:{
        sign_upHeader: "Sign Up",
        username: "Username",
        email: "Email",
        password: "Password",
        confirm_password: "Confirm Password",
        sign_upBtn: "Sign Up",
    }
});
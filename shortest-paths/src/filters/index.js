import translation from "./translation";

export const translate = (key) => {
    var locale = window.localStorage.getItem('locale');
    var supportedLocales = ['kr', 'en']
    if (supportedLocales.indexOf(locale) === -1) {
        locale = 'kr';
        window.localStorage.setItem('locale', locale);
    }
    return translation[key][locale] || key;
}
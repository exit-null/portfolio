import { getTranslationEn } from "./locales/english";
import { getTranslationHi } from "./locales/hindi";
import { Locale } from "./LocaleEnum";

const translate = (key: string, locale: Locale = Locale.english): string => {
    const translator: any = localeToTranslatorMap.has(locale) ? 
        localeToTranslatorMap.get(locale) : localeToTranslatorMap.has(Locale.english);
    const translatedText: string = translator(key);
    return translatedText ? translatedText : getTranslationEn(key);
}

const localeToTranslatorMap: Map<Locale, any> = new Map([
    [Locale.english, getTranslationEn],
    [Locale.hindi, getTranslationHi]
]);

export default translate;
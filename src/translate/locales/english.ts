export const getTranslationEn = (key: string): string => {
    const translatedText: string | undefined = keyToTranslatedTextMap.get(key);
    return translatedText ? translatedText : ``; 
}

const keyToTranslatedTextMap: Map<string, string> = new Map([
    // Header Component
    ["HEADER_HOME", "Home"],
    ["HEADER_EDUCATION_AND_CERTIFICATION", "Education and Certifications"],
    ["HEADER_EXPERIENCE", "Experience"],
    ["HEADER_PROJECTS", "Projects"],
    ["HEADER_CONTACT_ME", "Contact Me"],

    // Footer Component
    ["FOOTER_TEXT", "Made by Sayan Banerjee"]
]);
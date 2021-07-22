export const getTranslationHi = (key: string): string => {
    const translatedText: string | undefined = keyToTranslatedTextMap.get(key);
    return translatedText ? translatedText : ``; 
}

const keyToTranslatedTextMap: Map<string, string> = new Map([
    // Header Component
    ["HEADER_HOME", "मुख्य पृष्ठ"],
    ["HEADER_EDUCATION_AND_CERTIFICATION", "शिक्षा और प्रमाणपत्र"],
    
]);
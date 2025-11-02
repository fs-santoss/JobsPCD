
import { GoogleGenAI } from "@google/genai";
import { LinterResult } from '../types';
import { ABLEIST_TERMS } from '../constants';

export const checkAbleistLanguage = async (text: string): Promise<LinterResult | null> => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. Using mock linter.");
    // Mock functionality for environments without an API key
    const lowerText = text.toLowerCase();
    for (const term in ABLEIST_TERMS) {
      if (lowerText.includes(term)) {
        return {
          phrase: term,
          reason: ABLEIST_TERMS[term].reason,
          suggestion: ABLEIST_TERMS[term].suggestion,
        };
      }
    }
    return null;
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
    You are an anti-ableist language checker for a job portal for people with disabilities.
    Your task is to identify specific problematic phrases in a job description and suggest inclusive alternatives.
    Analyze the following text: "${text}"

    Check ONLY for the following ableist phrases:
    ${Object.keys(ABLEIST_TERMS).join('\n- ')}

    If you find one of these phrases, respond with a valid JSON object in the following format. Do not add any other text, explanations, or markdown formatting like \`\`\`json.
    {
      "phrase": "the problematic phrase you found",
      "reason": "${Object.entries(ABLEIST_TERMS).map(([k, v]) => `if the phrase is '${k}', the reason is '${v.reason}'`).join('. ')}",
      "suggestion": "${Object.entries(ABLEIST_TERMS).map(([k, v]) => `if the phrase is '${k}', the suggestion is '${v.suggestion}'`).join('. ')}"
    }

    If you find no problematic phrases from the list, respond with the single word: null.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const resultText = response.text.trim();

    if (resultText.toLowerCase() === 'null') {
      return null;
    }

    return JSON.parse(resultText) as LinterResult;
  } catch (error) {
    console.error("Error calling or parsing Gemini API response:", error);
    // Fallback to mock check on API error
    const lowerText = text.toLowerCase();
    for (const term in ABLEIST_TERMS) {
      if (lowerText.includes(term)) {
        return {
          phrase: term,
          reason: ABLEIST_TERMS[term].reason,
          suggestion: ABLEIST_TERMS[term].suggestion,
        };
      }
    }
    return null;
  }
};

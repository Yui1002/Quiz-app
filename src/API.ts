import { shuffleArray } from "./utils"

export const enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export type FetchedData = {
    category: string;
    correct_answer: string;
    difficulty: Difficulty;
    incorrect_answers: string[];
    question: string;
    type: string
}

export type AllFetchedData = FetchedData & { answers: string[] }

export const fetchQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`
    const response = await fetch(endpoint);
    const data = await response.json();
    
    return data.results.map((result: FetchedData) => (
        {
            ...result,
            answers: shuffleArray([...result.incorrect_answers, result.correct_answer])
        }
    ))
}
import { Schema } from 'mongoose';

interface Question {
    _id: Schema.Types.ObjectId;
    question: string;
    answers: Answer[];
}

interface Answer {
    text: string;
    isCorrect: boolean;
}
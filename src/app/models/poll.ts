import { PollForm } from "./poll-form";

export interface Poll extends PollForm {
    // stitla3
    id: number;
    // question: string;
    votes: number[];
    voted: boolean;
    // image: string;
    // options: string[];

}



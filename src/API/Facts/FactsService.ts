import axios from "axios";
import { Fact } from "../../types/Fact";

export class FactsService{

static async getFact():Promise<Fact>{

    const response = await axios.get('https://catfact.ninja/fact');
    return response.data;

}

}
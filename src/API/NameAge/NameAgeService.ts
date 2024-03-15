import axios from "axios";
import { NameAge } from "../../types/NameAge";

export class NameAgeService{

static async getAgeByName(name:string):Promise<NameAge>{

    const response = await axios.get(`https://api.agify.io/?name=${name}`);

    return response.data;

}

}
import axios, {CancelTokenSource} from "axios";
import { NameAge } from "../../types/NameAge";

export class NameAgeService{

private static cancelTokenSource: CancelTokenSource | null = null;

static async getAgeByName(name:string):Promise<NameAge>{

    if (NameAgeService.cancelTokenSource) {
        NameAgeService.cancelTokenSource.cancel();
    }
    
    NameAgeService.cancelTokenSource = axios.CancelToken.source();

    const response = await axios.get(`https://api.agify.io/?name=${name}`, {
        cancelToken: NameAgeService.cancelTokenSource.token,
    });

    NameAgeService.cancelTokenSource = null;

    return response.data;

}

}
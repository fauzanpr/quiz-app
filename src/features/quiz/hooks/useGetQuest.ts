import { useQuery } from "react-query"
import { services } from "../../../core/config/app"
import axios from "axios"
import { useAtomValue } from "jotai";
import { reqAtom } from "../store/enable";
import { ApiResponse } from "../../../core/models/auth";
import { amountAtom } from "../store/params";

function useGetQuest() {
    const req = useAtomValue(reqAtom);
    const amount = useAtomValue(amountAtom);
    const query = useQuery({
        queryKey: ["question"],
        queryFn: () => {
            return axios.get<ApiResponse>(services.questionRequest, {
                params: {
                    amount: amount,
                    token: localStorage.getItem("token"),
                    type: "boolean"
                }
            });
        },
        enabled: req,
        cacheTime: 0
    });

    const questions = query.data?.data.results;
    const response = query.data?.data.response_code;

    return {
        ...query,
        questions,
        response
    }
}

export default useGetQuest
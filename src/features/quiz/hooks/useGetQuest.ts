import { useQuery } from "react-query"
import { services } from "../../../core/config/app"
import axios from "axios"
import { useAtomValue } from "jotai";
import { reqAtom } from "../store/enable";
import { ApiResponse } from "../../../core/models/auth";

function useGetQuest() {
    const req = useAtomValue(reqAtom);
    const query = useQuery({
        queryKey: ["question"],
        queryFn: () => {
            return axios.get<ApiResponse>(services.questionRequest, {
                params: {
                    amount: 10,
                    token: localStorage.getItem("token"),
                    type: "boolean"
                }
            });
        },
        enabled: req,
        cacheTime: 0
    });

    const questions = query.data?.data.results;

    return {
        ...query,
        questions
    }
}

export default useGetQuest
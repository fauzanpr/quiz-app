import axios from "axios";
import { useMutation } from "react-query";
import { services } from "../../../core/config/app";
import { TokenResponse } from "../../../core/models/auth";
import { useNavigate } from "react-router-dom";

function useGenerateTokenMutation() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: () => {
      return axios.post<TokenResponse>(services.tokenRequest);
    },
    onSuccess: (res) => {
      alert("Berhasil");
      localStorage.setItem("token", res.data.token);
      navigate("/app");
    },
    onError: () => {
      alert("Gagal");
    }
  });

  return mutation;
}

export default useGenerateTokenMutation;

import axios from "axios";
import { useMutation } from "react-query";
import { services } from "../../../core/config/app";
import { ApiResponse } from "../../../core/models/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useGenerateTokenMutation() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: () => {
      return axios.post<ApiResponse>(services.tokenRequest);
    },
    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token || "");
      toast.success("Login berhasil");
      navigate("/app");
    },
    onError: () => {
      toast.error("Login gagal");
    }
  });

  return mutation;
}

export default useGenerateTokenMutation;

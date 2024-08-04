export const API_URL = import.meta.env.VITE_API_URL;

export const services = {
    tokenRequest: `${API_URL}/api_token.php?command=request`,
    questionRequest: `${API_URL}/api.php`
};

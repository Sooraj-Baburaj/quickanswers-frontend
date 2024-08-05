import { toast } from "sonner";
import { getCookie } from "cookies-next";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getAnswerStream = async (questionId, callback = () => {}) => {
  try {
    const token = getCookie("USER_ACCESS_TOKEN");

    const response = await fetch(`${BASE_URL}/answers/generate`, {
      method: "post",
      headers: {
        responseType: "stream",
        "content-type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify({ questionId }),
    });
    if (response.status === 200) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }

        const decodedChunk = decoder.decode(value, { stream: true });

        callback(decodedChunk);
      }
    } else {
      toast.error("Failed to generate an answer!");
    }
  } catch (error) {
    console.log(error);
    toast.error("Failed to generate an answer!");
    return;
  }
};

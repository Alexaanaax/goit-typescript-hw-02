import axios from "axios";

const baseURL = "https://api.unsplash.com/";
const API_KEY = "hzxU8oQ-tmWGoJntX_z3-EsplNpJ0fB7HSw4CcOo7pg";

export type ImageResult = {
  id: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
};

type ApiResponse = {
  results: ImageResult[];
  total: number;
  total_pages: number;
};

type Params = {
  query: string;
  client_id: string;
  page: number;
};

export const fetchArticlesWithTopic = async (
  query: string,
  page: number
): Promise<ImageResult[]> => {
  try {
    const params: Params = {
      query,
      client_id: API_KEY,
      page,
    };

    const response = await axios.get<ApiResponse>(`${baseURL}/search/photos`, {
      params,
    });

    return response.data.results;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching articles:", error.message);
    } else {
      console.error("Error fetching articles:", error);
    }
    throw error;
  }
};
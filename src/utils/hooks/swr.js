import useSWRImmutable from "swr/immutable";
import { getAxiosInstance } from "@src/api";

export const fetcher = async (url) => {
  const api = await getAxiosInstance();
  return api.get(url).then((res) => res);
};

export const fetcherPost = async ([url, payload]) => {
  const api = await getAxiosInstance();
  return api.post(url, payload).then((res) => res);
};

export const useSwrGet = (path, options = {}) => {
  const { data, error, isLoading, isValidating, mutate } = useSWRImmutable(
    path,
    fetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.response.status === 404) {
          return;
        }

        if (retryCount < 1) {
          setTimeout(() => revalidate({ retryCount }), 3000);
        }
      },
      keepPreviousData: true,
      ...options,
    }
  );

  return {
    data,
    isLoading,
    isValidating,
    isError: error,
    mutate,
  };
};

export const useSwrPost = (path, payload = {}, options = {}) => {
  const { data, error, isLoading, isValidating, mutate } = useSWRImmutable(
    path ? [path, payload] : null,
    fetcherPost,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.response.status === 404) {
          return;
        }

        if (retryCount < 1) {
          setTimeout(() => revalidate({ retryCount }), 3000);
        }
      },
      keepPreviousData: true,
      ...options,
    }
  );

  return {
    data,
    isLoading,
    isValidating,
    isError: error,
    mutate,
  };
};

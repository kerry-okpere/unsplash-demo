import { useCallback, useState } from "react";
import { ColorId, createApi, SearchOrderBy } from "unsplash-js";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import { PER_PAGE } from "../constants";
import { InitParams } from "unsplash-js/dist/helpers/request";

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
} as InitParams);

type FetchParam = {
  page?: number;
  perPage?: number;
  query: string;
  orderBy?: SearchOrderBy;
  color?: ColorId
};

const UsePhotos = () => {
  const [response, setResponse] = useState<Photos>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const getPhotos = useCallback(
    async ({ perPage = PER_PAGE, ...rest }: FetchParam) => {
      setLoading(true);

      const res = await unsplash.search.getPhotos({ perPage, ...rest });

      if (res.originalResponse.ok) {
        setResponse(res.response);
      } else {
        setError(res.errors?.[0]);
      }

      setLoading(false);
    },
    []
  );

  return {
    response,
    loading,
    error,
    getPhotos,
  };
};

export default UsePhotos;

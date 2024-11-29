import { useEffect, useState } from "react";
import apiClint from "../services/api-clint";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requistConfig?: AxiosRequestConfig,
  depen?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClint
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requistConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setLoading(false);
          setErrors(err.message);
        });

      return () => {
        controller.abort();
      };
    },
    depen ? [...depen] : []
  );

  return { data, errors, isLoading };
};
export default useData;

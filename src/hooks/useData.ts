import { useEffect, useState } from "react";
import apiClint from "../services/api-clint";
import { CanceledError } from "axios";

interface FetchResponse<T>{
    count: number;
    results: T[];
}
const useData = <T>(endpoint:string) => {
    const [data, setData] = useState<T[]>([]);
    const [errors, setErrors] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
  
      setLoading(true)
      apiClint
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
        .then((res) => {
          setData(res.data.results) 
          setLoading(false)
        })
        .catch((err) => {
          if (err instanceof CanceledError) return; 
          setLoading(false)
          setErrors(err.message);
        });
  
      return () => {
        controller.abort(); 
      };
    }, []);
  
    return { data, errors,isLoading };
}
export default useData;
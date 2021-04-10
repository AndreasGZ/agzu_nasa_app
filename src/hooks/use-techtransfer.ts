/* eslint-disable indent */
import { useState } from "react";
import debounce from "../tools/debounce";
import { fetchPost } from "../tools/tools";

export function useTechTransfer(): [
  techtransfer: string[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChangeTechtransfer: (...args: any[]) => void,
  error: string
] {
  const [techtransfer, setTechtransfer] = useState<string[]>([]);
  const [error, setError] = useState("");

  const handleChangeTechtransfer = debounce((e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchValue = e.target.value.trim()
    if (searchValue !== "") {
      const data = {
        searchfield: searchValue
      };

      fetchPost("/techtransfer", data).then(resData => {
        setTechtransfer(state => resData.results);
        if (resData.message) setError(state => "This service is currently not available, please try it again later!")
        else if (resData.results.length == 0) setError(state => "No patent found. Keep on digging!")
        else setError(state => "")
      }).catch(error => console.log(error));
    }
  }, 500)

  return [
    techtransfer,
    handleChangeTechtransfer,
    error
  ];
}
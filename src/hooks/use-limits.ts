import { useEffect, useState } from "react";

export default function useLimits(initialState: any, scroll: number): [
  limitedState: any[],
  handleScroll: () => void
] {
  const [limitedState, setLimitedState] = useState<any[]>([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (initialState) {
      setLimitedState(initialState.filter((el: any, index: number) => index < 10));
    }
    setCounter(1);
  }, [initialState])

  const handleScroll = () => {
    if ((document.body.scrollTop > counter * scroll || document.documentElement.scrollTop > counter * scroll)
      && counter < initialState.length) {
      setCounter(counter => counter + 1)
      setLimitedState(initial => initialState.filter((el: any, index: number) => (index < counter * 10 && index < initialState.length - 1)));
    }
  }
  return [
    limitedState,
    handleScroll
  ];
}

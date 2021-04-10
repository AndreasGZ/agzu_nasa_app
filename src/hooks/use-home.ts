import { useState } from "react";
import debounce from "../tools/debounce";
import { Project, Techport } from "../types/types";

export function useHome(techport: Techport): [
  results: Project[] | undefined,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  display: () => string,
] {
  const [results, setResults] = useState<Project[] | undefined>();
  const projects = techport.projects.projects || [];

  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchValue = e.target.value.trim()
    if (searchValue != "") {
      const existingProjects = projects.filter(project => String(project.id).indexOf(searchValue) == 0);
      setResults(state => existingProjects)
    } else {
      setResults(state => undefined);
    }
  }, 300)

  const display = (): string => {
    if (results) return "block";
    return "none";
  }

  return [
    results,
    handleChange,
    display,
  ];
}
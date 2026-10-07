import CatFacts from "./components/CatFacts.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Breed} from "./interfaces/Breed.ts";

const PageDiv = styled.div`
  width: 75vw;
  border: 7px darkslategray dashed;
  margin: auto;
`;

const NextButton = styled.button`
  display: block;
  margin: 2% auto;
  padding: 1% 3%;
  border: 4px solid seagreen;
  background-color: honeydew;
  color: green;
  font-size: calc(2px + 1vw);
  cursor: pointer;
`;

export default function App() {

  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [page, setPage] = useState<number>(1);
  const [prevPage, setPrevPage] = useState<number>(1);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response = await fetch("https://catfact.ninja/breeds?limit=12&page=" + page);
      const json = await response.json();
      const list: Breed[] = Array.isArray(json) ? json : json.data;
      setBreeds(list);
      if (json.last_page) setPrevPage(json.last_page);
    }
    fetchData()
        .then(() => console.log("Success"))
        .catch((err: Error) => console.log("Error detected: " + err));
  }, [page]);

  return (
      <PageDiv>
        <NextButton onClick={() => setPage(page >= prevPage ? 1 : page + 1)}>
          More Breeds
        </NextButton>
        <CatFacts data={breeds}/>
      </PageDiv>
  );
}


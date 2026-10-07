import styled from "styled-components";
import type {Breed} from "../interfaces/Breed.ts";

const Breeds = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: lavender;
`;

const EachBreed = styled.div<{$status: string}>`
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: 2%;
    border: 6px slateblue double;
    padding: 3%;
    font: italic small-caps bold calc(2px + 1.2vw) Georgia, serif;
    text-align: center;
    max-width: 28%;
    color: ${(props) => (props.$status === "Short" ? "ivory" : "gold")};
    background-color: ${(props) => (props.$status === "Short" ? "brown" : "midnightblue")};
`;

export default function CatFacts(props: {data: Breed[]}) {
    return (
        <Breeds>
            {props.data.map((b: Breed) => (
                <EachBreed key={b.breed} $status={b.coat}>
                    <h1>{b.breed}</h1>
                    <p>Country: {b.country}</p>
                    <p>Origin: {b.origin}</p>
                    <p>Coat: {b.coat}</p>
                    <p>Pattern: {b.pattern}</p>
                </EachBreed>
            ))}
        </Breeds>
    );
}
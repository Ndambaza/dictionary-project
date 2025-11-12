import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="definition-card">
            <p>
              <strong>Definition:</strong>
              {definition.definition}
            </p>
            {definition.example && (
              <p>
                <strong>Example:</strong>
                <em>{definition.example}</em>
              </p>
            )}
            {definition.synonyms && definition.synonyms.length > 0 && (
              <p>
                <strong>Synonyms:</strong>
                <Synonyms synonyms={definition.synonyms} />
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  
  // Limit definitions to 4
  const limitedDefinitions = props.meaning.definitions.slice(0, 4);
  
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {limitedDefinitions.map(function (definition, index) {
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

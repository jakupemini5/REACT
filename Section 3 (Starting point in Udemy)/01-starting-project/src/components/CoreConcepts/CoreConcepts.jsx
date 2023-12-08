import React from "react"

import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../../data";
import Section from "../Section/Section";

const CoreConcepts = () => {
    return (
        <Section id='core-concepts' title = "Time to get started!">
          <ul>
            {CORE_CONCEPTS.map(x => <CoreConcept
              key = {x.title}
              {... x}
            />)}
          </ul>
        </Section>
    );
}

export default CoreConcepts;

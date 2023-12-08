import React, { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../../data";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";

const Examples = () => {
    const [tabElement, setTabElement] = useState();

    const TabsButtonClickHandler = (data) => {
        setTabElement(data)
    }

    let tabContent = <p>Please Select a topic.</p>

    if (tabElement)
        tabContent = (
            <div id='tab-content' >
                <h3>{EXAMPLES[tabElement].title}</h3>
                <p>{EXAMPLES[tabElement].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[tabElement].code}
                    </code>
                </pre>
            </div>
        );

    return (
        <Section id='examples' title="Examples">
            <Tabs
                buttons={<>
                    <TabButton isSelected={tabElement === 'components'} onClick={() => TabsButtonClickHandler('components')} >Components</TabButton>
                    <TabButton isSelected={tabElement === 'jsx'} onClick={() => TabsButtonClickHandler('jsx')} >Jsx</TabButton>
                    <TabButton isSelected={tabElement === 'props'} onClick={() => TabsButtonClickHandler('props')} >Props</TabButton>
                    <TabButton isSelected={tabElement === 'state'} onClick={() => TabsButtonClickHandler('state')} >State</TabButton>
                </>}>
                {tabContent}
            </Tabs>
        </Section>
    );
}

export default Examples;
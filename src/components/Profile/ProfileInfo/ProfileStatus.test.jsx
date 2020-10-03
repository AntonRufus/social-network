import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state.", () => {
        const component = create(<ProfileStatus status='test'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('test');
    });

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status='test'/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.length).toBe(1);
    });

    test("after creation span should contain status", () => {
        const component = create(<ProfileStatus status='test'/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.innerText).toBe('test');
    });
});

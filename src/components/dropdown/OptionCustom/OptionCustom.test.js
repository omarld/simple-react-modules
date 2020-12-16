import OptionCustom  from './OptionCustom';
import { render, cleanup, fireEvent } from '@testing-library/react'


describe("OptionCustom", () =>{

    afterAll(()=>{
        cleanup;
    });

    it("should render basic option item", () =>{
        const option = {key: 1, value: "Options 1"}
        const {debug, getByText } = render(
            <OptionCustom
                onSelectHandler={jest.fn()} 
                option={option} />
        )
        expect(getByText("Options 1")).toBeTruthy();
    })

    it("should call click handler", () =>{
        const option = {key: 1, value: "Options 1"}
        const clickHandler = jest.fn();
        const {debug, getByText } = render(
            <OptionCustom
                onSelectHandler={clickHandler} 
                option={option} />
        )
        fireEvent.click(getByText("Options 1"));
        expect(clickHandler.mock.calls.length).toBe(1);
    })

    it("should call click handler with value 'Option A'", () =>{
        const option = {key: 1, value: "Option A"}
        const clickHandler = jest.fn();
        const {debug, container } = render(
            <OptionCustom
                onSelectHandler={clickHandler} 
                option={option} />
        )
        debug();
        // console.log(container.querySelector("li"));
        fireEvent.click(container.querySelector("li"));
        // console.log(clickHandler.mock.calls[0]);
        expect(clickHandler).toHaveBeenCalledWith("Option A");
    })

});
// Writing test - the Three "A"s
//Arrange: set up the test data, test conditions and test environment
//Act: Run logic that should be tested
//Assert: Compare execution results with expected results.

import Greeting from "./Greeting"
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
  test('Renders Hello workd as a text', () =>{
    //Arrage
    render(<Greeting/>)
  
    //Act
    //.,.nothing
  
    //Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument()
  })
  test('Renders It\'s good to see you as a text', () =>{
    //Arrage
    render(<Greeting/>)
  
    //Act
    //.,.nothing
  
    //Assert
    const outputElement = screen.getByText('It\'s good to see you');
    expect(outputElement).toBeInTheDocument()
  })
  test('Renders Change! as a text', async () =>{
    //Arrage
    render(<Greeting/>)
  
    //Act
    const buttonElement = screen.getByRole('button');

    await userEvent.click(buttonElement)
    //Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument()
  })

})

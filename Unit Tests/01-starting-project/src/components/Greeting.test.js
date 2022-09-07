import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    //Arrange
    render(<Greeting />);

    // Act ... => here is nothing

    // Assert
    // screen can give us access to the virtual screen/dom
    const helloWorldElement = screen.getByText('Hello World!'); // will return an element, if doesn't get an element will throq an error

    expect(helloWorldElement).toBeInTheDocument(); // global available expect function
  });

  test('renders good to see you if the button was NOT clicked', () => {
    render(<Greeting />);

    const goodToSeeYou = screen.getByText("It's good to see you!");

    expect(goodToSeeYou).toBeInTheDocument();
  });

  test('renders changed! if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act => click button virtually
    // userEvent to triggle event in the virtual screen
    const buttonElement = screen.getByRole('button');

    userEvent.click(buttonElement); // at least one urgument => the element which will be clicked

    // Assert

    const changed = screen.getByText('Changed!');
    expect(changed).toBeInTheDocument();
  });

  test('does not render good to see you if the button clicked', () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement); // at least one urgument => the element which will be clicked

    // Assert

    const outputElement = screen.queryByText('good to see you', {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
}); // global describe function for group test suits, one suite can have multiple test for the same component/feture test

// integration test: will also test the content of other component in Greeting JSX => Output component.

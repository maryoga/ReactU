import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Testing on <FirstApp2/>", () => {

  const title = 'Hi, I am Seneca';
  const subTitle = "Sobre la brevedad de la vida";

  test('must match the snapshot', () => {

    const { container} = render( <FirstApp title={ title } />)
    expect( container ).toMatchSnapshot();

  });

  test('It must display the message "Hi, I am Seneca"', () => {
    render( <FirstApp title={ title } />)
    expect( screen.getByText( title ) ).toBeTruthy();
    // screen.debug();
  });

  test('must display the title in an h1', () => {
    render( <FirstApp title={ title } />);
    expect( screen.getByRole( 'heading', { level: 1 }).innerHTML).toContain( title );
  });
  
  test('must show the subtitle sent by props', () => {
    render(
      <FirstApp
        title={ title }
        subTitle = { subTitle }
      />
    );

    expect( screen.getAllByText(subTitle).length ).toBe(2);

  });

});

import { getAllByText, render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Testing on <FirstApp/>", () => {
  // test('must match the snapshot', () => {
  //     const title = 'Hola, Soy MaryoGA';
  //     const { container } = render( <FirstApp title= { title } />)
  //     expect(container).toMatchSnapshot();
  // });

  test("must display the title in an h1 ", () => {
    const title = "Hola, Soy MaryoGA";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector( 'h1');
    // expect( h1.innerHTML ).toContain( title );
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("must show the subtitle sent by props", () => {
    const title = "Hola, Soy MaryoGA";
    const subTitle = "De la vida es escasa la parte que vivimos";
    const { getAllByText } = render(
        <FirstApp
            title={ title }
            subTitle = { subTitle }
        />
    );

    expect( getAllByText(subTitle).length ).toBe(2);

  });
});

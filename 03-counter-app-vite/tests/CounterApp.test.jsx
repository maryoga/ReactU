import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Testing on <CounterApp />', () => {

    const initialValue = 10;

    test('must match the snapshot', () => {
        const { container } = render(<CounterApp value = { initialValue } />);
        expect( container ).toMatchSnapshot();
    });

    test('Must show the initial value if we send it 100 <CounterApp value = { 100 } />', () => {        
        render( <CounterApp value = { 100 } /> );
        expect( screen.getByText(100) ).toBeTruthy();
        // expect( screen.getByRole('heading', { level: 2}).innerHTML).toContain('100');
    });

    test('must increase with the +1 button', () => {
        render( <CounterApp value = { initialValue } /> );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('11') ).toBeTruthy();
    });

    test('must decrease with the -1 button', () => {
        render( <CounterApp value = { initialValue } /> );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('9') ).toBeTruthy();
    });

    test('the reset button must work', () => {
        render( <CounterApp value = { 355 } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click(screen.getByRole( 'button', { name: 'btn-reset' }));

        expect( screen.getByText( 355 ) ).toBeTruthy();
    });
});
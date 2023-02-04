import { render, screen } from "@testing-library/react";
import { GifExertApp } from "../src/GifExerptApp";

describe('Pruebas en el <GifExpertApp />', () => {

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GifExertApp />);
        expect(container).toMatchSnapshot();
    });


});
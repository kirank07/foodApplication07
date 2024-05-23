import { render,screen } from "@testing-library/react";
import Contactus from "../Contactus";
import '@testing-library/jest-dom';

test("Should load contact us component",() => {
    render(<Contactus />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});
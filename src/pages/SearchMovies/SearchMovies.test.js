import {
  fireEvent,
  render,
  act,
  screen,
  waitFor,
} from '@testing-library/react';
import user from '@testing-library/user-event';
import SearchMovies from './SearchMovies';

describe('SearchMovies page', () => {
  it('Rendered form', () => {
    const { getByTestId } = render(<SearchMovies />);
    const form = getByTestId('searchForm');
    expect(form).toBeTruthy();
  });

  it('Rendered input', () => {
    const { getByTestId } = render(<SearchMovies />);
    const input = getByTestId('searchInput');
    expect(input).toBeTruthy();
  });

  it('Rendered button', () => {
    const { getByTestId } = render(<SearchMovies />);
    const button = getByTestId('searchButton');
    expect(button).toBeTruthy();
  });

  it("Don't display 'No Movie Found' on page render", () => {
    const { queryByTestId } = render(<SearchMovies />);
    const div = queryByTestId('displayNoMovieFound');
    expect(div).toBeFalsy();
  });

  it('Test input', async () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<SearchMovies />);
    const input = getByTestId('searchInput');
    const button = getByTestId('searchButton');

    user.type(input, 'Evil Dead');

    user.click(button);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    expect(onSubmit).toHaveBeenCalledWith({ lazy: true });
  });
});

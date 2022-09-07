import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    window.fetch = jest.fn(); // override the build-in fetch function with the mock functuion
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }],
    }); // simulate the fetch succeess case here, we not actual sending a request to the API
    render(<Async />);

    // Act => no act need here, coz the fetch and set post automatically because of the useEffect()

    // Assert => check if some list items were render

    const listItemElements = await screen.findAllByRole('listitem', {}, {}); // findAllByRole => the find will return a promise, so it will reevaluate the screen couple of times, until cucceeds, meaning will wait for the HTTP request for cucceeds => because it will return promise, we need use await.
    // third urgument is timeout, defalt is 1 second, means if after one second still cannot render the list, it will still fail.
    expect(listItemElements).not.toHaveLength(0);
  });
});

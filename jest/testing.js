// 3 types: unit test, integration test, and End to End testing (E2E). 

// jest
// 1) Create test
test('increment button', () => {});

// group multiple tests
describe("test button", () => {
  test("behaves correctly", () => {});
})

// 2) Machers = to match 2 values
expect(2 + 2).toBe(4);
expect([1,2,3]).toEqual([1,2,3]); // to match object
expect(2 + 2).not.toBe(2);

// match truthness
const n = null;
expect(n).toBeNull();
expect(n).toBedefined();
expect(n).not.toBeUndefined();
expect(n).not.toBeTruthy();
expect(n).toBeFalsy();

// match number
expect(value).toBeGreaterThan(3);
expect(value).toBeGreaterThanOrEqual(3,5);
expect(value).toBeLessThan(5);
expect(value).toBeLessThanOrEqual(4,5);



// 3) setup and teardown, to run before or after test cases
beforeAll(() => {
  return initializeCityDatabase();
})

afterAll(() => {
  return clearCityDatabase();
})

beforeEach(() => {
  initializeCityDatabase();
})



// react-testing-library
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

// example
test('loads and display greeting', async() => {
  render(<Fetch url="/greeting" />)
  fireEvent.click(screen.getByText('load greeting'));

  await waitFor(() => screen.getByRole('heading'));

  expect(screen.getByRole('heading')).toHaveTextContent('hello there');
  expect(screen.getByRole('button')).toBeDisabled();
})
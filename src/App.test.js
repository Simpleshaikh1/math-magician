import { BrowserRouter, Routes, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../src/Components/Navbar';
import Calculator from '../src/Logic/calculate';
import Qoutes from '../src/Routes/displayQoute';
import Home from '../src/Routes/Home';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Qoutes />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

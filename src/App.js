import React from 'react';
import Root from './components/root/Root';
import HomePage from './components/homePage/HomePage';
import SearchPage from './components/searchPage/SearchPage';
import CountryPage from './components/countryPage/CountryPage';
import { InProgress } from './components/inProgress/InProgress';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root /> }>
    <Route index  element={ <HomePage/> }/>
    <Route path='search' element={ <SearchPage/> }/>
    <Route path='search/:countryName' element={ <CountryPage/> }></Route>
    <Route path='working' element={ <InProgress/> }></Route>
  </Route>
));

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;

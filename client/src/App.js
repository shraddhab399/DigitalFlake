import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login';
import HomePage from './components/HomePage';
import StatePage from './components/StatePage';
import CityPage from './components/CityPage';
import WarehousePage from './components/WarehousePage';
import AddWarehousePage from './pages/AddWarehousePage';
import { WarehouseProvider } from './contexts/WarehouseContext';
import EditWarehousePage from './pages/EditWarehousePage';
import { CityProvider } from './contexts/CityContext';
import AddCityPage from './pages/AddCityPage';
import EditCityPage from './pages/EditCityPage';
import StateProvider from './contexts/StateContext';
import AddStatePage from './pages/AddStatePage';
import EditStatePage from './pages/EditStatePage';
const App = () => {
    return (
        <WarehouseProvider>
            <CityProvider>
            <StateProvider>
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path='/state' element={<StatePage/>}/>
                <Route path="/add-state" element={<AddStatePage />} />
                <Route path="/edit-state/:id" element={<EditStatePage/>} /> 
                <Route path='/city' element={<CityPage/>}/>
                <Route path="/add-city" element={<AddCityPage />} />
                <Route path="/edit-city/:id" element={<EditCityPage/>} />
                <Route path ='/warehouse' element={<WarehousePage />}/>
                <Route path="/add-warehouse" element={<AddWarehousePage />} />
                <Route path="/edit-warehouse/:id" element={<EditWarehousePage />} />
                
            </Routes>
        </Router>
        </StateProvider>
        </CityProvider>
        </WarehouseProvider>
    );
};

export default App;

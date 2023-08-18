import React from 'react';
import MainMenu from './MainMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rules from './Rules'
import Game from './Game';
import { Provider } from 'react-redux';
import store from './Store';
import './styles.css';

function App() {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainMenu/>}/>
                    <Route path='/rules' element={<Rules/>}/>
                    <Route path='/game' element={<Game/>}/>
                </Routes>
            </BrowserRouter>            
        </Provider>

    )

}

export default App;
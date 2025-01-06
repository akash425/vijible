import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Feed from './Feed/Feed';
import SavedItems from './SavedItems/SavedItems';

const Home = () => {
    return (
        <div className="app-body">
            <Sidebar />
            <Feed />
            <SavedItems />
        </div>
    )
}

export default Home;
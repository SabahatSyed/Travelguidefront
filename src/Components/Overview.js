import React from 'react';
import AdminGraph from './AdminGraph';
import Cardlist from './CardList';
import Bcards from './Bcards';
import Navbar from './Navbar'
import Header from './Header'
const Overview = () => {
    
    return (
       
        <div>
            <div>
        <Navbar />
      <Header />
       </div>
            <div>
                <Cardlist/>
            </div>
            <div>
                <AdminGraph/>
            </div>
            <div>
                <Bcards/>
            </div>

        </div>
    );
}

export default Overview;

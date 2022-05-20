import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import SearchMovies from './SearchMovies';
import Footer from './Footer';

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    < SearchMovies />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;
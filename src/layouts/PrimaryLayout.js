import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SEO from '../Components/SEO'
const PrimaryLayout = (props) => (
    <div>
        <SEO />
            <Header/>
                <div className="editar-row row p-5 justify-content-md mt-5">
                    <div className={props.colum}>
                        {props.children}
                    </div>
                </div>
            <Footer/>
        </div>
);

export default PrimaryLayout
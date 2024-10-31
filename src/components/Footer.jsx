
import { useState, useEffect } from "react";


function Footer({is_show}) {


    useEffect(() => {

    }, []);


  return (
    <footer className={`${is_show ? "" : "hidden"}`}>
        <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <p>&copy; 2024. Product By <a href="#">AIDEA</a></p>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <ul className="social-default">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  );
}

export default Footer;


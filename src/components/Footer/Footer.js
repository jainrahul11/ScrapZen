import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="4" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
            <img src={logo} alt="Book Store App" height="50px" />
               <strong>ScrapZen</strong>              
            </h6>
            <p>
            ScrapZen is an online React web application where the customer can purchase books online.
             Through this book store the users can search for a book by its title and
             later can add to the shopping cart and finally purchase using credit card transaction.
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold"><strong>Products</strong></h6>
            <p>
              <a href="#">ScrapZen</a>
            </p>
            <p>
              <a href="https://rahul-blog.vercel.app/">Portfolio</a>
            </p>
            <p>
              <a href="https://ecart-e.herokuapp.com/rahul/">eCart Website</a>
            </p>
          </MDBCol>

          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold"><strong>Contact</strong></h6>
            <p>
              <i className="fa fa-envelope mr-3" /> jainrahul9951@gmail.com
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> supriyatainwala2001@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +91 9549969303
            </p>
            <p>
              <i className="fa fa-home mr-3" /> GIT Jaipur, Rajasthan
            </p>
          </MDBCol>
        </MDBRow>
        <hr />

        


        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Made by
              <a href=""> Rahul Jain & Supriya Tainwala </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://github.com/ScrapZen">
                    <i className="fab fa-github" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href='https://www.linkedin.com/in/rahul-jain-914118193/'>
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href='https://www.instagram.com/supriya_tainwala/'>
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href='https://www.instagram.com/rahul_j032/'>
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;

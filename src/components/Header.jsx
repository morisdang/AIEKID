import React, { useEffect, useRef, useState } from 'react';
import './scss/Header.scss';
import logo from '../assests/logo.png'
import AccountMenu from './AccountMenu';
import { MdMenuOpen, MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import { ContactSupportOutlined } from '@mui/icons-material';

const Header = ({ is_show, user_profile }) => {

	const headerRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [user_name, setUsername] = useState(null);
	const [picture, setPicture] = useState(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	useEffect(() => {
		setUsername(user_profile.surname && user_profile.lastname ? user_profile.surname + ' '+ user_profile.lastname : '')
		setPicture(user_profile.picture ? user_profile.picture : '')
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.3 }
		);

		if (headerRef.current) {
			observer.observe(headerRef.current);
		}

		return () => {
			if (headerRef.current) {
				observer.unobserve(headerRef.current);
			}
		};
	}, [is_show, user_profile, user_profile.surname, user_profile.lastname]);
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};
	return (
		<section ref={headerRef} className={`header ${is_show ? "" : "hidden"}`}>
			<header>
				<div className={`main-menu ${isVisible ? "" : 'animated fadeInDown menu-fixed'}`}>
					<div className="container">
						<div className="row no-gutters">
							<nav className="main-menu-area w-100">
								<div className="logo-area">
									<Link to="/" className='w-fit'><img src={logo} alt="logo"
										className="img-responsive h-[100px]" /></Link>
								</div>

								<button
									className="hamburger-menu p-2"
									onClick={toggleMobileMenu}
									aria-label="Toggle menu"
								>
									{!isMobileMenuOpen && <MdOutlineMenu size={30} className='hamburger-icon' />}
								</button>

								<div className={`menu-mobile-container ${isMobileMenuOpen && 'open'}`}>
									<button
										className="hamburger-menu p-2 absolute top-0 right-0"
										onClick={() => setIsMobileMenuOpen(false)}
										aria-label="Toggle menu"
									>
										<MdMenuOpen size={30} className='hamburger-icon' />
									</button>

									<div className="menu-area">
										<ul className="menu">
											<li className="dropdown">
												<a href="/" className="" data-toggle="dropdown" role="button"
													aria-haspopup="true" aria-expanded="false">Trang chủ</a>
											</li>
											<li className="dropdown">
												<a href="/hamsbo" className="" data-toggle="dropdown" role="button"
													aria-haspopup="true" aria-expanded="false">Hamsbo Chat</a>
											</li>
											<li className="dropdown">
												<a href="/event" className="" data-toggle="dropdown" role="button"
													aria-haspopup="true" aria-expanded="false">Sự kiện</a>
											</li>
											<li className="dropdown">
												<a href="/explore" className="" data-toggle="dropdown" role="button"
													aria-haspopup="true" aria-expanded="false">Khám phá <span className="caret"></span></a>
											</li>
											<li className="dropdown">
												<a href="/lib" className="" data-toggle="dropdown" role="button"
													aria-haspopup="true" aria-expanded="false">Thư viện</a>
											</li>

										</ul>

									</div>
									{!user_name ? (
										<div className="header__cta flex flex-row">
											<button className="cta__button login"><a href="/login">Đăng nhập</a></button>
											<button className="cta__button"><a href="/register">Đăng kí</a></button>
										</div>
									) :
										(<div className="header__cta">
											<AccountMenu picture={picture} user_name={user_name} />

											{/* <button className="cta__button login"><a href="/personal">{user_name}</a></button> */}
										</div>)
									}
								</div>

								<div className="menu-area menu-area-mobile">
									<ul className="menu">
										<li className="dropdown">
											<a href="/" className="" data-toggle="dropdown" role="button"
												aria-haspopup="true" aria-expanded="false">Trang chủ</a>
										</li>
										<li className="dropdown">
											<a href="/hamsbo" className="" data-toggle="dropdown" role="button"
												aria-haspopup="true" aria-expanded="false">Hamsbo Chat</a>
										</li>
										<li className="dropdown">
											<a href="/event" className="" data-toggle="dropdown" role="button"
												aria-haspopup="true" aria-expanded="false">Sự kiện</a>
										</li>
										<li className="dropdown">
											<a href="/explore" className="" data-toggle="dropdown" role="button"
												aria-haspopup="true" aria-expanded="false">Khám phá <span className="caret"></span></a>
										</li>
										<li className="dropdown">
											<a href="/lib" className="" data-toggle="dropdown" role="button"
												aria-haspopup="true" aria-expanded="false">Thư viện</a>
										</li>
										{/* <li className="dropdown">
									<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
										aria-haspopup="true" aria-expanded="false">About <span className="caret"></span></a>
									<ul className="dropdown-menu">
										<li><a href="about.html">About Style 01</a></li>
										<li><a href="about-2.html">About Style 02</a></li>
									</ul>
								</li> */}

									</ul>

								</div>

								{!user_name ? (
									<div className="header__cta cta-mobile">
										<button className="cta__button login"><a href="/login">Đăng nhập</a></button>
										<button className="cta__button"><a href="/register">Đăng kí</a></button>
									</div>
								) :
									(<div className="header__cta cta-mobile">
										<AccountMenu picture={picture} user_name={user_name} />

										{/* <button className="cta__button login"><a href="/personal">{user_name}</a></button> */}
									</div>)
								}
							</nav>
						</div>
					</div>
				</div>
			</header>

		</section>
	);
};

export default Header;

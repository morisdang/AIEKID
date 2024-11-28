// import HTMLFlipBook from 'react-pageflip';
import './scss/hompage.scss'
import React, { useState, useEffect, useRef } from "react";
import aboutme from '../hamsbo/images/Về chúng tôi/về chúng tôi 1.png'
import {QRCodeSVG, QRCodeCanvas} from 'qrcode.react';
     
import testimonial_icon from '../assests/testimonial_icon_03.jpg'
import {bannerContent, facilityContent, testimonialContent, FeaturesContent, Gallary} from './helpers/home_content'
import { Carousel } from 'antd';



function HomePage({userId}) {
	const [indexSwiperBullet, setIndexSwiperBullet] = useState(0);

	const [slidesToShow, setSlidesToShow] = useState(3);

	const updateSlidesToShow = () => {
		const width = window.innerWidth;
		if (width < 752) {
			setSlidesToShow(1);
		} else if (width < 992) {
			setSlidesToShow(2);
		} else {
			setSlidesToShow(3);
		}

	};

	useEffect(() => {
		updateSlidesToShow();
		window.addEventListener('resize', updateSlidesToShow);
		return () => {
			window.removeEventListener('resize', updateSlidesToShow);
		};
	}, []);

	const updateCount = () => {
		setIndexSwiperBullet((prevCount) => {
			if (prevCount === bannerContent.length - 1) {
				return 0
			} else {
				return prevCount + 1
			}

		});
		setMessage('Count updated!');
	};
	useEffect(() => {
		const interval = setInterval(() => {
			updateCount()
		}, 10000);

		// Cleanup function to clear the interval
		return () => clearInterval(interval);
	}, []);
	return (
		<div
			className='Homepage'
		// onClick={handlePageClick}
		>
			<section className="banner section-notch">
				<div className="banner-slider swiper-container">
					<div className="swiper-wrapper"
						style={{
							transform: `translate3d(${-1680 * indexSwiperBullet}px, 0px, 0px)`
						}}
					>
						{bannerContent.map((item, index) => (
							<div
                            className={`banner-item slide-one swiper-slide ${indexSwiperBullet === index ? "swiper-slide-active" : ""}`}
                                style={{
                                backgroundImage: `url('${item.link}')`,  
                                backgroundSize: 'cover',  
                                backgroundPosition: 'center',
                   
                                }}
                            >
								<div className="banner-overlay"></div>
								<div className="container">
									<div className="banner-content">
										<h3>{item.title}</h3>
										<h2>{item.logan}</h2>
										<p>{item.content_p}</p>
										<ul>
											<li><a href="#" className="button-default">Đọc thêm</a></li>
											<li><a href="/hamsbo" className="button-default">Thử ngay nào!</a></li>
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
						{bannerContent.map((item, index) => (
							<span className={`swiper-pagination-bullet ${index === indexSwiperBullet ? "swiper-pagination-bullet-active" : ""}`} onClick={() => setIndexSwiperBullet(index)}></span>
						))}
					</div>
				</div>
			</section>

            <section class="facility padding-120">
            <div class="container">
                <div class="row">
                
                {FeaturesContent.map((item, index) => (
                        <div class="col-lg-3 col-sm-6 col-xs-12">
                        <div class="facility-item">
                            <span class="">
                                <i className={`icon ${item.icon}`}></i>
                            </span>
                            <h4>{item.title}</h4>
                            <p>{item.content_p}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    <section class="page-header section-notch">
        <div class="overlay">
        <div class="container">
            <h1 class="text-3xl font-bold text-gray-900 mx-4 text-white">Sẵn sàng cho trải nghiệm học tập thông minh?</h1>
            <p class="text-xl text-gray-700 mb-4  text-white">
                Chatbot Hamsbo – người bạn đồng hành trong học tập của bạn!
            </p>
          
            <ul>
                <li><a href={!userId ? "/login": "/hamsbo"} class="button-default bg-blue-600 mt-4">
                {!userId ? "👉 Đăng ký ngay để nhận ưu đãi đặc biệt cho người mới! 🎉" : "Học cùng Hamsbo ngay và luôn !!!"}
                </a></li>
            </ul>
            {/* <ul>
            <li><a href="index.html">Home</a></li>
            <li>-</li>
            <li>Events</li>
            </ul> */}
        </div>
        </div>
    </section>
    <section className="facility padding-120">
				<div className="container">
					<div className="row">

						{facilityContent.map((item, index) => (
							<div className="col-lg-3 col-sm-6 col-xs-12">
								<div className="facility-item">
									<span className="">
										<i className={`icon ${item.icon}`}></i>
									</span>
									<h4>{item.title}</h4>
									<p>{item.content_p}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>


			<section className="about section-notch">
				<div className="overlay padding-120">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="about-image h-full">
									<img src={aboutme} alt="about image" className="img-responsive h-full object-cover object-right" />
								</div>
							</div>
							<div className="col-lg-6">
								<div className="about-content mt-lg-6">
									<h3 className='mt-4'>Về chúng tôi</h3>
									<p>
                                    HamsboKid — một sản phẩm sáng tạo từ AIDEA, tự hào mang đến những giải pháp công nghệ tiên tiến, đặc biệt là trí tuệ nhân tạo (AI), nhằm cách mạng hóa lĩnh vực giáo dục. Chúng tôi không ngừng nỗ lực xây dựng một môi trường học tập hiện đại, nơi mà trẻ em không chỉ học hỏi mà còn khám phá thế giới xung quanh thông qua những phương pháp giảng dạy đầy cảm hứng.</p>
									<p>Với các công cụ như chatbot AI thông minh và sách giáo khoa kỹ thuật số, HamsboKid tạo nên những trải nghiệm học tập cá nhân hóa, đáp ứng nhu cầu và sở thích của từng học sinh. Chúng tôi tin tưởng rằng công nghệ không chỉ là một công cụ, mà còn là chìa khóa mở ra những chân trời mới, giúp các em nhỏ trở thành những nhà sáng tạo và khám phá trong tương lai.
                                    </p>
									<ul>
										<li><a href="#" className="button-default">Đọc thêm</a></li>
										<li><a href="/hamsbo" className="button-default">Bắt đầu học ngay!</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className="gallery padding-120">
				<div className="container">
					<div className="section-header">
						<h3>Những Tính Năng Nổi Bật Của Chúng Tôi</h3>
						<p>Chúng tôi cam kết mang đến cho trẻ em một môi trường học tập hấp dẫn, nơi các em có thể học hỏi, phát triển và vui chơi.</p>
					</div>
					<ul className="gallery-menu flex flex-wrap justify-center">
						{/* <li className="active" data-filter="*">Show all</li> */}
						<li data-filter=".branding">AI Chatbot</li>
						<li data-filter=".development">Giải trí</li>
						<li data-filter=".packing">Không gian khám phá</li>
						<li data-filter=".photography">Thư viện điện tử</li>
					</ul>

					<div className="gallery-items">

                    {Gallary.map(gallery => (
                            <div className="gallery-item branding packing">
                                <div className="gallery-image">
                                    <img src={gallery} alt="gallery image" className="img-responsive" />
                                    <div className="gallery-overlay">
                                        <div className="bg"></div>
                                    </div>
                                    <div className="gallery-content">
                                        <a href={gallery} data-rel="lightcase:myCollection"><i
                                            className="icon flaticon-expand"></i></a>
                                        <h4>Product Name Here</h4>
                                        <span>By: KidsAcademy Theme</span>
                                    </div>
                                </div>
                            </div>
                        ))}

					</div>
					{/* <div className="gallery-button"><a href="/gallery" className="button-default">Xem thêm bộ sưu tập</a></div> */}
				</div>
			</section>

			<section className="page-header section-notch">
				<div className="overlay">
					<div className="container">
						<h3>🌟 Đừng bỏ lỡ những sự kiện khám phá của chúng tôi!!! 🌟</h3>
						<ul>
							<li><a href="/event" className="button-default bg-blue-600 mt-4">✨ Tham gia ngay để trải nghiệm những điều tuyệt vời! ✨</a></li>
						</ul>
						{/* <ul>
          <li><a href="index.html">Home</a></li>
          <li>-</li>
          <li>Events</li>
        </ul> */}
					</div>
				</div>
			</section>


			<section className="testimonial padding-120">
				<div className="container">
					<div className="section-header">
						<h3>Khách hàng của AIDEA nói gì?</h3>
						<p>Cùng nhau học hỏi, phát triển và thành công - Chúng tôi luôn lắng nghe và trân trọng từng ý kiến của bạn để mang đến những trải nghiệm học tập tốt nhất, giúp bạn tiến bộ từng ngày!</p>
					</div>
					<Carousel
						dots={false}
						infinite
						slidesToShow={slidesToShow}
						slidesToScroll={1}
						autoplay
					>
						{testimonialContent.map((item, index) => (
							<div className=''>
								<div className="testimonial-item"
                                         
                                >
									<div className="testimonial-details">
										<p>{item.content}</p>
										<h4>{item.name} <span>{item.role}</span></h4>
										<img src={testimonial_icon} alt="testimonial icon"
											className="img-responsive" />
									</div>
									<div className="testimonial-image">
										<img src={item.link} alt="client image"
											className="img-responsive" />
									</div>
								</div>
							</div>
						))}
					</Carousel>

				</div>
			</section>
			<section className="about section-notch">
				<div className="overlay padding-120">
					<div className="container flex flex-row items-center justify-center text-center">
								<div className="about-content mt-lg-6 mr-10 w-50">
									<h3 className='mt-4'>Phương Pháp Giáo Dục Tiên Tiến Tại HamsboKid</h3>
									<p>
                                    HamsboKid cam kết mang đến cho trẻ em một hành trình học tập thú vị, nơi mà mỗi ngày đều là một cơ hội để phát triển kỹ năng, khám phá kiến thức và trải nghiệm sự mới mẻ của những phương pháp giảng dạy tiên tiến.</p>
									<ul className='flex flex-row items-center justify-center'>
										{/* <li><a href="#" className="button-default">Bắt đầu học ngay!</a></li> */}
										<li><a target='_blank' href="/explore" className="button-default">Bắt đầu học ngay!</a></li>
									</ul>
								</div>
								<div className="h-full">
                                <div className='flex flex-row items-center justify-center text-center'>
                                    <QRCodeCanvas 
                                        id='qrcode'
                                        value='https://reactjs.org/'
                                        size={280}
                                        level={'H'}
                                        includeMargin={true}
                                        />
                                    </div>
                                    <h4 className='mt-3 text-white'> 
                                    💖 Donate to Our Team! 
                                    </h4>
                                    <h4 className='mt-3 text-white'>
                                        Thanks for Your Support! 🌟
                                    </h4>
                                </div>
               
					</div>
				</div>
			</section>


		</div>
	);
};

export default HomePage;

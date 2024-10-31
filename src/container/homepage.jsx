// import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import './scss/hompage.scss'
import React, { useState, useEffect, useRef } from "react";
import logo from '../assests/logo.png'
import banner1 from '../assests/banner_01.jpg'
import banner2 from '../assests/banner_02.jpg'
import banner3 from '../assests/banner_03.jpg'
import gallery_01 from '../assests/gallery_01.jpg'
import testimonial_icon from '../assests/testimonial_icon_03.jpg'
import {bannerContent, facilityContent, testimonialContent, FeaturesContent} from './helpers/home_content'
import { Carousel } from 'antd';

const swiperBullet = [1, 2, 3]


function HomePage() {
	const [userId, setUserId] = useState('');
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
		}, 8000);

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
							<div className={`banner-item slide-one swiper-slide ${indexSwiperBullet === index ? "swiper-slide-active" : ""}`}>
								<div className="banner-overlay"></div>
								<div className="container">
									<div className="banner-content">
										<h3>{item.title}</h3>
										<h2>{item.logan}</h2>
										<p>{item.content_p}</p>
										<ul>
											<li><a href="#" className="button-default">Đọc thêm</a></li>
											<li><a href="#" className="button-default">Thử ngay nào!</a></li>
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
    <section class="page-header section-notch">
        <div class="overlay">
        <div class="container">
            <h3>Đừng bỏ lỡ những sự kiện khám phá của chúng tôi !!!</h3>
            <ul>
                <li><a href="/event" class="button-default bg-blue-600 mt-4">Bắt đầu tham gia ngay!</a></li>
            </ul>
            {/* <ul>
            <li><a href="index.html">Home</a></li>
            <li>-</li>
            <li>Events</li>
            </ul> */}
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

			<section className="about section-notch">
				<div className="overlay padding-120">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="about-image h-full">
									<img src={banner1} alt="about image" className="img-responsive h-full object-cover object-right" />
								</div>
							</div>
							<div className="col-lg-6">
								<div className="about-content mt-lg-6">
									<h3 className='mt-4'>Về chúng tôi</h3>
									<p>HamsboKid, một sản phẩm sáng tạo đến từ AIDEA, mang đến những giải pháp công nghệ tiên tiến, đặc biệt là trí tuệ nhân tạo (AI) trong lĩnh vực giáo dục. Chúng tôi cam kết tạo ra một môi trường học tập hiện đại, nơi trẻ em có thể phát triển kỹ năng, khám phá kiến thức và trải nghiệm những phương pháp giảng dạy sáng tạo.</p>
									<p>Thông qua các công cụ như chatbot AI và sách giáo khoa kỹ thuật số, HamsboKid không chỉ giúp trẻ em học hỏi một cách thú vị mà còn cá nhân hóa trải nghiệm học tập theo nhu cầu riêng của từng em. Chúng tôi tin rằng công nghệ có thể mở ra những cánh cửa mới cho việc học và phát triển, giúp trẻ em trở thành những nhà khám phá sáng tạo trong tương lai.</p>
									<ul>
										<li><a href="#" className="button-default">Đọc thêm</a></li>
										<li><a href="#" className="button-default">Bắt đầu học ngay!</a></li>
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
						<div className="gallery-item branding packing">
							<div className="gallery-image">
								<img src={gallery_01} alt="gallery image" className="img-responsive" />
								<div className="gallery-overlay">
									<div className="bg"></div>
								</div>
								<div className="gallery-content">
									<a href={gallery_01} data-rel="lightcase:myCollection"><i
										className="icon flaticon-expand"></i></a>
									<h4>Product Name Here</h4>
									<span>By: KidsAcademy Theme</span>
								</div>
							</div>
						</div>
						<div className="gallery-item development photography">
							<div className="gallery-image">
								<img src={gallery_01} alt="gallery image" className="img-responsive" />
								<div className="gallery-overlay">
									<div className="bg"></div>
								</div>
								<div className="gallery-content">
									<a href="images/gallery/gallery_bg_02.jpg" data-rel="lightcase:myCollection"><i
										className="icon flaticon-expand"></i></a>
									<h4>Product Name Here</h4>
									<span>By: KidsAcademy Theme</span>
								</div>
							</div>
						</div>
						<div className="gallery-item branding packing">
							<div className="gallery-image">
								<img src={gallery_01} alt="gallery image" className="img-responsive" />
								<div className="gallery-overlay">
									<div className="bg"></div>
								</div>
								<div className="gallery-content">
									<a href="images/gallery/gallery_bg_03.jpg" data-rel="lightcase:myCollection"><i
										className="icon flaticon-expand"></i></a>
									<h4>Product Name Here</h4>
									<span>By: KidsAcademy Theme</span>
								</div>
							</div>
						</div>
						<div className="gallery-item development photography">
							<div className="gallery-image">
								<img src={gallery_01} alt="gallery image" className="img-responsive" />
								<div className="gallery-overlay">
									<div className="bg"></div>
								</div>
								<div className="gallery-content">
									<a href="images/gallery/gallery_bg_04.jpg" data-rel="lightcase:myCollection"><i
										className="icon flaticon-expand"></i></a>
									<h4>Product Name Here</h4>
									<span>By: KidsAcademy Theme</span>
								</div>
							</div>
						</div>
						<div className="gallery-item branding packing">
							<div className="gallery-image">
								<img src={gallery_01} alt="gallery image" className="img-responsive" />
								<div className="gallery-overlay">
									<div className="bg"></div>
								</div>
								<div className="gallery-content">
									<a href="images/gallery/gallery_bg_05.jpg" data-rel="lightcase:myCollection"><i
										className="icon flaticon-expand"></i></a>
									<h4>Product Name Here</h4>
									<span>By: KidsAcademy Theme</span>
								</div>
							</div>
						</div>
						<div className="gallery-item branding packing">
							<div className="gallery-image">
								<img src={gallery_01} alt="gallery image" className="img-responsive" />
								<div className="gallery-overlay">
									<div className="bg"></div>
								</div>
								<div className="gallery-content">
									<a href="images/gallery/gallery_bg_06.jpg" data-rel="lightcase:myCollection"><i
										className="icon flaticon-expand"></i></a>
									<h4>Product Name Here</h4>
									<span>By: KidsAcademy Theme</span>
								</div>
							</div>
						</div>
					</div>
					<div className="gallery-button"><a href="gallery.html" className="button-default">Xem thêm bộ sưu tập</a></div>
				</div>
			</section>

			<section className="page-header section-notch">
				<div className="overlay">
					<div className="container">
						<h3>Đừng bỏ lỡ những sự kiện khám phá của chúng tôi !!!</h3>
						<ul>
							<li><a href="/event" className="button-default bg-blue-600 mt-4">Bắt đầu tham gia ngay!</a></li>
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
								<div className="testimonial-item">
									<div className="testimonial-details">
										<p>{item.content}</p>
										<h4>{item.name} <span>{item.role}</span></h4>
										<img src={testimonial_icon} alt="testimonial icon"
											className="img-responsive" />
									</div>
									<div className="testimonial-image">
										<img src={gallery_01} alt="client image"
											className="img-responsive" />
									</div>
								</div>
							</div>
						))}
					</Carousel>

				</div>
			</section>



		</div>
	);
};

export default HomePage;

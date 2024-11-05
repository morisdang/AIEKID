import book_1 from '../../hamsbo/images/ảnh bìa sgk/khtn lớp 6.png'
import book_2 from '../../hamsbo/images/ảnh bìa sgk/khtn lớp 5.png'
import book_3 from '../../hamsbo/images/ảnh bìa sgk/lịch sử đl lớp 5.png'
import book_4 from '../../hamsbo/images/ảnh bìa sgk/TA lớp 6.png'
import book_5 from '../../hamsbo/images/ảnh bìa sgk/văn lớp 5.png'

import pdf_book_1 from '../../hamsbo/images/folder sgk/KHTN lớp 6.pdf'
import pdf_book_2 from '../../hamsbo/images/folder sgk/KHTN lớp 5.pdf'
import pdf_book_3 from '../../hamsbo/images/folder sgk/lịch sử địa lí lớp 5.pdf'
import pdf_book_4 from '../../hamsbo/images/folder sgk/TA lớp 6.pdf'
import pdf_book_5 from '../../hamsbo/images/folder sgk/văn lớp 5.pdf'


export const booksData = [
    {
      book_id: '1',
      title: 'Khoa học tự nhiên lớp 6',
      rating: 4.3,
      year: 2001,
      publisher: 'Khoa học tự nhiên lớp 6',
      pdf_uri:pdf_book_1,
      image_uri: book_1,
      book_code: 'bio',
      label: 'KHTN',
      premium: 1,
      level: 6,
      price : 1000
    },
    {
      book_id: '2',
      title: 'Khoa học tự nhiên lớp 5',
      rating: 4.3,
      year: 2004,
      publisher: 'Cánh diều',
      book_code: 'bio',
      level: 5,
      label: 'KHTN',
      premium: 0,
      image_uri: book_2,
      pdf_uri:pdf_book_2,

      price : 1000000
    },


    {
      book_id: '3',
      title: 'Lịch sủ địa lý 5',
      rating: 4.3,
      year: 2006,
      publisher: 'Cánh diều',
      book_code: 'history',
      label: 'Toán',
      level: 5,
      premium: 0,
      price : 1000,
      pdf_uri:pdf_book_3,

      image_uri: book_3
    },
    {
      book_id: '4',
      title: 'Tiếng anh 6',
      rating: 4.3,
      year: 2006,
      publisher: 'Cánh diều',
      book_code: 'english',
      label: 'Toán',
      level: 6,
      premium: 0,
      price : 1000,
      pdf_uri:pdf_book_4,

      image_uri: book_4
    },
    {
      book_id: '5',
      title: 'Ngữ văn 5',
      rating: 4.3,
      year: 2006,
      publisher: 'Cánh diều',
      book_code: 'literature',
      label: 'Toán',
      level: 5,
      premium: 0,
      price : 1000,
      pdf_uri:pdf_book_5,

      image_uri: book_5
    },
 
  ];
  

  
  
  
  
  
  
  
  
  
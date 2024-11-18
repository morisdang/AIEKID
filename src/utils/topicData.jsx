import theZoobg1 from "../assets/images/canvas/the zoo/background1.jpg";
import theZoobg2 from "../assets/images/canvas/the zoo/background2.jpg";
import theZoobg3 from "../assets/images/canvas/the zoo/background3.jpg";

const topicContentData = [
  {
    id: "123",
    contentList: [
      {
        name: "Đi đến The Zoo",
        title: (
          <span>
            Một buổi sáng đẹp trời, Hamsbo quyết định đến{" "}
            <strong>The Zoo</strong> để khám phá các loài vật. Cậu hào hứng nói
          </span>
        ),
        descriptionList: [
          <span>
            Today is going to be amazing! (Hôm nay sẽ tuyệt lắm đây!)
          </span>,
        ],
        language: {
          en: <span>The Zoo</span>,
          vn: <span>Sở thú</span>,
          code: <span>/ðə zuː/</span>,
          image: "",
          sideImage: "",
        },
        backgroundImage: theZoobg1,
      },
      {
        name: "Con sư tử",
        title: (
          <span>
            Hamsbo đi đến chuồng sư tử đầu tiên. Ngay khi nhìn
            <strong>Lion</strong>, cậu liền thốt lên
          </span>
        ),
        descriptionList: [
          <span>The lion is so big! (Sư tử to quá!)</span>,
          <span>
            Lions are the king of the jungle.(Sư tử là vua của rừng xanh.)
          </span>,
        ],
        language: {
          en: <span>Lion</span>,
          vn: <span>Sư tử</span>,
          code: <span>/ˈlaɪ.ən/</span>,
          image: "",
          sideImage: "",
        },
        backgroundImage: theZoobg2,
      },
      {
        name: "Con hươu cao cổ",
        title: (
          <span>
            Kế tiếp, Hamsbo gặp một con <strong>Giraffe</strong> cao chót vót
          </span>
        ),
        descriptionList: [
          <span>Look! (Nhìn kìa!)</span>,
          <span>
            The giraffe has a very long neck. (Hươu cao cổ có cái cổ thật dài.)
          </span>,
        ],
        language: {
          en: <span>Giraffe</span>,
          vn: <span>Hươu cao cổ</span>,
          code: <span>/dʒəˈræf/</span>,
          image: "",
          sideImage: "",
        },
        backgroundImage: theZoobg1,
      },
      {
        name: "Con khỉ",
        title: (
          <span>
            Đi thêm một đoạn, Hamsbo nhìn thấy những chú{" "}
            <strong>Monkeys</strong> đang đu qua lại giữa các cành cây
          </span>
        ),
        descriptionList: [
          <span>Look how they jump! (Nhìn cách chúng nhảy kìa!)</span>,
          <span>Monkeys love bananas. (Khỉ rất thích chuối)</span>,
        ],
        language: {
          en: <span>Monkey</span>,
          vn: <span>Khỉ</span>,
          code: <span>/ˈmʌŋ.ki/</span>,
          image: "",
          sideImage: "",
        },
        backgroundImage: theZoobg2,
      },
      {
        name: "Con voi",
        title: (
          <span>
            Hamsbo đến chuồng <strong>Elephant</strong>. Cậu thấy những chú voi
            đang nhâm nhi quả táo
          </span>
        ),
        descriptionList: [
          <span>
            Elephants use their trunks to drink water and pick up food. (Voi
            dùng vòi để uống nước và nhặt thức ăn.)
          </span>,
          <span>It’s so cute! (Đáng yêu quá!)</span>,
        ],
        language: {
          en: <span>Elephant</span>,
          vn: <span>Voi</span>,
          code: <span>/ˈel.ɪ.fənt/</span>,
          image: "",
          sideImage: "",
        },
        backgroundImage: theZoobg1,
      },
    ],
    totalContent: {
      name: "Hành trình kết thúc",
      title: (
        <span>
          Vậy là hành trình khám phá The Zoo hôm nay đã kết thúc rồi. Chúng mình
          cùng nhau nhìn lại những loài vật đã xuất hiện trong bài học hôm nay
          nha!
        </span>
      ),
      descriptionList: [
        <span>The Zoo /ðə zuː/ – Sở thú</span>,
        <span>Lion /ˈlaɪ.ən/ – Sư tử</span>,
        <span>Giraffe /dʒəˈræf/ – Hươu cao cổ</span>,
        <span>Monkey /ˈmʌŋ.ki/ – Khỉ</span>,
        <span>Elephant /ˈel.ɪ.fənt/ – Voi</span>,
      ],
      backgroundImage: theZoobg1,
    },
    questions: [
      {
        title: <span>What is the "king of the jungle"?</span>,
        answerList: ["Elephant", "Lion", "Penguin", "Giraffe"],
        correctAnswer: "Lion",
      },
      {
        title: <span>Which animal uses its trunk to drink water?</span>,
        answerList: ["Giraffe", "Monkey", "Elephant", "Lion"],
        correctAnswer: "Elephant",
      },
      {
        title: <span>What do monkeys love to eat?</span>,
        answerList: ["Apples", "Bananas", "Leaves", "Fish"],
        correctAnswer: "Bananas",
      },
      {
        title: <span>Which animal has a long neck?</span>,
        answerList: ["Lion", "Elephant", "Giraffe", "Monkey"],
        correctAnswer: "Giraffe",
      },
    ],
  },
  {
    id: "34",
    contentList: [
      {
        title: (
          <span>
            Hi everyone! (Xin chào mọi người!) Mình là Hamsbo, và hôm nay mình
            sẽ làm một cái vlog để giới thiệu các phòng trong ngôi nhà của mình.
            Các bạn đã sẵn sàng chưa? Cùng bắt đầu thôi nào!
          </span>
        ),
        descriptionList: [],
        language: {
          en: <span>House</span>,
          vn: <span>Ngôi nhà</span>,
          code: <span>/haʊs/</span>,
          image: "",
          sideImage: "",
        },
      },
      {
        title: "",
        descriptionList: [
          <span>“This is my living room.” (Đây là phòng khách của mình.)</span>,
          <span>
            “It’s where we watch TV and relax.” (Đây là nơi gia đình mình xem TV
            và thư giãn.)
          </span>,
        ],
        language: {
          en: <span>Living Room</span>,
          vn: <span>Phòng khách</span>,
          code: <span>/ˈlɪv.ɪŋ ˌruːm/</span>,
          image: "",
          sideImage: "",
        },
      },
      {
        title: (
          <span>
            Hamsbo chỉ vào chiếc <strong>chair</strong> (ghế) và nói:
          </span>
        ),
        descriptionList: [
          <span>
            I love reading books here. (Mình thích ngồi đây đọc sách.)
          </span>,
          <span>
            I love books about dinosaurs!" (Tôi thích sách về khủng long!)
          </span>,
        ],
        language: {
          en: <span>Chair</span>,
          vn: <span>Ghế</span>,
          code: <span>/tʃer/</span>,
          image: "",
          sideImage: "",
        },
      },
      {
        title: "",
        descriptionList: [
          <span>
            “Welcome to the <strong>kitchen</strong>!” (Chào mừng các bạn đến
            với phòng bếp!)
          </span>,
          <span>
            “This is where my mom makes yummy food.” (Đây là nơi mẹ mình nấu
            những món ăn ngon.)
          </span>,
          <span>
            “I sometimes help her in the kitchen.” (Thỉnh thoảng mình giúp mẹ
            nấu ăn.)
          </span>,
        ],
        language: {
          en: <span>Kitchen</span>,
          vn: <span>Phòng bếp</span>,
          code: <span>/ˈkɪtʃ.ən/</span>,
          image: "",
          sideImage: "",
        },
      },
      {
        title: "",
        descriptionList: [
          <span>
            “Here is the <strong>bathroom</strong>!” (Đây là nhà tắm!)
          </span>,
          <span>
            “I wash my hands and brush my teeth here every day.” (Mình rửa tay
            và đánh răng ở đây mỗi ngày.)
          </span>,
          <span>
            “Don’t forget to wash your hands before eating!” (Đừng quên rửa tay
            trước khi ăn nhé!)
          </span>,
        ],
        language: {
          en: <span>Bathroom</span>,
          vn: <span>Nhà tắm</span>,
          code: <span>/ˈbæθ.ruːm/</span>,
          image: "",
          sideImage: "",
        },
      },
      {
        title: "",
        descriptionList: [
          <span>
            “This is my <strong>bedroom</strong>.” (Đây là phòng ngủ của mình.)
          </span>,
          <span>
            “It’s where I sleep and dream.” (Đây là nơi mình ngủ và mơ mộng.)
          </span>,
          <span>“I keep my toys here.” (Mình để đồ chơi ở đây.)</span>,
        ],
        language: {
          en: <span>Bedroom</span>,
          vn: <span>Phòng ngủ</span>,
          code: <span>/ˈbed.ruːm/</span>,
          image: "",
          sideImage: "",
        },
      },
    ],
    totalContent: {
      title: (
        <span>
          “That’s all for today!” (Vậy là xong rồi!) Chúng ta hãy cùng nhìn lại
          các từ vựng hôm nay nhé!
        </span>
      ),
      descriptionList: [
        <span>House /haʊs/ – Ngôi nhà</span>,
        <span>Living room /ˈlɪv.ɪŋ ˌruːm/ – Phòng khách</span>,
        <span>Kitchen /ˈkɪtʃ.ən/ – Phòng bếp</span>,
        <span>Bathroom /ˈbæθ.rʊm/ – Nhà tắm</span>,
        <span>Bedroom /ˌbed.ruːm/ – Phòng ngủ</span>,
        <span>Table /ˈteɪ.bəl/ – Bàn</span>,
        <span>Chair /tʃer/ – Ghế</span>,
        <span>Book /bʊk/ – Sách</span>,
        <span>Lamp /læmp/ – Đèn</span>,
      ],
    },
    questions: [
      {
        title: <span>Which room did Hamsbo visit first?</span>,
        answerList: ["Kitchen", "Living room", "Bedroom", "Bathroom"],
        correctAnswer: "Living room",
      },
      {
        title: <span>Where does Hamsbo like to read books?</span>,
        answerList: ["Living room", "Kitchen", "Bedroom", "Bathroom"],
        correctAnswer: "Living room",
      },
      {
        title: <span>What does Hamsbo like to do on the sofa?</span>,
        answerList: ["Read books", "Watch movies", "Sleep", "Play with toys"],
        correctAnswer: "Read books",
      },
      {
        title: (
          <span>What word did Hamsbo use for the light in the bedroom?</span>
        ),
        answerList: ["Table", "Chair", "Lamp", "Book"],
        correctAnswer: "Lamp",
      },
    ],
  },
  {
    id: "546",
    contentList: [
      {
        name: "Bữa ăn của Hamsbo",
        title: (
          <span>
            Hôm nay, Hamsbo vừa được điểm 10 trong bài kiểm tra tiếng Anh!{" "}
            <br />
            Khi về nhà, mẹ cậu mỉm cười và nói:
          </span>
        ),
        footer: (
          <span>
            Hamsbo háo hức tưởng tượng <strong>favorite foods</strong> (các món
            ăn yêu thích) của mình cho bữa tiệc tối nay.
          </span>
        ),
        descriptionList: [
          <span>
            You did a great job today! I’ll make you a delicious meal tonight!
            (Hôm nay con đã làm rất tốt! Tối nay mẹ sẽ thưởng cho con một bữa ăn
            ngon! )
          </span>,
        ],
        language: {
          en: <span>Favorite food</span>,
          vn: <span>Món ăn yêu thích</span>,
          code: <span>/ˈfeɪ.vər.ɪt fuːd/</span>,
          image: "",
          sideImage: "",
        },
        backgroundImage: theZoobg1,
      },
      {
        name: "Bánh Pizza",
        title: (
          <span>
            "I hope there’s <strong>pizza</strong>!" (Mình hy vọng có pizza!)
            Hamsbo nghĩ ngay đến chiếc pizza nóng hổi với phô mai kéo dài và xúc
            xích thơm lừng.
          </span>
        ),
        descriptionList: [
          <span>
            "<strong>Pizza</strong> is my favorite food!" (Pizza là món ăn yêu
            thích của mình)
          </span>,
        ],
        language: {
          en: <span>Pizza</span>,
          vn: <span>Bánh pizza</span>,
          code: <span>/ˈpiːt.sə/</span>,
          image: "",
          sideImage: "",
        },
        backgroundImage: theZoobg1,
      },
      {
        name: "Món gà rán",
        title: (
          <span>
            Tiếp theo, Hamsbo nghĩ đến món <strong>fried chicken</strong> (gà
            rán).
          </span>
        ),
        footer: (
          <span>
            Cậu cười thầm khi tưởng tượng miếng gà vàng ruộm, thơm phức và giòn
            tan.
          </span>
        ),
        descriptionList: [
          <span>
            "I’d love some crispy chicken!" (Mình thích miếng gà giòn tan)
          </span>,
        ],
        language: {
          en: <span>Fried chicken</span>,
          vn: <span>Gà rán</span>,
          code: <span>/fraɪd ˈtʃɪk.ən/</span>,
          image: "",
          sideImage: "",
        },
        backgroundImage: theZoobg1,
      },
      {
        name: "Món mì ý",
        title: (
          <span>
            Hamsbo còn nghĩ đến món <strong>spaghetti</strong> (mì Ý) nữa.
          </span>
        ),
        footer: (
          <span>
            Cậu thích thú tưởng tượng đĩa mì Ý với phô mai phủ lên trên và sốt
            cà chua đỏ au.
          </span>
        ),
        descriptionList: [
          <span>
            "Maybe there will be spaghetti with tomato sauce!" (Có thể sẽ có mì
            Ý với sốt cà chua nhỉ!)
          </span>,
        ],
        language: {
          en: <span>Spaghetti</span>,
          vn: <span>Mì Ý</span>,
          code: <span>/spəˈɡet.i/</span>,
          image: "",
          sideImage: "",
        },
        backgroundImage: theZoobg1,
      },
      {
        name: "Món salad",
        title: (
          <span>
            Cuối cùng, Hamsbo nghĩ đến món <strong>salad</strong> (rau trộn)
            tươi ngon.
          </span>
        ),
        footer: (
          <span>
            Hamsbo biết rằng salad không chỉ ngon mà còn giúp cậu khỏe mạnh.
          </span>
        ),
        descriptionList: [
          <span>
            "A little salad would make the meal perfect!" (Thêm một ít salad sẽ
            làm bữa ăn hoàn hảo hơn!)
          </span>,
        ],
        language: {
          en: <span>Salad</span>,
          vn: <span>Rau trộn</span>,
          code: <span>/ˈsæl.əd/</span>,
          image: "",
          sideImage: "",
        },
        backgroundImage: theZoobg1,
      },
      {
        name: "Ice cream (kem)",
        title: (
          <span>
            Và đương nhiên, Hamsbo không thể quên món tráng miệng yêu thích của
            mình:
          </span>
        ),
        footer: (
          <span>
            Cậu hình dung ly kem lạnh ngọt vị dâu và vani, thứ làm cậu luôn thấy
            vui mỗi lần ăn.
          </span>
        ),
        descriptionList: [
          <span>
            <strong>ice cream</strong> (kem). "I hope we have{" "}
            <strong>ice cream</strong> for dessert!" (Mình mong sẽ có kem làm
            món tráng miệng!)
          </span>,
        ],
        language: {
          en: <span>Ice Cream</span>,
          vn: <span>Kem</span>,
          code: <span>/aɪs kriːm/</span>,
          image: "",
          sideImage: "",
        },
        backgroundImage: theZoobg1,
      },
    ],
    totalContent: {
      name: "Tổng kết món ăn",
      title: (
        <span>
          Hamsbo có quá nhiều món ăn yêu thích đúng không nào! Chúng mình cùng
          nhìn lại danh sách những món ăn đó nhé:
        </span>
      ),
      descriptionList: [
        <span>
          Favorite foods /ˈfeɪ.vər.ɪt fuːdz/ – Những món ăn yêu thích
        </span>,
        <span>Pizza /ˈpiːt.sə/ – Bánh pizza</span>,
        <span>Fried chicken /fraɪd ˈtʃɪk.ən/ – Gà rán</span>,
        <span>Spaghetti /spəˈɡet.i/ – Mì Ý</span>,
        <span>Salad /ˈsæl.əd/ – Rau trộn</span>,
        <span>Ice cream /aɪs kriːm/ – Kem</span>,
      ],

      backgroundImage: theZoobg1,
    },
    questions: [
      {
        title: <span>Why did Hamsbo’s mom reward him?</span>,
        answerList: [
          "He helped clean the house",
          "He got a perfect score on his test",
          "He finished reading a book",
          "He did his homework",
        ],
        correctAnswer: "He got a perfect score on his test",
      },
      {
        title: <span>What food does Hamsbo dream about eating?</span>,
        answerList: ["Fried chicken", "Coca cola", "Soup", "Fruit"],
        correctAnswer: "Fried chicken",
      },
      {
        title: <span>Which dessert does Hamsbo hope to have?</span>,
        answerList: ["Ice cream", "Cake", "Chocolate", "Cookies"],
        correctAnswer: "Ice cream",
      },
    ],
  },
  {
    id: "547",
    type: "leftCard",
    contentList: [
      {
        name: "Anh hùng Ngô Quyền",
        type: "leftCard",
        title: (
          <span>
            Hôm nay, chúng ta sẽ cùng nhau khám phá câu chuyện anh hùng của Ngô
            Quyền, người đã dùng cọc gỗ để đánh bại giặc Ngoại xâm, mang lại độc
            lập cho đất nước.
          </span>
        ),
        backgroundImage: theZoobg1,
      },
      {
        name: "Năm 938",
        type: "leftCard",
        title: (
          <span>
            Năm 938, quân giặc muốn đưa quân sang xâm chiếm nước ta. Họ chuẩn bị
            một đội thuyền lớn do con trai của vua Nam Hán là Hoằng Tháo chỉ
            huy, với hy vọng sẽ đánh bại người Việt và chiếm lấy đất đai. Nhưng
            Ngô Quyền đã sớm biết được ý định của chúng và chuẩn bị một kế hoạch
            vô cùng thông minh.
          </span>
        ),
        right: {
          image: theZoobg1,
        },
        backgroundImage: theZoobg1,
      },
      {
        name: "Ngô Quyền dụ quân Nam Hán",
        type: "leftCard",
        title: (
          <span>
            Ngô Quyền dụ quân Nam Hán đi vào lúc nước triều đang lên, khiến giặc
            không thể nhìn thấy các cọc gỗ dưới lòng sông. Khi quân Nam Hán tiến
            sâu vào cửa sông Bạch Đằng, nước bắt đầu rút xuống nhanh chóng.
            Những chiếc thuyền lớn của giặc va vào cọc gỗ, bị thủng và mắc kẹt.
            Đúng lúc đó, Ngô Quyền ra lệnh cho quân ta tấn công dồn dập. Giữa sự
            hỗn loạn, thuyền của Hoằng Tháo cũng bị đâm chìm. Không thể thoát
            thân, quân giặc bị tiêu diệt hoàn toàn.
          </span>
        ),
        right: {
          image: theZoobg1,
        },
        backgroundImage: theZoobg1,
      },
    ],
    totalContent: {
      name: "Tổng kết",
      type: "oneCard",
      title: (
        <span>
          Chiến thắng Bạch Đằng vào năm 938 không chỉ đánh tan quân Nam Hán mà
          còn chấm dứt hơn 1000 năm Bắc thuộc, mở ra thời kỳ độc lập cho dân tộc
          Việt Nam. Ngô Quyền sau chiến thắng này lên ngôi vua, đặt nền móng cho
          sự phát triển của nước Đại Việt sau này.
        </span>
      ),

      backgroundImage: theZoobg1,
    },
    questions: [
      {
        title: <span>Ngô Quyền đánh bại quân Nam Hán vào năm nào?</span>,
        answerList: ["938", "939", "940", "941"],
        correctAnswer: "938",
      },
      {
        title: (
          <span>
            Quân Nam Hán tiến vào sông Bạch Đằng dưới sự chỉ huy của ai?
          </span>
        ),
        answerList: ["Hoằng Tháo", "Lưu Bang", "Lý Bí", "Trưng Trắc"],
        correctAnswer: "Hoằng Tháo",
      },
      {
        title: (
          <span>Ngô Quyền đã dùng kế sách gì để tiêu diệt quân Nam Hán?</span>
        ),
        answerList: [
          "Bố trí mai phục trên núi",
          "Đóng cọc gỗ nhọn xuống lòng sông",
          "Đốt cháy thuyền giặc",
          "Đóng cửa thành để thủ",
        ],
        correctAnswer: "Đóng cọc gỗ nhọn xuống lòng sông",
      },
      {
        title: (
          <span>Thời điểm nào Ngô Quyền ra lệnh tấn công quân Nam Hán?</span>
        ),
        answerList: [
          "Khi trời tối",
          "Khi thủy triều lên",
          "Khi thủy triều rút",
          "Khi trời mưa",
        ],
        correctAnswer: "Khi thủy triều rút",
      },
      {
        title: <span>Chiến thắng Bạch Đằng của Ngô Quyền có ý nghĩa gì?</span>,
        answerList: [
          "Khai sinh nhà Hậu Lý",
          "Chấm dứt hơn 1000 năm Bắc thuộc",
          "Khởi đầu thời kỳ Trịnh - Nguyễn",
          "Kết thúc triều đại nhà Lý",
        ],
        correctAnswer: "Chấm dứt hơn 1000 năm Bắc thuộc",
      },
    ],
  },
  {
    id: "548",
    type: "leftCard",
    contentList: [
      {
        name: "Nam Quốc Sơn Hà",
        type: "leftCard",
        title: (
          <span>
            Vào thế kỷ 11, dưới thời vua Lý Nhân Tông, đất nước Đại Việt bị quân
            Tống đe dọa xâm lược. Trước tình hình đó, vua đã tin tưởng giao phó
            cho một vị tướng tài ba là Lý Thường Kiệt để bảo vệ đất nước. Lý
            Thường Kiệt không chỉ là một vị tướng dũng cảm mà còn rất mưu trí và
            luôn hết lòng vì đất nước.
          </span>
        ),
        backgroundImage: theZoobg1,
      },
      {
        name: " Lý Thường Kiệt quyết định",
        type: "leftCard",
        title: (
          <span>
            Lý Thường Kiệt quyết định không chờ đợi quân Tống tấn công mà chủ
            động dẫn quân sang đánh vào đất Tống trước. Ông tổ chức một đội quân
            tinh nhuệ, tiến hành một cuộc tấn công bất ngờ vào các căn cứ của
            quân Tống bên bờ sông Như Nguyệt
          </span>
        ),
        right: {
          image: theZoobg1,
        },
        backgroundImage: theZoobg1,
      },
      {
        name: "Ngô Quyền dụ quân Nam Hán",
        type: "leftCard",
        title: (
          <span>
            Ngô Quyền dụ quân Nam Hán đi vào lúc nước triều đang lên, khiến giặc
            không thể nhìn thấy các cọc gỗ dưới lòng sông. Khi quân Nam Hán tiến
            sâu vào cửa sông Bạch Đằng, nước bắt đầu rút xuống nhanh chóng.
            Những chiếc thuyền lớn của giặc va vào cọc gỗ, bị thủng và mắc kẹt.
            Đúng lúc đó, Ngô Quyền ra lệnh cho quân ta tấn công dồn dập. Giữa sự
            hỗn loạn, thuyền của Hoằng Tháo cũng bị đâm chìm. Không thể thoát
            thân, quân giặc bị tiêu diệt hoàn toàn.
          </span>
        ),
        right: {
          image: theZoobg1,
        },
        backgroundImage: theZoobg1,
      },
    ],
    totalContent: {
      name: "Tổng kết",
      type: "oneCard",
      title: (
        <span>
          Chiến thắng Bạch Đằng vào năm 938 không chỉ đánh tan quân Nam Hán mà
          còn chấm dứt hơn 1000 năm Bắc thuộc, mở ra thời kỳ độc lập cho dân tộc
          Việt Nam. Ngô Quyền sau chiến thắng này lên ngôi vua, đặt nền móng cho
          sự phát triển của nước Đại Việt sau này.
        </span>
      ),

      backgroundImage: theZoobg1,
    },
    questions: [
      {
        title: <span>Ngô Quyền đánh bại quân Nam Hán vào năm nào?</span>,
        answerList: ["938", "939", "940", "941"],
        correctAnswer: "938",
      },
      {
        title: (
          <span>
            Quân Nam Hán tiến vào sông Bạch Đằng dưới sự chỉ huy của ai?
          </span>
        ),
        answerList: ["Hoằng Tháo", "Lưu Bang", "Lý Bí", "Trưng Trắc"],
        correctAnswer: "Hoằng Tháo",
      },
      {
        title: (
          <span>Ngô Quyền đã dùng kế sách gì để tiêu diệt quân Nam Hán?</span>
        ),
        answerList: [
          "Bố trí mai phục trên núi",
          "Đóng cọc gỗ nhọn xuống lòng sông",
          "Đốt cháy thuyền giặc",
          "Đóng cửa thành để thủ",
        ],
        correctAnswer: "Đóng cọc gỗ nhọn xuống lòng sông",
      },
      {
        title: (
          <span>Thời điểm nào Ngô Quyền ra lệnh tấn công quân Nam Hán?</span>
        ),
        answerList: [
          "Khi trời tối",
          "Khi thủy triều lên",
          "Khi thủy triều rút",
          "Khi trời mưa",
        ],
        correctAnswer: "Khi thủy triều rút",
      },
      {
        title: <span>Chiến thắng Bạch Đằng của Ngô Quyền có ý nghĩa gì?</span>,
        answerList: [
          "Khai sinh nhà Hậu Lý",
          "Chấm dứt hơn 1000 năm Bắc thuộc",
          "Khởi đầu thời kỳ Trịnh - Nguyễn",
          "Kết thúc triều đại nhà Lý",
        ],
        correctAnswer: "Chấm dứt hơn 1000 năm Bắc thuộc",
      },
    ],
  },
];

export default topicContentData;

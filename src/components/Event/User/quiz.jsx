import doremon from '../../../assests/doremon.jpg'




let quiz1 = [
    {
        type: { value: '1', label: 'Quiz' }, 
        title: 'Sơn Tinh là ai trong huyền thoại?', 
        questions: { 1: 'Thần núi', 2: 'Thần biển', 3: 'Thần sông', 4: 'Thần rừng' }, 
        ansCorrect: '1', 
        pointType: { value: '1', label: 'Standard' }, 
        selectType: { value: '1', label: 'Single-select' }, 
        timeLimit: { value: '2', label: '15 seconds' }, 
        previewImage: doremon,
    },
    {
        type: { value: '1', label: 'Quiz' }, 
        title: 'Thủy Tinh là ai trong câu chuyện Sơn Tinh - Thủy Tinh?', 
        questions: { 1: 'Thần biển', 2: 'Con mèo', 3: 'Cá voi', 4: 'Thần trời' }, 
        ansCorrect: '1', 
        pointType: { value: '1', label: 'Standard' }, 
        selectType: { value: '1', label: 'Single-select' }, 
        timeLimit: { value: '2', label: '15 seconds' }, 
        previewImage: doremon,
    },
    {
        type: { value: '2', label: 'True or False' }, 
        title: 'Sơn Tinh thắng Thủy Tinh trong cuộc thi?', 
        questions: { 1: 'Đúng', 2: 'Sai' },
        ansCorrect: '1', 
        pointType: { value: '1', label: 'Standard' },
        selectType: { value: '1', label: 'Single-select' },
        timeLimit: { value: '1', label: '5 seconds' },
        previewImage: doremon,
    },
    {
        type: { value: '1', label: 'Quiz' }, 
        title: 'Ai là con gái của vua Hùng trong huyền thoại Sơn Tinh - Thủy Tinh?', 
        questions: { 1: 'Mỵ Nương', 2: 'Lý Lan', 3: 'Hạ Lan', 4: 'Vũ Lan' }, 
        ansCorrect: '1', 
        pointType: { value: '1', label: 'Standard' }, 
        selectType: { value: '1', label: 'Single-select' }, 
        timeLimit: { value: '2', label: '15 seconds' }, 
        previewImage: doremon,
    },
    {
        type: { value: '2', label: 'True or False' }, 
        title: 'Thủy Tinh luôn luôn thắng Sơn Tinh trong mọi cuộc thi?', 
        questions: { 1: 'Đúng', 2: 'Sai' },
        ansCorrect: '2', 
        pointType: { value: '1', label: 'Standard' },
        selectType: { value: '1', label: 'Single-select' },
        timeLimit: { value: '1', label: '5 seconds' },
        previewImage: doremon,
    },
    {
        type: { value: '1', label: 'Quiz' }, 
        title: 'Sau khi thua, Thủy Tinh làm gì?', 
        questions: { 1: 'Để lại nước ngập khắp nơi', 2: 'Chạy đi trốn', 3: 'Giảng hòa với Sơn Tinh', 4: 'Chắc chắn sẽ đánh bại Sơn Tinh lần sau' }, 
        ansCorrect: '1', 
        pointType: { value: '2', label: 'Double points' }, 
        selectType: { value: '1', label: 'Single-select' }, 
        timeLimit: { value: '3', label: '20 seconds' }, 
        previewImage: doremon,
    },
    {
        type: { value: '1', label: 'Quiz' }, 
        title: 'Sơn Tinh có sức mạnh gì trong cuộc thi?', 
        questions: { 1: 'Sức mạnh của núi', 2: 'Sức mạnh của biển', 3: 'Sức mạnh của gió', 4: 'Sức mạnh của lửa' }, 
        ansCorrect: '1', 
        pointType: { value: '2', label: 'Double points' }, 
        selectType: { value: '1', label: 'Single-select' }, 
        timeLimit: { value: '1', label: '5 seconds' }, 
        previewImage: doremon,
    },
    {
        type: { value: '2', label: 'True or False' }, 
        title: 'Sơn Tinh cầu hôn Mỵ Nương bằng lễ vật từ núi?', 
        questions: { 1: 'Đúng', 2: 'Sai' },
        ansCorrect: '1', 
        pointType: { value: '1', label: 'Standard' },
        selectType: { value: '1', label: 'Single-select' },
        timeLimit: { value: '2', label: '15 seconds' },
        previewImage: doremon,
    },
    {
        type: { value: '1', label: 'Quiz' }, 
        title: 'Cuộc thi giữa Sơn Tinh và Thủy Tinh là để làm gì?', 
        questions: { 1: 'Cầu hôn Mỵ Nương', 2: 'Giành ngôi vua', 3: 'Chinh phục núi non', 4: 'Đo sức mạnh của thần' }, 
        ansCorrect: '1', 
        pointType: { value: '1', label: 'Standard' }, 
        selectType: { value: '1', label: 'Single-select' }, 
        timeLimit: { value: '2', label: '15 seconds' }, 
        previewImage: doremon,
    }
];


export const quiz = {
    quiz1: quiz1
}
import React from 'react';
import Steppers, {LinearStepper} from '../Stepper';
import LinearProgressBar from '../LinearProgressBar';
import CircleProgress from '../CircleProgress';
import AchieveCard from './AchieveCard';
const stepper = ['ham học hỏi', 'hăng hái - năng nổ', 'thông thái', 'đẳng xì cấp', "Boss"];
const linearStepper = ['1','2','3','4','5'];
const sections = [
    {
      badge_id: 'Top 1 Quý I',
      title: 'Top 1 Quý I',
      color: 'bg-blue-500',
      requirements:{},
      progress:10,
      bonus:250,
      message:"You've got this achievement completely"
    },
    {
      badge_id: 'Top 1 Quý I',
      title: 'Top 1 Quý I',
      color: 'bg-blue-500',
      requirements:{},
      progress:10,
      bonus:250,
      message:"You've got this achievement completely"
    },
    {
      badge_id: 'Top 1 Quý I',
      title: 'Top 1 Quý I',
      color: 'bg-blue-500',
      requirements:{},
      progress:100,
      bonus:250,
      message:"You've got this achievement completely"
    },

]
const Achievement = () => {

    return (
        <div className="flex-grow p-10">
            <h2 className="text-3xl font-bold mb-6">Achievement</h2>
            <Steppers
            stepper={stepper}
            activeStep={1}
            />

            {/* Form Section */}
            <div className="space-y-6 mt-10">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">Badge</h3>
                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sections.map((section) => (
                        <AchieveCard section={section}/>
                                 
                    ))}
                    </div>
                </div>
 

            </div>
        </div>
    );
};

export default Achievement;






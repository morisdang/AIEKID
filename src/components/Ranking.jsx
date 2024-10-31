import * as React from 'react';

import './scss/Ranking.scss'


export default function Ranking({rankingDetail}) {
  const [value, setValue] = React.useState(2);


  return (
    <div className='ranking-wrapper'>

        <div className="flex flex-row justify-around items-center flex-no-wrap mb-3">
            <h1 className='text-center w-6/12'>Bảng xếp hạng</h1>
            <button className="continue w-6/12">Xem chi tiết</button>
            {/* <button className="share">
            <i className="ph ph-share-network"></i>
            </button> */}
        </div>
        <div id="leaderboard">
            <div className="ribbon"></div>
            <table>
            {rankingDetail.map((item, index) => (
                    <tr>
                        <td className="number">{index +1}</td>
                        <td className="name">{item.name}</td>
                        <td className="points">{item.point}
                            {
                                index ===0 ? 
                                <img className="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal"/>
                                :
                                ""
                            }
                            
                        </td>
                    </tr>
            ))}
                
            </table>
      
        </div>
    </div>
  );
}

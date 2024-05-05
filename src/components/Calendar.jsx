import React from 'react';
import Event from './Event';

const Calendar = () => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>

                <tr>
                    <td className="time">8 am</td>
                    <td>
                        <Event color='#8b008b' name='Morning Run! 🏃‍♀️' location='Across Campus'/>
                    </td>
                    <td></td>
                    <td>
                        <Event color='#000066' name='Systems and Networks 💻' location='Undergraduate Commons'/>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">9 am</td>
                    <td></td>
                    <td>
                        <Event color='#660000' name='Artificial Intelligence 🤖' location='College of Business '/>
                    </td>
                    
                    <td></td>
                    <td>
                        <Event color='#660000' name='Artificial Intelligence 🤖' location='College of Business '/>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                        <Event color='#331a00' name='Breakfast with Friends 🍳' location='Archie`s Apartment'/>
                    </td>
                </tr>

                <tr>
                    <td className="time">10 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">11 am</td>
                    <td></td>
                    <td></td>
                    <td>
                        <Event color='#330033' name='Teaching Assistant Meeting 🧑‍🏫' location='College of Computing'/>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">12 pm</td>
                    <td></td>
                    <td></td>
                    <td>
                        <Event color='#003300' name='Well-Being Seminar 🧘' location='Recreation Center'/>
                    </td>
                    <td></td>
                    <td>
                        <Event color='#003300' name='Well-Being Seminar 🧘' location='Recreation Center'/>
                    </td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">1 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <Event color='#333333' name='Research Meeting 📘' location='College of Design'/>
                    </td>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">2 pm</td>
                    <td></td>
                    <td></td>
                    <td>
                        <Event color='#b8860b' name='Study Session 📖' location='Library'/>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">3 pm</td>
                    <td></td>
                    <td>
                        <Event color='#004040' name='Comic and Graphic Arts 🎨' location='Media Building'/>
                    </td>
                    <td></td>
                    <td>
                        <Event color='#004040' name='Comic and Graphic Arts 🎨' location='Media Building'/>
                    </td>
                    
                    <td>
                        <Event color='#663300' name='Project Meeting 📚' location='Engineering Building'/>
                    </td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">4 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <Event color='#008080' name='Grocery Run! 🛒' location='Publix'/>
                    </td>
                </tr>

                <tr>
                    <td className="time">5 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <Event color='#000066' name='Lab: Systems and Networks 💻' location='College of Computing'/>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    )
}

export default Calendar;
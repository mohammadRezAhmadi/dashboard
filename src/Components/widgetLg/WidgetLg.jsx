import React from 'react'
import './WidgetLg.css'
import {transactions} from '../../Data'
export default function WidgetLg() {
    const Button = ({type})=>{
        return <button className={`widgetLgBtn ${type}`}>{type}</button>;
    }
  return (
    <div className='widgetLg'>
        <h3 className="widgetlgtitle">Latest Transactions</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>
                {transactions.map((user)=>(
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src={user.img} className='widgetLgImg'/>
                    <span className="widgetLgName">{user.customer}</span>
                </td>
                <td className="widgetLgDate">{user.date}</td>
                <td className="widgetLgAmount">${user.amount}</td>
                <td className="widgetLgStatus">
                    <Button type={user.status}/>
                </td>
            </tr>
                ))}

        </table>
    </div>
  )
}

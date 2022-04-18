import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Donations</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Date of Donation</th>
          <th className="widgetLgTh">Amount Given</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Tal Lenard</span>
          </td>
          <td className="widgetLgDate">12 Mar 2022</td>
          <td className="widgetLgAmount">$10.00</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sijan Shrestha</span>
          </td>
          <td className="widgetLgDate">12 Mar 2022</td>
          <td className="widgetLgAmount">$100.00</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Manish Tamrakar</span>
          </td>
          <td className="widgetLgDate">12 Mar 2022</td>
          <td className="widgetLgAmount">$500.00</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Nitesh Tripathi</span>
          </td>
          <td className="widgetLgDate">12 Mar 2022</td>
          <td className="widgetLgAmount">$0.50</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Anushil Upreti</span>
          </td>
          <td className="widgetLgDate">12 Mar 2022</td>
          <td className="widgetLgAmount">$22.00</td>
        </tr>
      </table>
    </div>
  );
}

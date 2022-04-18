import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import EditSections from "../../components/EditSections";

export default function AdminHome() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="# of Member Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div> 
    </div>
  );
}

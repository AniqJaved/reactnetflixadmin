import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useState } from "react";
import axios from "axios"
import { useMemo } from "react";

export default function Home() {
  const MONTHS = useMemo(()=>      //We are useMemo because otherwise useEffect will be taking MONTH as parameter, because it is a const array and is not changing.
  [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],[])

  const [userStats, setUserStats] = useState([]);    //We are making userStats array here because there will be multiple users, each user will be an object but the userStats containing more than one user will be array.

  useEffect(()=>{
    const getStats = async ()=>{
      try{
        const res = await axios.get("/users/stats", 
        {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDNmYWRmMDNlYTEzMWY4OWFmYThiOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzkzMDQ3NywiZXhwIjoxNjY4MzYyNDc3fQ.GwaPkwsBIdxbunULrPTdC5PFO5ucyhgqHPBNGkdPMWA"
          }
        }
        )
        //Funtion to sort the months so that we are getting all the months in asceding order. id here represent the month number.
        const statsList = res.data.sort(function (a,b){
          return a._id - b._id
        });

        //Making an array of objects which contains the name of the month and the user count. This format is used used because Chart library accepts that.
        statsList.map((item)=> setUserStats((prev)=>[
          ...prev,
          {name: MONTHS[item._id - 1 ], "New User": item.total },  
        ])
        )
      }
      catch(err){
        console.log(err)
      }
    }
    getStats();
  },[MONTHS])

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}

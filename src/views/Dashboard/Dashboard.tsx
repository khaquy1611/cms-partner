import RangePicker from "@components/customAntd/RangePicker";
import StatisticCard from "@components/Dashboard/StatisticCard";
import { Space } from "antd";
import moment from "moment";
import { RangeValue } from "rc-picker/lib/interface";
import React, { useState } from "react";

const Dashboard = () => {
  const [dates, setDates] = useState<RangeValue<moment.Moment>>([
    moment().subtract(6, "days"),
    moment(),
  ]);
  return (
    <>
        <RangePicker dates={dates} onChange={setDates} />
      <StatisticCard />
    </>
  );
};

export default Dashboard;

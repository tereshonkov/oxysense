import React from "react";
import PressureStats from "../Pressure";
import PulseStats from "../Pulse";

export default function Month() {
  return (
    <>
      <PressureStats
        labels={["1", "2", "3", "4"]}
        datasets={[{ data1: [120, 130, 125, 128], data2: [80, 95, 104, 98] }]}
        percentage1={120}
        percentage2={80}
        analytics={
          "На протяжении месяца ваше среднее давление было стабильным. Систолическое немного выше нормы, но диастолическое находится в пределах допустимого. Рекомендуется отдохнуть и пить больше воды. В целом состояние нормальное."
        }
      />
      <PulseStats
        labels={["1", "2", "3", "4"]}
        datasets={[{ data: [75, 80, 62, 70] }]}
        percentage={72}
        analytics={
          "Ваш пульс на протяжении месяца был в норме. Рекомендуется продолжать следить за уровнем активности и отдыхать при необходимости."
        }
      />
    </>
  );
}

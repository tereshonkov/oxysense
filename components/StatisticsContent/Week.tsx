import React from "react";
import PressureStats from "../Pressure";
import PulseStats from "../Pulse";

export default function Week({period}: {period?: "day" | "week" | "month"}) {
  return (
    <>
      <PressureStats
        labels={["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"]}
        datasets={[{ data1: [120, 130, 125, 128, 132, 129, 131], data2: [80, 95, 104, 98, 100, 97, 99] }]}
        percentage1={120}
        percentage2={80}
        analytics={
          "На протяжении недели ваше среднее давление было стабильным. Систолическое немного выше нормы, но диастолическое находится в пределах допустимого. Рекомендуется отдохнуть и пить больше воды. В целом состояние нормальное."
        }
      />
      <PulseStats
        labels={["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"]}
        datasets={[{ data: [75, 80, 62, 70, 68, 74, 69] }]}
        percentage={72}
        analytics={
          "Ваш пульс на протяжении недели был в норме. Рекомендуется продолжать следить за уровнем активности и отдыхать при необходимости."
        }
        period={period}
      />
    </>
  );
}

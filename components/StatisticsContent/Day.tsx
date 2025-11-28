import React from "react";
import PressureStats from "../Pressure";
import PulseStats from "../Pulse";

export default function Day({period}: {period?: "day" | "week" | "month"}) {
  return (
    <>
      <PressureStats
        labels={["Ранок", "День", "Вечір"]}
        datasets={[{ data1: [120, 130, 125], data2: [80, 95, 104] }]}
        percentage1={120}
        percentage2={80}
        analytics={
          "Сегодня ваше среднее давление было стабильным. Систолическое немного выше нормы, но диастолическое находится в пределах допустимого. Рекомендуется отдохнуть и пить больше воды. В целом состояние нормальное."
        }
      />
      <PulseStats
        labels={["Ранок", "День", "Вечір"]}
        datasets={[{ data: [75, 80, 62] }]}
        percentage={72}
        analytics={
          "Ваш пульс сегодня был в норме. Рекомендуется продолжать следить за уровнем активности и отдыхать при необходимости."
        }
        period={period}
      />
    </>
  );
}

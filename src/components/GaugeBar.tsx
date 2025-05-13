
import React, { useState } from 'react';
import useGuageBar from '../hooks/useGuageBar';

const GuageBar = () => {
  const [intake, setIntake] = useState(0);
  const [recommended, setRecommended] = useState(1);

  const { percentage, barColor } = useGuageBar(intake, recommended);

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-4">
      <h2 className="text-lg font-bold">영양제 섭취 게이지</h2>

      <div className="flex items-end gap-x-4">
        <div className="flex-1">
          <label className="block text-sm mb-1">권장 섭취량 (mg)</label>
          <input
            type="number"
            value={recommended}
            onChange={(e) => setRecommended(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-2 py-1"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm mb-1">오늘 섭취량 (mg)</label>
          <input
            type="number"
            value={intake}
            onChange={(e) => setIntake(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-2 py-1"
          />
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
        <div
          className={`h-full ${barColor}`}
          style={{ width: `${percentage}%`, transition: 'width 0.5s ease' }}
        />
      </div>

      <div className="text-right text-sm text-gray-700">
        {percentage}% 섭취 완료
      </div>
    </div>
  );
};

export default GuageBar;
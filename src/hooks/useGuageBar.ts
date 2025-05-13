import { useMemo } from 'react';

const useGuageBar = (intake, recommended) => {
  const { percentage, barColor } = useMemo(() => {
    const safeRecommended = recommended || 1; // 0으로 나누는 것 방지
    const rawPercentage = (intake / safeRecommended) * 100;
    const percentage = Math.min(rawPercentage, 100).toFixed(1);

    const barColor = "bg-yellow-400"

    return { percentage, barColor };
  }, [intake, recommended]);

  return { percentage, barColor };
};

export default useGuageBar;
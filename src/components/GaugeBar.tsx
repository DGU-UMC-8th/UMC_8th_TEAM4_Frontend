// components/GaugeBar.tsx
const GaugeBar = () => {
  return (
    <div className="my-4">
      <div className="text-sm mb-1">비타민 D + 칼슘</div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div className="bg-yellow-400 h-3 rounded-full w-4/5"></div>
      </div>
    </div>
  )
}

export default GaugeBar

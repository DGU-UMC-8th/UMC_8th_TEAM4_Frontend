import NavBar from "../components/NavBar"

const VitaCheckPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        
          <div className="space-x-6 text-sm font-medium">
            <span className="text-gray-600">목적별</span>
            <span className="text-gray-600">성분별</span>
            <span className="text-gray-600">조합</span>
            <span className="text-blue-600 font-semibold">마이페이지</span>
          </div>
        </div>

        {/* 조합 분석 타이틀 */}
        <span className="text-xl font-semibold mb-4">조합 분석</span>
        <span className="text-sm text-gray-500 mb-4">복용 중인 약도 조합 가능합니다!</span>

        <div className="flex gap-8">
          {/* 왼쪽: 제품 선택 버튼 */}
          <div className="w-1/4 space-y-2">
            <button className="px-4 py-2 bg-gray-200 rounded-md">추가</button>
            {["제품 1", "제품 2", "제품 3", "제품 4"].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center px-4 py-2 bg-white border rounded-md shadow-sm"
              >
                <span>{item}</span>
                <button className="text-red-400 text-sm">X</button>
              </div>
            ))}
          </div>

          {/* 오른쪽: 분석 결과 */}
          <div className="w-3/4 space-y-2">
            {/* 분석 타이틀 라인 */}
            <div className="grid grid-cols-3 text-center text-sm font-semibold text-gray-700 border-b pb-2">
              <div>제품</div>
              <div>0-최적</div>
              <div>최적-상한</div>
              <div>초과</div>
            </div>

            {/* 예시 항목 */}
            {["비타민 C", "유산균", "염산", "글루타치온", "비타민 A"].map((item, i) => (
              <div key={i} className="grid grid-cols-3 items-center gap-4 py-1">
                <div className="text-sm">{item}</div>
                <div className="bg-gray-200 rounded-full h-3 relative overflow-hidden">
                  <div className="bg-yellow-400 h-3 w-2/3 absolute left-0 top-0"></div>
                </div>
                <div className="bg-gray-200 rounded-full h-3 relative overflow-hidden">
                  <div className="bg-yellow-400 h-3 w-1/4 absolute left-0 top-0"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default VitaCheckPage


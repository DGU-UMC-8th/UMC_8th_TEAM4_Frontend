const NavBar = () => {
  return (
    <nav className="w-full bg-white shadow px-4 py-2 flex items-center justify-between">
      <div className="text-xl font-bold">VitaCheck</div>

      {/* 상단 검색창 */}
      <div className="flex items-center justify-between mb-6">
          <input
            type="text"
            placeholder="제품 또는 성분 검색"
            className="w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          /></div>     
                <div className="space-x-6 text-gray-600 text-sm">
        <span>목적별</span>
        <span>성분별</span>
        <span>조합</span>
        <span>마이페이지</span>
      </div> 
    </nav>
  )
}

export default NavBar

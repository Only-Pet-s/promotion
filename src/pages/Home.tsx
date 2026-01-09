// import { Smartphone, Play } from 'lucide-react';

function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* 헤더 */}
            <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
                <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
                    <div className="text-xl font-bold text-coral">Only Pet's</div>
                    <button className="bg-coral text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                        다운로드
                    </button>
                </nav>
            </header>

            {/* 메인 Hero 섹션 */}
            <section className="pt-32 pb-20 px-4 text-center">
        <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600">
          🐶 반려동물 전용 숏폼 플랫폼
        </span>
                <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-amber">Only Pet's</span>
                </h1>
                <p className="mb-10 text-lg text-gray-600">
                    우리 집 이제 전용 앱에서 즐기세요!
                </p>

                <section className="flex flex-col md:flex-row items-center justify-between py-20 px-10 gap-10">
                    <div className="w-full md:w-1/2">
                        <img src="이미지주소" className="rounded-xl shadow-lg" alt="서비스캡쳐" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <h2 className="text-3xl font-bold">서비스 제목</h2>
                        <p className="text-gray-600 leading-relaxed">상세 설명 블라블라...</p>
                    </div>
                </section>

                {/* 섹션 2: 텍스트 왼쪽, 이미지 오른쪽 (md:flex-row-reverse 사용) */}
                <section className="flex flex-col md:flex-row-reverse items-center justify-between py-20 px-10 gap-10 bg-gray-50">
                    <div className="w-full md:w-1/2">
                        <img src="이미지주소" className="rounded-xl shadow-lg" alt="서비스캡쳐" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4 text-right md:text-left">
                        <h2 className="text-3xl font-bold">또 다른 기능</h2>
                        <p className="text-gray-600 leading-relaxed">이 기능은 어쩌구 저쩌구...</p>
                    </div>
                </section>

                <section className="flex flex-col md:flex-row items-center justify-between py-20 px-10 gap-10">
                    <div className="w-full md:w-1/2">
                        <img src="이미지주소" className="rounded-xl shadow-lg" alt="서비스캡쳐" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <h2 className="text-3xl font-bold">서비스 제목</h2>
                        <p className="text-gray-600 leading-relaxed">상세 설명 블라블라...</p>
                    </div>
                </section>

            </section>
        </div>
    );
}
export default Home;
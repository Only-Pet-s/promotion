import { Smartphone, Play } from 'lucide-react';

function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* 헤더 */}
            <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
                <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
                    <div className="text-xl font-bold text-yellow-300">Only Pet's</div>
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
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
                    Only <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Pet's</span>
                </h1>
                <p className="mb-10 text-lg text-gray-600">
                    우리 집 댕댕이의 귀여운 순간, 이제 전용 앱에서 즐기세요!
                </p>

                {/* 버튼들 */}
                <div className="flex flex-col gap-4 sm:flex-row justify-center">
                    <button
                        className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-xl shadow-lg hover:bg-gray-800 transition">
                        <Play fill="white" size={24}/>
                        <div className="text-left">
                            <div className="text-xs opacity-80">GET IT ON</div>
                            <div className="text-xl font-bold leading-none">Google Play</div>
                        </div>
                    </button>
                    <button
                        className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition">
                        <Smartphone size={28}/>
                        <div className="text-left">
                            <div className="text-xs opacity-80">Download on the</div>
                            <div className="text-xl font-bold leading-none">App Store</div>
                        </div>
                    </button>
                </div>
            </section>
        </div>
    );
}
export default About;
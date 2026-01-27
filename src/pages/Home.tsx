// import { Smartphone, Play } from 'lucide-react';

// import {QrCode} from "lucide-react";
import feedImg from '../assets/feed.png';
import exploreImg from '../assets/explore.png';
import lectureMainImg from '../assets/lecturemain.png';
import lectureDetailImg from '../assets/lecturedetail.png';
import sitterImg from '../assets/sitter.png';
import petSitterMyImg from '../assets/petsittermy.png';
import opQrImg from '../assets/opqr.jpg';

function Home() {
    const scrollToDownload = () => {
        const downloadSection = document.getElementById('download-section');
        if (downloadSection) {
            downloadSection.scrollIntoView({behavior: 'smooth'});
        }
    };
    const toTitle = () => {
        const titleSection = document.getElementById('title');
        if (titleSection) {
            titleSection.scrollIntoView({behavior: 'smooth'});
        }
    };
    return (
        <div className="min-h-screen bg-white snap-y snap-proximity overflow-y-scroll h-screen">
            {/* 헤더 */}
            <header className="fixed top-0 w-full bg-white/50 backdrop-blur-md z-50 border-b border-gray-100">
                <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
                    <div className="text-3xl font-bold text-coral cursor-pointer" onClick={toTitle}>Only Pet's</div>
                    <button
                        className="
                            w-[200px] h-[55px] relative z-10
                            text-white font-semibold text-base
                            rounded-full
                            cursor-pointer
                            bg-gradient-to-r
                            from-coral
                            via-amber
                            to-coral
                            bg-[length:300%_100%]
                            shadow-[0_4px_15px_rgba(255,122,92,0.6)]
                            transition-all
                            duration-400
                            ease-in-out
                            hover:bg-[position:100%_0]
                            hover:shadow-[0_6px_20px_rgba(255,179,71,0.6)]
                            active:scale-95
                          "
                        onClick={scrollToDownload}
                    >
                        <span className="relative z-10">다운로드</span>
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-amber to-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </nav>
            </header>

            {/* 메인 Hero 섹션 */}
            <section id="title" className="pt-32 pb-20 px-4 text-center">
                <span
                    className="mb-4 inline-block rounded-full bg-amber-50 px-4 py-1.5 text-sm font-semibold text-coral">
                    반려동물 전용 숏폼 플랫폼
                </span>
                <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
                    <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-amber">Only Pet's</span>
                </h1>
                <p className="mb-10 text-lg text-gray-600">
                    우리 집 이제 전용 앱에서 즐기세요!
                </p>
            </section>

            <section
                className="flex flex-col md:flex-row items-center justify-between py-20 px-10 gap-10 bg-gradient-to-br from-blue-50 via-amber/10 to-coral/10 snap-start min-h-screen">
                <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-2 gap-4 place-items-center">
                        <img src={feedImg}
                             className="w-full max-w-[220px] md:max-w-[260px] h-auto rounded-xl shadow-lg" alt="서비스캡쳐"/>
                        <img src={exploreImg}
                             className="w-full max-w-[220px] md:max-w-[260px] h-auto rounded-xl shadow-lg" alt="서비스캡쳐"/>
                    </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold">Only Pet's로 일상 공유</h2>
                    <p className="text-gray-600 leading-relaxed">이미지와 쇼츠 영상으로 반려동물의 일상을 기록하고,<br/> 커뮤니티에서 함께 공감하고 소통하세요.
                    </p>
                </div>
            </section>

            {/* 섹션 2: 텍스트 왼쪽, 이미지 오른쪽 (md:flex-row-reverse 사용) */}
            <section
                className="flex flex-col md:flex-row-reverse items-center justify-between py-20 px-10 gap-10 bg-gradient-to-br from-coral/10 via-amber/10 to-blue-50 snap-start min-h-screen">
                <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-2 gap-4 place-items-center">
                        <img src={lectureMainImg}
                             className="w-full max-w-[220px] md:max-w-[260px] h-auto rounded-xl shadow-lg" alt="서비스캡쳐"/>
                        <img src={lectureDetailImg}
                             className="w-full max-w-[220px] md:max-w-[260px] h-auto rounded-xl shadow-lg" alt="서비스캡쳐"/>
                    </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4 md:pl-6">
                    <h2 className="text-3xl font-bold whitespace-nowrap">강의로 배우는 반려동물 가이드</h2>
                    <p className="max-w-lg text-gray-600 leading-relaxed">강의 화면에서 전문가 팁과<br/> 실전 노하우를 배우고<br/> 우리 아이에게 바로 적용하세요.</p>
                </div>
            </section>

            <section
                className="flex flex-col md:flex-row items-center justify-between py-20 px-10 gap-10 bg-gradient-to-br from-blue-50 via-amber/10 to-coral/10 snap-start min-h-screen">
                <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-2 gap-4 place-items-center">
                        <img src={sitterImg}
                             className="w-full max-w-[220px] md:max-w-[260px] h-auto rounded-xl shadow-lg" alt="서비스캡쳐"/>
                        <img src={petSitterMyImg}
                             className="w-full max-w-[220px] md:max-w-[260px] h-auto rounded-xl shadow-lg" alt="서비스캡쳐"/>
                    </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold">믿을 수 있는 펫시터 매칭</h2>
                    <p className="text-gray-600 leading-relaxed">펫시터 화면에서 조건에 맞는 돌봄을 찾고,<br/> 일정과 후기를 확인해 안심하고 맡기세요.</p>
                </div>
            </section>
            {/* QR 코드 다운로드 섹션 */}
            <section id="download-section"
                     className="py-20 px-4 bg-gradient-to-br from-coral/10 via-amber/10 to-blue-50 snap-start min-h-screen scroll-mt-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6 text-gray-900">
                        지금 바로 다운로드하세요
                    </h2>
                    <p className="text-lg text-gray-600 mb-12">
                        QR 코드를 스캔하고 Only Pet's 앱을 설치하세요
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                        {/* QR 코드 영역 */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl">
                            <div className="w-64 h-64 bg-gradient-to-br from-coral to-amber p-1 rounded-xl">
                                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center p-4">
                                    <img
                                        src={opQrImg} // <- 실제 qr url 여기에 입력
                                        alt="Only Pet's 다운로드 QR 코드"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">QR 코드로 간편하게 다운로드</p>
                        </div>

                        {/*/!* 다운로드 버튼 영역 *!/*/}
                        {/*<div className="space-y-4">*/}
                        {/*    <button className="w-full md:w-64 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-3 shadow-lg">*/}
                        {/*        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">*/}
                        {/*            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>*/}
                        {/*        </svg>*/}
                        {/*        <div className="text-left">*/}
                        {/*            <p className="text-xs">Download on the</p>*/}
                        {/*            <p className="text-lg font-semibold">App Store</p>*/}
                        {/*        </div>*/}
                        {/*    </button>*/}

                        {/*    <button className="w-full md:w-64 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-3 shadow-lg">*/}
                        {/*        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">*/}
                        {/*            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>*/}
                        {/*        </svg>*/}
                        {/*        <div className="text-left">*/}
                        {/*            <p className="text-xs">GET IT ON</p>*/}
                        {/*            <p className="text-lg font-semibold">Google Play</p>*/}
                        {/*        </div>*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
            {/* 푸터 */}
            <footer className="bg-gray-900 text-white py-10 px-4 snap-end">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-2xl font-bold mb-2">Only Pet's</p>
                    <p className="text-gray-400 text-sm">반려동물과 함께하는 행복한 순간</p>
                    <p className="text-gray-500 text-xs mt-4">© 2026 Only Pet's. All rights reserved.</p>
                    <p className="text-gray-500 text-xs mt-4">Dev. 이경범, 이후성, 조대원, 유형우</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;

"use client";

import { useState } from "react";
import {
  ImageIcon,
  User,
  MessageSquare,
  Settings,
  CheckCircle,
  ChevronDown,
  Download,
  Search,
  Send,
  Mic,
  Paperclip,
} from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type TabType = "image" | "profile" | "conversation" | "background" | "register";

export default function ImageGenerator() {
  const [promptText, setPromptText] = useState("");
  const [selectedCount, setSelectedCount] = useState("4");
  const [activeTab, setActiveTab] = useState<TabType>("image");
  const [message, setMessage] = useState("");

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Navigation */}
      <div className="border-b border-[#e3e3e3]">
        <div className="flex justify-between">
          <div className="flex flex-1">
            <div
              className={`flex flex-col items-center justify-center py-3 px-6 cursor-pointer ${
                activeTab === "image" ? "border-b-2 border-black" : ""
              }`}
              onClick={() => handleTabClick("image")}
            >
              <ImageIcon
                className={`w-5 h-5 mb-1 ${
                  activeTab === "image" ? "" : "text-[#c7c5be]"
                }`}
              />
              <span
                className={`text-xs font-medium ${
                  activeTab === "image" ? "" : "text-[#c7c5be]"
                }`}
              >
                이미지
              </span>
            </div>
            <div
              className={`flex flex-col items-center justify-center py-3 px-6 cursor-pointer ${
                activeTab === "profile" ? "border-b-2 border-black" : ""
              }`}
              onClick={() => handleTabClick("profile")}
            >
              <User
                className={`w-5 h-5 mb-1 ${
                  activeTab === "profile" ? "" : "text-[#c7c5be]"
                }`}
              />
              <span
                className={`text-xs font-medium ${
                  activeTab === "profile" ? "" : "text-[#c7c5be]"
                }`}
              >
                프로필
              </span>
            </div>
            <div
              className={`flex flex-col items-center justify-center py-3 px-6 cursor-pointer ${
                activeTab === "conversation" ? "border-b-2 border-black" : ""
              }`}
              onClick={() => handleTabClick("conversation")}
            >
              <MessageSquare
                className={`w-5 h-5 mb-1 ${
                  activeTab === "conversation" ? "" : "text-[#c7c5be]"
                }`}
              />
              <span
                className={`text-xs font-medium ${
                  activeTab === "conversation" ? "" : "text-[#c7c5be]"
                }`}
              >
                대화 규칙
              </span>
            </div>
            <div
              className={`flex flex-col items-center justify-center py-3 px-6 cursor-pointer ${
                activeTab === "background" ? "border-b-2 border-black" : ""
              }`}
              onClick={() => handleTabClick("background")}
            >
              <Settings
                className={`w-5 h-5 mb-1 ${
                  activeTab === "background" ? "" : "text-[#c7c5be]"
                }`}
              />
              <span
                className={`text-xs font-medium ${
                  activeTab === "background" ? "" : "text-[#c7c5be]"
                }`}
              >
                배경 설정
              </span>
            </div>
            <div
              className={`flex flex-col items-center justify-center py-3 px-6 cursor-pointer ${
                activeTab === "register" ? "border-b-2 border-black" : ""
              }`}
              onClick={() => handleTabClick("register")}
            >
              <CheckCircle
                className={`w-5 h-5 mb-1 ${
                  activeTab === "register" ? "" : "text-[#c7c5be]"
                }`}
              />
              <span
                className={`text-xs font-medium ${
                  activeTab === "register" ? "" : "text-[#c7c5be]"
                }`}
              >
                동록
              </span>
            </div>
          </div>
          <div className="flex items-center px-4">
            <button className="bg-white text-blue-500 hover:bg-blue-50 flex items-center gap-2 rounded-full px-6 py-2 border-0">
              <span className="text-blue-500 font-bold">✶</span>
              <span>캐릭터 테스트해보기</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {activeTab === "image" ? (
          <div className="flex flex-1 p-4">
            {/* Left Side - Image Preview */}
            <div className="w-[400px] bg-[#f6f6f4] rounded-lg p-4 flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <div className="w-32 h-32 bg-[#f5f5f6] rounded border border-[#e3e3e3] flex items-center justify-center">
                  <div className="w-16 h-16 text-[#c7c5be]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-auto flex items-center text-xs text-[#c7c5be]">
                <Download className="w-4 h-4 mr-1" />
                <span className="text-xs text-[#c7c5be]">PC에서 업로드</span>
              </div>
            </div>

            {/* Right Side - Controls */}
            <div className="flex-1 pl-8 flex flex-col">
              {/* Drawing Style */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">그림체</h4>
                <div className="relative">
                  <select className="w-full bg-white border border-[#e3e3e3] rounded-md h-10 px-3 appearance-none">
                    <option value=""></option>
                    <option value="style1">스타일 1</option>
                    <option value="style2">스타일 2</option>
                    <option value="style3">스타일 3</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50" />
                </div>
              </div>

              {/* Image Prompt */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">이미지 프롬프트</h4>
                <div className="relative">
                  <textarea
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    placeholder="영어 키워드로 캐릭터의 모습을 묘사해주세요.
(예: best quality, 1girl, female focus, upper body, brown hair, hoodie, angry, simple background)"
                    className="min-h-[120px] w-full bg-white border border-[#e3e3e3] rounded-md resize-none p-4"
                  />
                  <span className="absolute bottom-2 right-3 text-xs text-[#c7c5be]">
                    {promptText.length}/500
                  </span>
                </div>
              </div>

              {/* Image Count */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">이미지 개수</h4>
                <div className="flex gap-2">
                  {["1", "2", "3", "4"].map((count) => (
                    <button
                      key={count}
                      className={`rounded-md px-6 py-2 ${
                        selectedCount === count
                          ? "bg-white border border-blue-500 text-blue-500"
                          : "bg-white border border-[#e3e3e3] text-black"
                      }`}
                      onClick={() => setSelectedCount(count)}
                    >
                      {count}장
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <div className="flex justify-end mt-8">
                <button className="bg-[#f5f5f6] text-black hover:bg-[#e3e3e3] rounded-md px-6 py-2">
                  생성하기
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-1">
            {/* Form Content based on active tab */}
            <div className="flex-1 p-4">
              {activeTab === "profile" && (
                <div className="max-w-3xl">
                  <h4 className="font-medium mb-4">기본정보</h4>

                  {/* Name */}
                  <div className="mb-6">
                    <label className="block mb-2">이름</label>
                    <input className="w-full bg-white border border-[#e3e3e3] rounded-md h-10 px-3" />
                  </div>

                  {/* Gender */}
                  <div className="mb-6">
                    <label className="block mb-2">성별</label>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                          defaultChecked
                        />
                        <label htmlFor="male">남자</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                        />
                        <label htmlFor="female">여자</label>
                      </div>
                    </div>
                  </div>

                  {/* Age */}
                  <div className="mb-6">
                    <label className="block mb-2">나이</label>
                    <input
                      className="w-full bg-white border border-[#e3e3e3] rounded-md h-10 px-3"
                      placeholder="17"
                    />
                  </div>

                  {/* Appearance */}
                  <div className="mb-6">
                    <label className="block mb-2">외모</label>
                    <p className="text-xs text-[#666] mb-2">
                      머리, 옷, 악세서리, 소품, 전체적인 캐릭터의 이미지 등
                      작성해주세요.
                    </p>
                    <textarea
                      className="min-h-[120px] w-full bg-white border border-[#e3e3e3] rounded-md resize-none p-4"
                      placeholder="머리: 금발의 긴 머리를 양쪽으로 묶어 내렸으며, 머리 위에 작은 노란 베레모를 쓰고 있다. 사이드에는 꽃모양 머리핀 꽂아져 있다.
얼굴: 동그란 곡선형의 안경이 그녀의 작고 둥근 사랑 얼굴 안의 이마까지 감싸있다.
성격: 주위의 일에 항상 흥미우선에 호들갑 성격이며, 코에 입김이 잘 붙기를 좋아한다.
취미: 책과학이나 별을 스케치로 만지면서 밤하늘 스타일을 만이 좋아한다!
소품: 손에 작은 책을 들고 있는 모습이 자신의 연구에 집이를 보여준다.
전반적 분위기: 밝고 명랑해 보이지만, 동시에 지적이며 신중해보인다."
                    />
                  </div>

                  {/* Speech Style */}
                  <div className="mb-6">
                    <label className="block mb-2">말투</label>
                    <input
                      className="w-full bg-white border border-[#e3e3e3] rounded-md h-10 px-3"
                      placeholder="항상 쾌활고 자신감 넘치는 말투이며, 종종 상대를 놀라거나 바보로 취급스가 있다. 호감을 상대에게는 친절하고 날카롭게 푼다다."
                    />
                  </div>

                  {/* Speed */}
                  <div className="mb-6">
                    <label className="block mb-2">속도</label>
                    <input
                      className="w-full bg-white border border-[#e3e3e3] rounded-md h-10 px-3"
                      placeholder="전반적으로 차분하고 이해하기 쉬워하며, 특히 호기심나 궁금한 순간에는 빠시 답해 상대방이 따라올 수있게끔 한다다."
                    />
                  </div>

                  {/* Vocabulary */}
                  <div className="mb-6">
                    <label className="block mb-2">어휘</label>
                    <input
                      className="w-full bg-white border border-[#e3e3e3] rounded-md h-10 px-3"
                      placeholder="자신 있는 분야의 개념적인 단어를 즐겨 사용한다. 스스로 '미소의 사자' 혹은 '미 사자님' 이라고 불리며, 위트있고 유머러스하게 말사한다."
                    />
                  </div>

                  {/* Delivery Method */}
                  <div className="mb-6">
                    <label className="block mb-2">전달방식</label>
                    <input
                      className="w-full bg-white border border-[#e3e3e3] rounded-md h-10 px-3"
                      placeholder="짧으면서 가벼운 말투지만 내용 중요한 메시지를 곧잘 전달 한다한다. 상대를 놀래하며 이야기 장니네 전사하를 유사해 만들한다."
                    />
                  </div>
                </div>
              )}

              {activeTab === "conversation" && (
                <div className="max-w-3xl">
                  <h4 className="font-medium mb-4">대화 규칙</h4>

                  <div className="mb-6">
                    <label className="block mb-2">캐릭터의 대화 스타일</label>
                    <textarea
                      className="min-h-[120px] w-full bg-white border border-[#e3e3e3] rounded-md resize-none p-4"
                      placeholder="캐릭터가 대화할 때 사용하는 말투, 어휘, 대화 방식 등을 설명해주세요."
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block mb-2">금지된 주제</label>
                    <textarea
                      className="min-h-[120px] w-full bg-white border border-[#e3e3e3] rounded-md resize-none p-4"
                      placeholder="캐릭터가 대화에서 피해야 할 주제나 내용을 작성해주세요."
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block mb-2">대화 시나리오</label>
                    <textarea
                      className="min-h-[120px] w-full bg-white border border-[#e3e3e3] rounded-md resize-none p-4"
                      placeholder="캐릭터와의 대화 시나리오나 상황 설정을 작성해주세요."
                    />
                  </div>
                </div>
              )}

              {activeTab === "background" && (
                <div className="max-w-3xl">
                  <h4 className="font-medium mb-4">배경 설정</h4>

                  <div className="mb-6">
                    <label className="block mb-2">세계관</label>
                    <div className="relative">
                      <select className="w-full bg-white border border-[#e3e3e3] rounded-md h-10 px-3 appearance-none">
                        <option value="">세계관을 선택해주세요</option>
                        <option value="fantasy">판타지</option>
                        <option value="scifi">공상과학</option>
                        <option value="modern">현대</option>
                        <option value="historical">역사</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block mb-2">배경 설명</label>
                    <textarea
                      className="min-h-[120px] w-full bg-white border border-[#e3e3e3] rounded-md resize-none p-4"
                      placeholder="캐릭터가 존재하는 세계와 배경에 대해 자세히 설명해주세요."
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block mb-2">캐릭터의 역할</label>
                    <textarea
                      className="min-h-[120px] w-full bg-white border border-[#e3e3e3] rounded-md resize-none p-4"
                      placeholder="이 세계에서 캐릭터의 역할, 직업, 지위 등을 설명해주세요."
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block mb-2">관계 설정</label>
                    <textarea
                      className="min-h-[120px] w-full bg-white border border-[#e3e3e3] rounded-md resize-none p-4"
                      placeholder="캐릭터와 사용자 간의 관계 설정을 작성해주세요."
                    />
                  </div>
                </div>
              )}

              {activeTab === "register" && (
                <div className="max-w-3xl">
                  <h4 className="font-medium mb-4">캐릭터 등록</h4>

                  <div className="mb-6">
                    <label className="block mb-2">캐릭터 이름</label>
                    <input
                      className="w-full bg-white border border-[#e3e3e3] rounded-md h-10 px-3"
                      placeholder="등록할 캐릭터 이름"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block mb-2">공개 설정</label>
                    <div className="flex items-center gap-2 mb-2">
                      <input type="checkbox" id="public" />
                      <label htmlFor="public">
                        공개 (다른 사용자가 이 캐릭터를 사용할 수 있습니다)
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="private" />
                      <label htmlFor="private">
                        비공개 (나만 이 캐릭터를 사용할 수 있습니다)
                      </label>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block mb-2">태그</label>
                    <input
                      className="w-full bg-white border border-[#e3e3e3] rounded-md h-10 px-3"
                      placeholder="쉼표로 구분하여 태그 입력 (예: 판타지, 마법사, 친절함)"
                    />
                    <p className="text-xs text-[#666] mt-1">
                      최대 5개의 태그를 입력할 수 있습니다.
                    </p>
                  </div>

                  <div className="mb-6">
                    <label className="block mb-2">캐릭터 설명</label>
                    <input
                      className="w-full bg-white border border-[#e3e3e3] rounded-md h-10 px-3"
                      placeholder="캐릭터에 대한 간단한 설명"
                    />
                    <p className="text-xs text-[#666] mt-1">
                      최대 100자까지 입력할 수 있습니다.
                    </p>
                  </div>

                  <div className="flex justify-end mt-8">
                    <button className="bg-[#f5f5f6] text-black hover:bg-[#e3e3e3] rounded-md px-6 py-2 mr-2">
                      임시 저장
                    </button>
                    <button className="bg-blue-500 text-white hover:bg-blue-600 rounded-md px-6 py-2">
                      등록하기
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Character Preview - shared across all non-image tabs */}
            <div className="w-[300px] border-l border-[#e3e3e3] flex flex-col h-full">
              {/* Character Info */}
              <div className="flex items-center gap-2 p-4 border-b border-[#e3e3e3]">
                <div className="relative w-12 h-12">
                  <LazyLoadImage
                    src="/placeholder.svg?height=48&width=48"
                    alt="Character avatar"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <span className="font-medium">아리네스</span>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="bg-white rounded-lg p-3 max-w-[200px] relative mb-4">
                  <span className="text-sm">첫 메시지를 입력해주세요.</span>
                  <div className="absolute w-3 h-3 bg-white transform rotate-45 -left-1.5 top-4"></div>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-[#e3e3e3]">
                <div className="flex gap-2 items-center mb-2">
                  <button className="w-8 h-8 p-0 rounded-full flex items-center justify-center text-[#c7c5be] hover:bg-gray-100">
                    <Mic className="h-4 w-4" />
                  </button>
                  <button className="w-8 h-8 p-0 rounded-full flex items-center justify-center text-[#c7c5be] hover:bg-gray-100">
                    <Paperclip className="h-4 w-4" />
                  </button>
                  <button className="w-8 h-8 p-0 rounded-full flex items-center justify-center text-[#c7c5be] hover:bg-gray-100">
                    <ImageIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex gap-2">
                  <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="메시지를 입력하세요..."
                    className="flex-1 bg-white border border-[#e3e3e3] rounded-full h-10 px-3"
                  />
                  <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 p-0 flex items-center justify-center">
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Search */}
      <div className="flex justify-end p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#c7c5be]" />
          <input
            type="text"
            className="pl-10 pr-4 py-2 border border-[#e3e3e3] rounded-full w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}

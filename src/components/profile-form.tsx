"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Box } from "@/components/ui/box";
import { Flex } from "@/components/ui/flex";
import { Text } from "@/components/ui/text";

export default function ProfileForm() {
  return (
    <Flex direction="column" className="flex-1 p-4">
      <Box className="max-w-3xl">
        {/* Basic Information */}
        <Box className="mb-6">
          <Text variant="h2" className="mb-4">
            기본정보
          </Text>

          {/* Name */}
          <Box className="mb-6">
            <Text className="mb-2">이름</Text>
            <Input className="bg-white border border-[#e3e3e3] rounded-md" />
          </Box>

          {/* Gender */}
          <Box className="mb-6">
            <Text className="mb-2">성별</Text>
            <RadioGroup defaultValue="male" className="flex gap-4">
              <Flex align="center" gap="2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">남자</Label>
              </Flex>
              <Flex align="center" gap="2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">여자</Label>
              </Flex>
            </RadioGroup>
          </Box>

          {/* Age */}
          <Box className="mb-6">
            <Text className="mb-2">나이</Text>
            <Input
              className="bg-white border border-[#e3e3e3] rounded-md"
              placeholder="17"
            />
          </Box>

          {/* Appearance */}
          <Box className="mb-6">
            <Text className="mb-2">외모</Text>
            <Text className="text-xs text-[#666] mb-2">
              머리, 옷, 악세서리, 소품, 전체적인 캐릭터의 이미지 등
              작성해주세요.
            </Text>
            <Textarea
              className="min-h-[120px] bg-white border border-[#e3e3e3] rounded-md resize-none p-4"
              placeholder="머리: 금발의 긴 머리를 양쪽으로 묶어 내렸으며, 머리 위에 작은 노란 베레모를 쓰고 있다. 사이드에는 꽃모양 머리핀 꽂아져 있다.
얼굴: 동그란 곡선형의 안경이 그녀의 작고 둥근 사랑 얼굴 안의 이마까지 감싸있다.
성격: 주위의 일에 항상 흥미우선에 호들갑 성격이며, 코에 입김이 잘 붙기를 좋아한다.
취미: 책과학이나 별을 스케치로 만지면서 밤하늘 스타일을 만이 좋아한다!
소품: 손에 작은 책을 들고 있는 모습이 자신의 연구에 집이를 보여준다.
전반적 분위기: 밝고 명랑해 보이지만, 동시에 지적이며 신중해보인다."
            />
          </Box>

          {/* Speech Style */}
          <Box className="mb-6">
            <Text className="mb-2">말투</Text>
            <Input
              className="bg-white border border-[#e3e3e3] rounded-md"
              placeholder="항상 쾌활고 자신감 넘치는 말투이며, 종종 상대를 놀라거나 바보로 취급스가 있다. 호감을 상대에게는 친절하고 날카롭게 푼다다."
            />
          </Box>

          {/* Speed */}
          <Box className="mb-6">
            <Text className="mb-2">속도</Text>
            <Input
              className="bg-white border border-[#e3e3e3] rounded-md"
              placeholder="전반적으로 차분하고 이해하기 쉬워하며, 특히 호기심나 궁금한 순간에는 빠시 답해 상대방이 따라올 수있게끔 한다다."
            />
          </Box>

          {/* Vocabulary */}
          <Box className="mb-6">
            <Text className="mb-2">어휘</Text>
            <Input
              className="bg-white border border-[#e3e3e3] rounded-md"
              placeholder="자신 있는 분야의 개념적인 단어를 즐겨 사용한다. 스스로 '미소의 사자' 혹은 '미 사자님' 이라고 불리며, 위트있고 유머러스하게 말사한다."
            />
          </Box>

          {/* Delivery Method */}
          <Box className="mb-6">
            <Text className="mb-2">전달방식</Text>
            <Input
              className="bg-white border border-[#e3e3e3] rounded-md"
              placeholder="짧으면서 가벼운 말투지만 내용 중요한 메시지를 곧잘 전달 한다한다. 상대를 놀래하며 이야기 장니네 전사하를 유사해 만들한다."
            />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

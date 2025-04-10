import { Box } from "@/components/ui/box";
import { Flex } from "@/components/ui/flex";
import { Text } from "@/components/ui/text";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BackgroundSettingsForm() {
  return (
    <Flex direction="column" className="flex-1 p-4">
      <Box className="max-w-3xl">
        <Text variant="h4" className="mb-4">
          배경 설정
        </Text>

        <Box className="mb-6">
          <Text className="mb-2">세계관</Text>
          <Select>
            <SelectTrigger className="w-full bg-white border border-[#e3e3e3] rounded-md">
              <SelectValue placeholder="세계관을 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fantasy">판타지</SelectItem>
              <SelectItem value="scifi">공상과학</SelectItem>
              <SelectItem value="modern">현대</SelectItem>
              <SelectItem value="historical">역사</SelectItem>
            </SelectContent>
          </Select>
        </Box>

        <Box className="mb-6">
          <Text className="mb-2">배경 설명</Text>
          <Textarea
            className="min-h-[120px] bg-white border border-[#e3e3e3] rounded-md resize-none p-4"
            placeholder="캐릭터가 존재하는 세계와 배경에 대해 자세히 설명해주세요."
          />
        </Box>

        <Box className="mb-6">
          <Text className="mb-2">캐릭터의 역할</Text>
          <Textarea
            className="min-h-[120px] bg-white border border-[#e3e3e3] rounded-md resize-none p-4"
            placeholder="이 세계에서 캐릭터의 역할, 직업, 지위 등을 설명해주세요."
          />
        </Box>

        <Box className="mb-6">
          <Text className="mb-2">관계 설정</Text>
          <Textarea
            className="min-h-[120px] bg-white border border-[#e3e3e3] rounded-md resize-none p-4"
            placeholder="캐릭터와 사용자 간의 관계 설정을 작성해주세요."
          />
        </Box>
      </Box>
    </Flex>
  );
}

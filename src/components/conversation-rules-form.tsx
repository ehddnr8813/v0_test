import { Box } from "@/components/ui/box";
import { Flex } from "@/components/ui/flex";
import { Text } from "@/components/ui/text";
import { Textarea } from "@/components/ui/textarea";

export default function ConversationRulesForm() {
  return (
    <Flex direction="column" className="flex-1 p-4">
      <Box className="max-w-3xl">
        <Text variant="h4" className="mb-4">
          대화 규칙
        </Text>

        <Box className="mb-6">
          <Text className="mb-2">캐릭터의 대화 스타일</Text>
          <Textarea
            className="min-h-[120px] bg-white border border-[#e3e3e3] rounded-md resize-none p-4"
            placeholder="캐릭터가 대화할 때 사용하는 말투, 어휘, 대화 방식 등을 설명해주세요."
          />
        </Box>

        <Box className="mb-6">
          <Text className="mb-2">금지된 주제</Text>
          <Textarea
            className="min-h-[120px] bg-white border border-[#e3e3e3] rounded-md resize-none p-4"
            placeholder="캐릭터가 대화에서 피해야 할 주제나 내용을 작성해주세요."
          />
        </Box>

        <Box className="mb-6">
          <Text className="mb-2">대화 시나리오</Text>
          <Textarea
            className="min-h-[120px] bg-white border border-[#e3e3e3] rounded-md resize-none p-4"
            placeholder="캐릭터와의 대화 시나리오나 상황 설정을 작성해주세요."
          />
        </Box>
      </Box>
    </Flex>
  );
}

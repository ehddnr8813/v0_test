import { Box } from "@/components/ui/box";
import { Flex } from "@/components/ui/flex";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function RegisterForm() {
  return (
    <Flex direction="column" className="flex-1 p-4">
      <Box className="max-w-3xl">
        <Text variant="h4" className="mb-4">
          캐릭터 등록
        </Text>

        <Box className="mb-6">
          <Text className="mb-2">캐릭터 이름</Text>
          <Input
            className="bg-white border border-[#e3e3e3] rounded-md"
            placeholder="등록할 캐릭터 이름"
          />
        </Box>

        <Box className="mb-6">
          <Text className="mb-2">공개 설정</Text>
          <Flex align="center" gap="2" className="mb-2">
            <Checkbox id="public" />
            <Label htmlFor="public">
              공개 (다른 사용자가 이 캐릭터를 사용할 수 있습니다)
            </Label>
          </Flex>
          <Flex align="center" gap="2">
            <Checkbox id="private" />
            <Label htmlFor="private">
              비공개 (나만 이 캐릭터를 사용할 수 있습니다)
            </Label>
          </Flex>
        </Box>

        <Box className="mb-6">
          <Text className="mb-2">태그</Text>
          <Input
            className="bg-white border border-[#e3e3e3] rounded-md"
            placeholder="쉼표로 구분하여 태그 입력 (예: 판타지, 마법사, 친절함)"
          />
          <Text className="text-xs text-[#666] mt-1">
            최대 5개의 태그를 입력할 수 있습니다.
          </Text>
        </Box>

        <Box className="mb-6">
          <Text className="mb-2">캐릭터 설명</Text>
          <Input
            className="bg-white border border-[#e3e3e3] rounded-md"
            placeholder="캐릭터에 대한 간단한 설명"
          />
          <Text className="text-xs text-[#666] mt-1">
            최대 100자까지 입력할 수 있습니다.
          </Text>
        </Box>

        <Flex justify="end" className="mt-8">
          <Button className="bg-[#f5f5f6] text-black hover:bg-[#e3e3e3] rounded-md px-6 mr-2">
            임시 저장
          </Button>
          <Button className="bg-blue-500 text-white hover:bg-blue-600 rounded-md px-6">
            등록하기
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

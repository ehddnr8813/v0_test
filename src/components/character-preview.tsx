"use client";
import { useState } from "react";
import { Box } from "@/components/ui/box";
import { Flex } from "@/components/ui/flex";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Send, Mic, Paperclip, ImageIcon } from "lucide-react";

export default function CharacterPreview() {
  const [message, setMessage] = useState("");

  return (
    <Flex direction="column" className="h-full">
      {/* Character Info */}
      <Flex align="center" gap="2" className="p-4 border-b border-[#e3e3e3]">
        <Box className="relative w-12 h-12">
          <LazyLoadImage
            src="/placeholder.svg?height=48&width=48"
            alt="Character avatar"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Box>
        <Text className="font-medium">아리네스</Text>
      </Flex>

      {/* Chat Area */}
      <Flex direction="column" className="flex-1 p-4 overflow-y-auto">
        <Card className="bg-white rounded-lg p-3 max-w-[200px] relative mb-4">
          <Text className="text-sm">첫 메시지를 입력해주세요.</Text>
          <Box className="absolute w-3 h-3 bg-white transform rotate-45 -left-1.5 top-4"></Box>
        </Card>
      </Flex>

      {/* Input Area */}
      <Box className="p-4 border-t border-[#e3e3e3]">
        <Flex gap="2" align="center" className="mb-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 rounded-full"
          >
            <Mic className="h-4 w-4 text-[#c7c5be]" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 rounded-full"
          >
            <Paperclip className="h-4 w-4 text-[#c7c5be]" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 rounded-full"
          >
            <ImageIcon className="h-4 w-4 text-[#c7c5be]" />
          </Button>
        </Flex>
        <Flex gap="2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="메시지를 입력하세요..."
            className="flex-1 bg-white border border-[#e3e3e3] rounded-full"
          />
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 p-0 flex items-center justify-center">
            <Send className="h-4 w-4" />
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

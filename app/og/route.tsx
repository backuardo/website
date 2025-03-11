import { Logo } from "app/components/logo";
import { ImageResponse } from "next/og";

export function GET(request: Request) {
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-neutral-900">
        <Logo width={420} height={500} stroke="#b8bb26" fill="#b8bb26" />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

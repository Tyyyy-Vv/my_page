import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "localhost:3000";
  const protocol = headerList.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "肖天佑｜桥梁智能检测与智能建造",
    description: "肖天佑，广州大学土木与交通工程学院 2023 级本科生。研究方向包括桥梁结构健康监测、智能检测机器人、计算机视觉与智能建造。",
    keywords: ["肖天佑", "广州大学", "桥梁结构健康监测", "智能建造", "桥梁检测机器人"],
    authors: [{ name: "肖天佑" }],
    openGraph: {
      title: "肖天佑｜桥梁智能检测与智能建造",
      description: "以结构为本，以感知为眼，让桥梁检测与智能建造走向自动化。",
      type: "website",
      locale: "zh_CN",
      images: [{ url: `${origin}/og.png`, width: 1732, height: 909, alt: "肖天佑学术个人主页" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "肖天佑｜桥梁智能检测与智能建造",
      description: "广州大学土木与交通工程学院 2023 级本科生学术主页。",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

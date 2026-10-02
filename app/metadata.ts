import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Belief English - Trung tâm Ngoại ngữ Niềm Tin | BELIS GROUP",
  description:
    "Hệ sinh thái học tập toàn diện với phương pháp BAC độc quyền. Tiếng Anh cho trẻ em 3-9 tuổi, Cambridge & IELTS. Tương tác 2 chiều, EdTech hiện đại, giáo viên chuyên môn.",
  keywords: [
    "Belief English",
    "BELIS GROUP",
    "trung tâm tiếng Anh",
    "dạy tiếng Anh trẻ em",
    "phương pháp BAC",
    "lớp học tiếng Anh",
    "Cambridge",
    "IELTS",
    "tại Hồ Chí Minh",
    "EdTech",
  ],
  authors: [{ name: "Belief English Team" }],
  creator: "Belief English",
  publisher: "BELIS GROUP",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://beliefenglish.edu.vn",
    title: "Belief English - Phương pháp BAC Độc quyền",
    description:
      "Hệ sinh thái học tập toàn diện khơi dậy niềm tin và phát triển thế hệ tương lai.",
    siteName: "Belief English",
    images: [
      {
        url: "https://images.unsplash.com/photo-1427504494785-cdde7dcbab89?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Lớp học tiếng Anh tương tác - Belief English",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Belief English - Phương pháp BAC Độc quyền",
    description:
      "Hệ sinh thái học tập toàn diện khơi dậy niềm tin và phát triển thế hệ tương lai.",
    creator: "@beliefenglish",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  alternates: {
    canonical: "https://beliefenglish.edu.vn",
  },
  category: "Education",
};

export const viewport = {
  colorScheme: "light",
  themeColor: "#1e3a8a",
};

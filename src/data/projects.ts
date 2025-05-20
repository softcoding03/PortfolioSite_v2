import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "출결관리 시스템 개발",
    description: "기존 플랫폼에 존재하지 않던 출결관리 기능을 처음부터 도입·설계한 신규 프로젝트입니다.",
    period: "2024.12 - 2025.02",
    techStack: ["Kotlin", "Spring Boot", "MySQL", "Exposed DAO"],
    images: [
      "/images/attendance/attendance_domain.png",
      "/images/attendance/attendance_process.png",
      "/images/attendance/attendance01.png",
      "/images/attendance/attendance02.png",
      "/images/attendance/attendance03.png"
    ],
    features: [
      "초기 기획부터 요구사항 정의, 도메인 설계, API 개발 전반 주도",
      "출결 관리와 클래스 그룹 기능을 독립적인 모듈로 설계",
      "Restful API 프로토콜 확립 및 개발"
    ],
    achievements: [
      "일정 내 100% 완수",
      "클라이언트 요구사항 대비 +30% 수준 고도화 기능 제공 -> 높은 만족도",
      "명확한 API 사전 협의로 개발 병렬화 -> 개발 기간 50% 단축",
      "모듈화 설계 -> 유사 기능 개발 리소스 30% 이상 절감 예상"
    ],
    insights: [
      "타팀과 적극적인 커뮤니케이션을 통한 업무 효율성 증가를 경험했습니다.",
      "단순 구현보다 사용자 경험과 시스템 구조의 유연성을 함께 고려하는 설계의 중요성을 확인했습니다.",
      "이후 다른 신규 기능 개발에서도 재사용 가능한 구조로 만드는 습관을 가지게 되었습니다."
    ]
  },
  // ... other projects remain the same
];

export default projects;
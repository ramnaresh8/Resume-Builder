import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import HeaderForm from "./components/HeaderForm";
import Resume from "./components/Resume";
import SummaryForm from "./components/SummaryForm";
import WorkHistoryForm, { WorkHistoryData } from "./components/WorkHistoryForm";
import SkillsForm, { SkillsFormData } from "./components/SkillsForm";
import EducationForm, { EducationFormData } from "./components/EducationForm";
import CustomForm, { CustomData } from "./components/CustomForm";
import { Button } from "./components/ui/button";
import Footer from "./components/Footer";

const exampleResume = {
  headerInfo: {
    header: {
      fullName: "Ram Naresh Kushwah",
      email: "8ramnaresh@gmail.com",
      contact: "+0123456789",
      address: "India",
    },
    colors: {
      email: "#748aad",
      contact: "#265a87",
      address: "#394c87",
      linkedin: "#22c55e",
      website: "#60a5fa",
    },
  },
  summary: {
    summary:
      "Recent Computer Science graduate with expertise in ReactJS and modern web technologies. Proficient in creating responsive and user-friendly websites and applications. Demonstrates strong problem-solving skills and effective communication abilities. Eager to leverage technical knowledge and innovative solutions in a dynamic web development role.",
    color: "#37B7C3",
  },
  skills: {
    skills: [
      { skill: "JavaScript" },
      { skill: "TypeScript" },
      { skill: "ReactJS" },
      { skill: "TailwindCSS" },
      { skill: "NextJS" },
      { skill: "Git" },
      { skill: "Critical Thinking" },
      { skill: "Effective Interpersonal Skills" },
      { skill: "Flexibility and Adaptability" },
      { skill: "Resourcefulness" },
    ],
    color: "#7D8ABC",
  },
  workHistory: {
    workInfo: [
      {
        company: "Chegg India Pvt Ltd. | Part-time",
        address: "Remote",
        role: "Subject Matter Expert",
        startDate: new Date("2023-10-08"),
        endDate: new Date("2024-08-08"),
        description: [
          "Assisted the students with their queries and doubts with the CS subjects",
          "Focused on delivering the quality solutions and explain them in layman's language",
          "Collaborated with the operations team to deliver the quality platform for students",
        ],
      },
      {
        company: "Edden Internet Pvt Ltd.",
        address: "Remote",
        role: "Full Stack Intern",
        startDate: new Date("2023-04-01"),
        endDate: new Date("2024-04-01"),
        description: [
          "Worked with a team of software developers to drive the successful execution of development projects from concept through delivery",
          "Participated in the design, development, and testing of software applications",
          "Reviewed code work for accuracy and functionality",
        ],
      },
    ],
    color: "#fb923c",
  },
  educationHistory: {
    school: [
      {
        name: "Lovely Professional University",
        location: "Punjab, India",
        degree: "Masters in Computer Application",
        startDate: new Date("2024-05-31"),
        endDate: new Date("2026-06-01"),
        achievements: [
          
        ],
      },
      {
        name: "Faculty Of Engineering And Technology, Agra College",
        location: "Agra, Uttar Pradesh",
        degree: "Bachelors in Computer Application",
        startDate: new Date("2021-09-01"),
        endDate: new Date("2023-06-01"),
        achievements: [
          
        ],
      },
    ],
    color: "#22c55e",
  },
  custom: {
    title: "FUN FACTS",
    description: "This resume was created using an app I built!",
    color: "#60a5fa",
  },
};

const emptyResume = {
  headerInfo: {
    header: {
      fullName: "",
      email: "",
      contact: "",
      address: "",
    },
    colors: {
      email: "",
      contact: "",
      address: "",
      linkedin: "",
      website: "",
    },
  },
  summary: {
    summary: "",
    color: "",
  },
  skills: {
    skills: [
      { skill: "" },
      { skill: "" },
      { skill: "" },
      { skill: "" },
      { skill: "" },
      { skill: "" },
      { skill: "" },
      { skill: "" },
      { skill: "" },
      { skill: "" },
    ],
    color: "",
  },
  workHistory: {
    workInfo: [
      {
        company: "",
        address: "",
        role: "",
        startDate: new Date(""),
        endDate: new Date(""),
        description: [],
      },
      {
        company: "",
        address: "",
        role: "",
        startDate: new Date(""),
        endDate: new Date(""),
        description: [],
      },
    ],
    color: "",
  },
  educationHistory: {
    school: [
      {
        name: "",
        location: "",
        degree: "",
        startDate: new Date(),
        endDate: new Date(),
        achievements: [],
      },
      {
        name: "",
        location: "",
        degree: "",
        startDate: new Date(),
        endDate: new Date(),
        achievements: [],
      },
    ],
    color: "",
  },
  custom: {
    title: "",
    description: "",
    color: "",
  },
};

function App() {
  const [resume, setResume] = useState(exampleResume);

  const [headerInfo, setHeaderInfo] = useState(resume.headerInfo);
  const [summaryInfo, setSummaryInfo] = useState(resume.summary);
  const [skillsList, setSkillsList] = useState<SkillsFormData>({
    skills: resume.skills.skills,
    color: resume.skills.color,
  });
  const [workHistoryInfo, setWorkHistoryInfo] = useState<WorkHistoryData>({
    workInfo: resume.workHistory.workInfo,
    color: resume.workHistory.color,
  });
  const [educationList, setEducationList] = useState<EducationFormData>({
    school: resume.educationHistory.school,
    color: resume.educationHistory.color,
  });
  const [customInfo, setCustomInfo] = useState<CustomData>(resume.custom);

  const resumeRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: `${headerInfo.header.fullName} Resume`,
    onAfterPrint: () => console.log("Print complete!"),
    onBeforeGetContent: () => {
      ("");
    },
  });

  // changes all resume states based on load or clear
  useEffect(() => {
    setHeaderInfo(resume.headerInfo);
    setSummaryInfo(resume.summary);
    setSkillsList({
      skills: resume.skills.skills,
      color: resume.skills.color,
    });
    setWorkHistoryInfo({
      workInfo: resume.workHistory.workInfo,
      color: resume.workHistory.color,
    });
    setEducationList({
      school: resume.educationHistory.school,
      color: resume.educationHistory.color,
    });
    setCustomInfo(resume.custom);
  }, [resume]);

  return (
    <div className="main-bg flex h-full w-full flex-col items-center justify-center gap-8 bg-gray-100 p-8 sm:px-4 md:px-8 lg:flex-row lg:items-start lg:px-8">
      <div className="flex w-full flex-col gap-4 md:w-[21cm] lg:w-[360px]">
        <div className="flex w-full gap-2">
          <Button
            variant="outline"
            className="flex-grow"
            onClick={() => setResume(exampleResume)}
          >
            Load Example
          </Button>
          <Button
            variant="destructive"
            className="flex-grow"
            onClick={() => setResume(emptyResume)}
          >
            Clear Resume
          </Button>
        </div>
        <Button variant="default" onClick={handlePrint}>
          Save as PDF
        </Button>
        <HeaderForm onHeaderInfo={(data) => setHeaderInfo(data)} />
        <SummaryForm onSummary={(data) => setSummaryInfo(data)} />
        <SkillsForm onSkills={(skill) => setSkillsList(skill)} />
        <WorkHistoryForm onWorkHistory={(data) => setWorkHistoryInfo(data)} />
        <EducationForm onEducation={(data) => setEducationList(data)} />
        <CustomForm onCustomInfo={(data) => setCustomInfo(data)} />
        <Footer />
      </div>
      <div className="border shadow-xl">
        <Resume
          ref={resumeRef}
          header={{ ...headerInfo }}
          summary={summaryInfo}
          workHistory={{ ...workHistoryInfo }}
          skills={{ ...skillsList }}
          education={{ ...educationList }}
          custom={{ ...customInfo }}
        />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { ArrowLeft, Download, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonalInfoForm } from "@/components/resume/personal-info-form";
import { EducationForm } from "@/components/resume/education-form";
import { ExperienceForm } from "@/components/resume/experience-form";
import { SkillsForm } from "@/components/resume/skills-form";
import { ResumePreview } from "@/components/resume/resume-preview";

export default function BuildPage() {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("personal");

  const [personalData, setPersonalData] = useState({
    firstName: " ",
    lastName: " ",
    email: " ",
    phone: " ",
    address: " ",
    summary: " ",
  });
  const [educationData, setEducationData] = useState([]);
  const [expData, setExpData] = useState({});
  const [skillsData, setSkillsData] = useState(" ");

  const handleSave = () => {
    console.log("Saving resume data:", formData);
  };

  const handleDownload = () => {
    console.log("Downloading resume with template:", templateId);
  };

  return (
    <div className="text-black flex min-h-screen flex-col">
      <div className="container mx-auto flex items-center px-6 py-4 z-40 relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/templates")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Templates
        </Button>
        <h1 className="ml-4 text-xl font-semibold">
          Building <span className="capitalize">{templateId}</span> Resume
        </h1>
      </div>
      <main className="z-5 flex-1 px-6 py-8">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="p-6 w-full">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="mb-6 grid w-full grid-cols-4">
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>
                <TabsContent value="personal">
                  <PersonalInfoForm
                    data={personalData}
                    onSub={(data) =>
                      setPersonalData((prev) => ({ ...prev, ...data }))
                    }
                  />
                </TabsContent>
                <TabsContent value="education">
                  <EducationForm
                    data={educationData}
                    onSub={(newEducationData) =>
                      setEducationData(newEducationData)
                    }
                  />
                </TabsContent>
                <TabsContent value="experience">
                  <ExperienceForm
                    data={expData}
                    onSub={(newExpData) =>
                      setExpData((prev) => ({ ...prev, newExpData }))
                    }
                  />
                </TabsContent>
                <TabsContent value="skills">
                  <SkillsForm
                    data={skillsData}
                    onSub={(data) =>
                      setSkillsData((prev) => ({ ...prev, data }))
                    }
                  />
                </TabsContent>
              </Tabs>
              <div className="mt-6 flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => {
                    const tabs = [
                      "personal",
                      "education",
                      "experience",
                      "skills",
                    ];
                    const currentIndex = tabs.indexOf(activeTab);
                    if (currentIndex > 0) {
                      setActiveTab(tabs[currentIndex - 1]);
                    }
                  }}
                  disabled={activeTab === "personal"}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => {
                    const tabs = [
                      "personal",
                      "education",
                      "experience",
                      "skills",
                    ];
                    const currentIndex = tabs.indexOf(activeTab);
                    if (currentIndex < tabs.length - 1) {
                      setActiveTab(tabs[currentIndex + 1]);
                    }
                  }}
                  disabled={activeTab === "skills"}
                >
                  Next
                </Button>
              </div>
            </Card>
            <div className="sticky top-8 h-fit w-full">
              <ResumePreview
                templateId={templateId}
                personalData={personalData}
                educationData={educationData}
                expData={expData}
                skillsData={skillsData}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";
import Editor from "@monaco-editor/react";
import { redirect, useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/shared/cards/Card";
import codingProblems from "@/data/data";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

const languages = [
  { label: "JavaScript", value: "javascript" },
  { label: "Python", value: "python" },
  { label: "Java", value: "java" },
  { label: "C++", value: "cpp" },
];

const CodeEditor = () => {
  const { problemId } = useParams();
  const router = useRouter();

  const { data: session } = useSession({
      required: true,
      onUnauthenticated() {
          redirect(`/api/auth/signin?callbackUrl=/code-editor/${problemId}`); // Corrected callbackUrl
      },
  });

  const selectedProblem = codingProblems.find((p) => p.id.toString() === problemId);
  
  useEffect(() => {
    if (!selectedProblem) router.push("/dashboard");
  }, [selectedProblem, router]);

  const [language, setLanguage] = useState("java");
  const [code, setCode] = useState("// Write your code in here");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      setOutput("Code compiled successfully");
    } catch (error: unknown) {
      setOutput(`Error: ${error.message}`);
    }
  };

  if (!selectedProblem) return <div className="text-center text-white">Loading...</div>;

  return (
    <div>
        <div className="text-2xl font-bold text-purple-100 italic text-center mt-6 underline">Coding Area</div>
        <motion.div 
        id='shadow_for_card' 
        className='bg-zinc-900 animate-none rounded-lg mx-4 my-4 py-2 px-0 border-slate-800 text-lg cursor-pointer relative'
        viewport={{once:true}}
        >
      <div className="md:p-8 p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Problem Section */}
      <Card className="p-4 bg-zinc-900 text-white border-purple-300">
        <h2 className="text-xl font-semibold text-purple-500">{selectedProblem.title}</h2>
        <p className="text-sm text-gray-400 mt-1">Difficulty: <span className={`font-semibold ${selectedProblem.difficulty === "Easy" ? "text-green-400" : selectedProblem.difficulty === "Medium" ? "text-yellow-400" : "text-red-400"}`}>{selectedProblem.difficulty}</span></p>
        <p className="mt-2">{selectedProblem.description}</p>
        
        <div className="mt-4">
          <h3 className="font-semibold text-purple-300">Example:</h3>
          {selectedProblem.examples.map((ex, index) => (
            <pre key={index} className="p-3 text-wrap rounded-md text-sm bg-zinc-800">
              <strong>Input:</strong> {ex.input}
              <br />
              <strong>Output:</strong> {ex.output}
              <br />
              <strong>Explanation:</strong> {ex.explanation}
            </pre>
          ))}
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-purple-300">Constraints:</h3>
          <ul className="list-disc ml-5 text-sm">
            {selectedProblem.constraints.map((constraint, idx) => (
              <li key={idx}>{constraint}</li>
            ))}
          </ul>
        </div>
      </Card>

      {/* Code Editor Section */}
      <Card className="p-4 bg-zinc-900 text-white border-purple-300">
        <div className="flex justify-between mb-3">
          <Select onValueChange={(value) => setLanguage(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={runCode} className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            Run Code
          </Button>
        </div>
        <Editor height="50vh" language={language} theme="vs-dark" value={code} onChange={(value) => setCode(value || "")} />

        {/* Output Section */}
        <div className="mt-4 bg-zinc-800 p-3 rounded-md text-sm text-purple-300">
          <h3 className="font-semibold">Output:</h3>
          <div className="mt-1">{output || "NA"}</div>
        </div>
      </Card>
    </div>
    </motion.div>
    </div>
  );
};

export default CodeEditor;

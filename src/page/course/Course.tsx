'use client';

import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CourseLesson, HTML_CSS_COURSE, JAVASCRIPT_COURSE } from './data';


interface Course {
  id: string;
  title: string;
  description: string;
  lessons: CourseLesson[];
  language: string;
}

const courses: Course[] = [
  {
    id: 'html-css',
    title: 'HTML va CSS — To‘liq Kurs',
    description: '0 dan professional darajagacha HTML va CSS ni o‘rganing. Amaliy loyihalar bilan.',
    lessons: HTML_CSS_COURSE,
    language: 'html',
  },
  {
    id: 'javascript',
    title: 'JavaScript — To‘liq Kurs (0 dan Professionalgacha)',
    description: 'Modern JavaScript, DOM, Asynchronous programming va amaliy loyihalar.',
    lessons: JAVASCRIPT_COURSE,
    language: 'javascript',
  },
];

export default function CoursesPage() {
  const [activeCourseId, setActiveCourseId] = useState('html-css');
  const [selectedLessonId, setSelectedLessonId] = useState<Record<string, number>>({
    'html-css': 1,
    'javascript': 1,
  });

  const activeCourse = courses.find((c) => c.id === activeCourseId)!;
  const currentLessonId = selectedLessonId[activeCourseId];
  const selectedLesson = activeCourse.lessons.find((l) => l.id === currentLessonId)!;

  const handleLessonChange = (lessonId: number) => {
    setSelectedLessonId((prev) => ({
      ...prev,
      [activeCourseId]: lessonId,
    }));
  };

  const handleNext = () => {
    if (currentLessonId < activeCourse.lessons.length) {
      handleLessonChange(currentLessonId + 1);
    }
  };

  const handlePrev = () => {
    if (currentLessonId > 1) {
      handleLessonChange(currentLessonId - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Frontend Kurslar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bir sahifada bir nechta texnologiyalarni o‘rganing — HTML, CSS, JavaScript va kelajakdagi kurslar.
          </p>
        </div>

        <Tabs.Root
          value={activeCourseId}
          onValueChange={setActiveCourseId}
          className="w-full"
        >
          <Tabs.List className="flex border-b border-gray-200 mb-10 justify-center gap-2">
            {courses.map((course) => (
              <Tabs.Trigger
                key={course.id}
                value={course.id}
                className="px-8 py-4 text-lg font-semibold rounded-t-xl data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:border-b-2 data-[state=active]:border-blue-600 transition-all hover:bg-gray-50"
              >
                {course.title.split(' — ')[0]}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {courses.map((course) => (
            <Tabs.Content key={course.id} value={course.id} className="focus:outline-none">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-900">{course.title}</h2>
                <p className="text-gray-600 mt-3 text-lg">{course.description}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4">
                  <div className="sticky top-8 bg-white rounded-3xl shadow-xl p-6">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                      📚 Mavzular ({course.lessons.length})
                    </h3>

                    <div className="space-y-1 max-h-[70vh] overflow-y-auto pr-3 custom-scroll">
                      {course.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          onClick={() => handleLessonChange(lesson.id)}
                          className={`w-full text-left px-5 py-4 rounded-2xl transition-all flex items-center gap-4
                            ${currentLessonId === lesson.id
                              ? 'bg-blue-600 text-white shadow-lg'
                              : 'hover:bg-gray-100 text-gray-700'
                            }`}
                        >
                          <span className="font-mono text-sm opacity-70 w-6">
                            {String(lesson.id).padStart(2, '0')}
                          </span>
                          <span className="font-medium flex-1">{lesson.theme}</span>
                          {lesson.duration && (
                            <span className="text-xs opacity-75 whitespace-nowrap">
                              {lesson.duration}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <div className="bg-white rounded-3xl shadow-2xl p-10">
                    <div className="mb-8">
                      <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {String(currentLessonId).padStart(2, '0')} / {course.lessons.length}
                      </span>
                      <h3 className="text-4xl font-bold text-gray-900 mt-5 leading-tight">
                        {selectedLesson.theme}
                      </h3>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-700 mb-10">
                      <p>{selectedLesson.description}</p>
                    </div>

                    {selectedLesson.example && (
                      <div className="mt-10">
                        <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          💻 Amaliy misol
                        </h4>
                        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-inner">
                          <SyntaxHighlighter
                            language={course.language}
                            style={oneDark}
                            showLineNumbers
                            customStyle={{
                              margin: 0,
                              borderRadius: '16px',
                              fontSize: '15px',
                            }}
                          >
                            {selectedLesson.example}
                          </SyntaxHighlighter>
                        </div>
                      </div>
                    )}

                    {selectedLesson.note && (
                      <div className="mt-10 bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl">
                        <p className="font-medium text-amber-800">💡 Eslatma:</p>
                        <p className="text-amber-700 mt-2">{selectedLesson.note}</p>
                      </div>
                    )}

                    {selectedLesson.advice && (
                      <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                        <p className="font-medium text-emerald-800">🚀 Maslahat:</p>
                        <p className="text-emerald-700 mt-2">{selectedLesson.advice}</p>
                      </div>
                    )}

                    <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
                      <button
                        onClick={handlePrev}
                        disabled={currentLessonId === 1}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl disabled:opacity-40 hover:bg-gray-100 transition"
                      >
                        ← Oldingi mavzu
                      </button>

                      <button
                        onClick={handleNext}
                        disabled={currentLessonId === course.lessons.length}
                        className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition disabled:opacity-40"
                      >
                        Keyingi mavzu →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </div>
  );
}
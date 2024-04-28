"use client";

import { useEffect, useState } from "react";
import Nav from "./nav";
import { cn, toPersianNumber } from "@/lib/utils";
import dayjs from "dayjs";
import { GraduationCap, PencilIcon, Presentation, TrashIcon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
var weekday = require('dayjs/plugin/weekday')

// get all tailwind colors from tailwindcss.com with their name and shade 100 and 500 color code
const colors = {
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
  zinc: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  stone: {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917',
    950: '#0c0a09',
  },
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
    950: '#431407',
  },
  amber: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
    950: '#422006',
  },
  lime: {
    50: '#f7fee7',
    100: '#ecfccb',
    200: '#d9f99d',
    300: '#bef264',
    400: '#a3e635',
    500: '#84cc16',
    600: '#65a30d',
    700: '#4d7c0f',
    800: '#3f6212',
    900: '#365314',
    950: '#1a2e05',
  },
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  emerald: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
    950: '#022c22',
  },
  teal: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
    950: '#042f2e',
  },
  cyan: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
    950: '#083344',
  },
  sky: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  indigo: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  },
  violet: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
    950: '#2e1065',
  },
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
    950: '#3b0764',
  },
  fuchsia: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
    950: '#4a044e',
  },
  pink: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
    700: '#be185d',
    800: '#9d174d',
    900: '#831843',
    950: '#500724',
  },
  rose: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
    950: '#4c0519',
  },
};

// two class for courses and days data
class Course {

  constructor(id, title, color, teacher, periods, asistant, asistantPeriods) {
    this.id = id;
    this.title = title;
    this.teacher = teacher;
    this.color = color;
    this.periods = periods;
    this.asistant = asistant;
    this.asistantPeriods = asistantPeriods;
  }
}

class Period {
  constructor(days, start, end, classRoom) {
    this.days = days;
    this.start = start;
    this.end = end;
    this.classRoom = classRoom;
  }

  // get height of period in vh from HH:MM format by 80dvh height of day and 5vh for each hour and 5vh prefix and suffix
  get height() {
    return (this.end.split(":")[0] - this.start.split(":")[0] + (this.end.split(":")[1] - this.start.split(":")[1]) / 60) * 5;
  }

  // get top of period in vh from HH:MM format by 80dvh height of day and 5vh for each hour and 5vh prefix and suffix
  get top() {
    return (this.start.split(":")[0] - 7 + (this.start.split(":")[1] / 60)) * 5;
  }
}

const days = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];

const daysEN = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

dayjs.extend(weekday)

export default function Home() {

  const [courses, setCourses] = useState([]);
  const [isThereConflict, setIsThereConflict] = useState(false);
  const [oppenedCourse, setOppenedCourse] = useState(null);

  useEffect(() => {
    const course1 = new Course(
      1,
      "جبر خطی عددی",
      colors.blue,
      "دکتر دهقان",
      [
        new Period([0, 2], "10:45", "12:15", "ریاضی ۲۰۹"),
      ],
      null,
      []
    );

    const course2 = new Course(
      2,
      "اخلاق مهندسی",
      colors.red,
      "دکتر رجبی",
      [
        new Period([2], "15:00", "17:00", "خیام ۰۱۰"),
      ],
      null,
      []
    );

    const course3 = new Course(
      3,
      "تاریخ امامت",
      colors.teal,
      "دکتر قاضی خانی",
      [
        new Period([4], "10:00", "12:00", "خیام ۰۱۰"),
      ],
      null,
      []
    );

    const course4 = new Course(
      4,
      "تفسیر موضوعی قرآن",
      colors.orange,
      "دکتر موسوی قدمگاهی",
      [
        new Period([2], "13:00", "15:00", "کلاس 02 خيام2"),
      ],
      null,
      []
    );

    const course5 = new Course(
      5,
      "اندیشه ۱",
      colors.slate,
      "دکتر میرخلیلی",
      [
        new Period([0], "13:00", "15:00", "خیام ۱۱"),
      ],
      null,
      []
    );

    const course6 = new Course(
      6,
      "اصول مدیریت",
      colors.yellow,
      "دکتر محدث خراسانی",
      [
        new Period([1, 3], "13:30", "15:00", "ریاضی ۲۰۶"),
      ],
      null,
      []
    );

    const course7 = new Course(
      6,
      "برنامه‌ریزی استراتژیک",
      colors.fuchsia,
      "دکتر سیروس",
      [
        new Period([1, 3], "15:00", "16:30", "صنایع ۱۰۶"),
      ],
      null,
      []
    );

    setCourses([course1, course2, course3, course4, course5, course6, course7]);

  }, []);

  function checkConflict() {
    let conflict = false;
    courses.forEach((course, i) => {
      course.periods.forEach((period, j) => {
        courses.forEach((course2, k) => {
          if (i !== k) {
            course2.periods.forEach((period2, l) => {
              if (period.days.some(day => period2.days.includes(day))) {
                if ((period.start >= period2.start && period.start < period2.end) || (period.end > period2.start && period.end <= period2.end)) {
                  conflict = true;
                }
              }
            });
          }
        })
      });
    });
    setIsThereConflict(conflict);
  }

  useEffect(() => {
    checkConflict();
  }, [courses]);

  return (
    <div className="relative flex min-h-screen flex-col bg-background">

      {
        isThereConflict && (
          <div className="w-full h-8 bg-red-500 text-white font-bold text-sm flex items-center justify-center">
            <p>
              به نظر می‌رسد که برخی از کلاس‌ها با یکدیگر تداخل دارند
            </p>
          </div>
        )
      }

      <Nav />

      <section className="hidden md:flex container py-5 max-w-screen-2xl items-center justify-between">
        <div className="rounded w-full">
          <div className="grid grid-cols-8 font-bold border-b pb-3">
            <div></div>
            {
              days.map((day, i) => {
                return (
                  <p key={i}>
                    {day}
                  </p>
                );
              })
            }
          </div>
          <div className="grid grid-cols-8 h-[calc(70dvh)]">
            <div className="relative h-full">
              {/* show hours of day between 7am until 8pm as absolute  */}
              <div className="w-full h-full flex flex-col justify-top text-sm font-bold border-l">
                <div
                  className="w-full flex items-start justify-end text-end gap-5"
                  style={
                    {
                      height: "calc(5vh)",
                    }
                  }
                ></div>
                {
                  Array(14).fill().map((_, i) => {
                    return <div key={i} className="w-full flex items-start justify-end text-end gap-5"
                      style={
                        {
                          height: "calc(5vh)",
                        }
                      }
                    >
                      <span className="-mt-2">
                        {toPersianNumber(`${i + 7}:00`)}
                      </span>
                      <span className="w-3 h-[1px] bg-[#d3d3d3] inline-block"></span>
                    </div>;
                  })
                }
                <div
                  className="w-full flex items-start justify-end text-end gap-5"
                  style={
                    {
                      height: "calc(5vh)",
                    }
                  }
                ></div>
              </div>
            </div>
            {
              Array(7).fill().map((_, i) => {
                return (
                  <div key={i} className="relative border-l border-l-neutral-100">
                    {
                      courses.map((course, j) => {
                        return course.periods.filter(period => period.days.includes(i)).map((period, k) => {
                          return (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3 }}

                              key={k}
                              layoutId={course.id}
                              onClick={() => setOppenedCourse(course.id)}
                              className={`absolute w-full rounded-lg p-2 border-y border-y-white border-l-4 border-l-white border-r-4`}
                              style={{
                                top: `calc(${period.top}vh + 5vh)`,
                                height: `calc(${period.height}vh)`,
                                backgroundColor: course.color[100],
                                borderRightColor: course.color[400],
                                color: course.color[950],
                                right: "0",
                                margin: "auto",
                              }}
                            >
                              <p className="text-sm font-bold line-clamp-1">{toPersianNumber(course.title)}</p>
                              <p className="text-sm text-end" dir="ltr">
                                {toPersianNumber(period.start) + ' - ' + toPersianNumber(period.end)}
                              </p>
                              <p className="font-normal text-xs line-clamp-1">{course.teacher}</p>
                            </motion.div>
                          );
                        });
                      })
                    }
                    {
                      courses.map((course, j) => {
                        return course.asistantPeriods.filter(period => period.days.includes(i)).map((period, k) => {
                          return (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3 }}

                              key={k}
                              onClick={() => setOppenedCourse(course.id)}
                              className={`absolute w-full rounded-lg p-2 border-y border-y-white border-l-4 border-l-white border-r-4`}
                              style={{
                                top: `calc(${period.top}vh + 5vh)`,
                                height: `calc(${period.height}vh)`,
                                backgroundColor: course.color[100],
                                borderRightColor: course.color[400],
                                color: course.color[950],
                                right: "0",
                                margin: "auto",
                              }}
                            >
                              <motion.p className="absolute top-3 left-3 font-bold text-2xl opacity-5">TA</motion.p>
                              <motion.p className="text-sm font-bold line-clamp-1">{toPersianNumber(course.title)}</motion.p>
                              <motion.p className="text-sm text-end" dir="ltr">
                                {toPersianNumber(period.start) + ' - ' + toPersianNumber(period.end)}
                              </motion.p>
                              <motion.p className="font-normal text-xs line-clamp-1">{course.asistant}</motion.p>
                            </motion.div>
                          );
                        });
                      })
                    }
                  </div>
                );
              })
            }
          </div>
        </div>
      </section>

      <section className="flex md:hidden flex-col">
        {
          days.map((day, i) => {
            return (
              <div key={i} className={"relative flex flex-col border-b border-neutral-100 py-5 gap-2 container"}>
                {
                  i == daysEN.findIndex(d => d === dayjs().format('dddd')) &&
                  <div className="block absolute left-5 top-3 opacity-10">
                    <p className="text-4xl font-black">امروز</p>
                  </div>
                }
                <p className="relative text-lg font-bold">
                  {day}
                </p>
                {
                  courses.map((course, j) => {
                    return course.periods.filter(period => period.days.includes(i)).map((period, k) => {
                      return (
                        <div
                          key={k}
                          className={`w-full rounded-lg p-2 border-y border-y-white border-l-4 border-l-white border-r-4`}
                          style={{
                            backgroundColor: course.color[100],
                            borderRightColor: course.color[400],
                            color: course.color[950],
                          }}
                        >
                          <p className="text-sm font-bold">{toPersianNumber(course.title)}</p>
                          <p className="text-sm text-end mb-3" dir="ltr">
                            {toPersianNumber(period.start) + ' - ' + toPersianNumber(period.end)}
                          </p>
                          <div className="w-full flex items-center justify-start gap-3">
                            {
                              course.teacher &&
                              <div className="flex items-center justify-start gap-1">
                                <GraduationCap size={14} />
                                <p className="font-normal text-xs">{course.teacher}</p>
                              </div>
                            }
                            {
                              period.classRoom &&
                              <div className="flex items-center justify-start gap-1">
                                <Presentation size={14} />
                                <p className="font-normal text-xs">{period.classRoom}</p>
                              </div>
                            }
                          </div>
                        </div>
                      );
                    });
                  })
                }
                {
                  courses.map((course, j) => {
                    return course.asistantPeriods.filter(period => period.days.includes(i)).map((period, k) => {
                      return (
                        <div
                          key={k}
                          className={`w-full rounded-lg p-2 border-y border-y-white border-l-4 border-l-white border-r-4`}
                          style={{
                            backgroundColor: course.color[100],
                            borderRightColor: course.color[400],
                            color: course.color[950],
                          }}
                        >
                          <p className="text-sm font-bold">{toPersianNumber(course.title)}</p>
                          <p className="text-sm text-end" dir="ltr">
                            {toPersianNumber(period.start) + ' - ' + toPersianNumber(period.end)}
                          </p>
                          <p className="font-normal text-xs">{course.teacher}</p>
                        </div>
                      );
                    });
                  })
                }
              </div>
            )
          })
        }
      </section>

      {oppenedCourse && (
        <>
          <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}

            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 backdrop-blur-sm z-20" onClick={() => setOppenedCourse(null)}>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 0.2 }}
            className={"fixed z-30 top-1/2 right-1/2 !translate-x-1/2 !-translate-y-1/2 bg-white max-w-sm w-full border px-4 py-6 rounded-lg border-r-4"}
            style={{
              borderRightColor: courses.find(c => c.id === oppenedCourse).color[500],
              color: courses.find(c => c.id === oppenedCourse).color[950],
            }}
          >
            <div className="absolute left-3 top-3 flex gap-2">
              <button className="w-6 h-6 bg-yellow-500/10 rounded-full flex items-center justify-center"
                onClick={() => setOppenedCourse(null)}
              >
                <PencilIcon className="w-4 h-4 text-yellow-500" />
              </button>
              <button className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center"
                onClick={() => setOppenedCourse(null)}
              >
                <TrashIcon className="w-4 h-4 text-red-500" />
              </button>
              <button className="w-6 h-6 bg-black/10 rounded-full flex items-center justify-center"
                onClick={() => setOppenedCourse(null)}
              >
                <XIcon className="w-4 h-4 text-black" />
              </button>
            </div>
            <div className="flex flex-col items-start mb-3">
              <motion.p className="text-xs font-bold mb-1">عنوان درس:</motion.p>
              <motion.p>{toPersianNumber(courses.find(c => c.id === oppenedCourse).title)}</motion.p>
            </div>
            <div className="flex flex-col items-start mb-3">
              <motion.p className="text-xs font-bold mb-1">مدرس:</motion.p>
              <motion.p>{courses.find(c => c.id === oppenedCourse).teacher}</motion.p>
            </div>
            <div className="flex flex-col items-start mb-3">
              <motion.p className="text-xs font-bold mb-1">زمان برگزاری:</motion.p>
              {
                console.log(courses.find(c => c.id === oppenedCourse))
              }
              {
                courses.find(c => c.id === oppenedCourse).periods.map((period, i) => {
                  {
                    return period.days.map((day, j) => (
                      <div key={j} className={cn("w-full flex items-center justify-between py-1",
                        j !== 0 && "border-t"
                      )}>
                        <motion.p className="text-sm text-start">
                          {days[day]}
                        </motion.p>
                        <motion.p className="text-sm text-end" dir="ltr">
                          {toPersianNumber(period.start) + ' - ' + toPersianNumber(period.end)}
                        </motion.p>
                      </div>
                    ))
                  }
                })
              }
            </div>
          </motion.div>
        </>
      )}

    </div>
  );
}
